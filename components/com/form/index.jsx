"use client";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import FormContext from "./FormContext";
import { getService } from "../../../api/services";
import { ErrorMessage } from "@hookform/error-message";
import * as default_fields_types from "@/components/com/form/fields";
import { Wrapper } from "./style";
import clsx from "clsx";

const SimpleForm = ({
  autoSubmit,
  submitButtonText = "Send",
  title,
  description,
  className,
  children,
  resource,
  id,
  fields,
  //refinement,
  defaultValues,
  containerClassname,
  links,
  ...props
}) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const field_types = { ...default_fields_types };
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (data) => {
    if (resource) {
      try {
        const service = getService(resource);
        let payloads = {
          ...data,
        };
        // if (refinement) payloads = refinement(payloads);
        payloads = {
          ...defaultValues,
          ...payloads,
        };
        console.log(payloads);
        reset();
        let res;
        setSubmitting(true);
        if (id) {
          res = await service.patch(id, payloads);
          if (props.onSubmit) props.onSubmit(res);
          return setSubmitting(false);
        }
        res = await service.create(payloads);
        setSubmitting(false);
        if (props.onSubmit) props.onSubmit(res);
      } catch (error) {
        if (props.onSubmit) props.onSubmit(null, error);
        setSubmitting(false);
      }
    } else {
      if (props.onSubmit) props.onSubmit(data);
    }
  };
  const refinement = () => {};
  const onError = (errors, e) => console.log(errors, e);
  const onChange = async (e) => {
    console.log(">> Value", e.target.value);
  };

  return (
    <Wrapper>
      <FormContext.Provider
        value={{
          register,
          onChange,
        }}
      >
        <div className="w-full p-[16px] pb-[0]">
          <h1 className="text-xl md:text-xxl font-bold pb-4">{title}</h1>
          <p className="text-base md:text-sm xs:text-lg">{description}</p>
        </div>
        <form
          className={`p-[16px] ${className}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid xs:grid-cols-1 xl:grid-cols-2 gap-[24px]">
            {fields &&
              fields.map((field, index) => {
                if (!field) return null;
                let {
                  name,
                  xtype,
                  source,
                  flex,
                  fullWidth,
                  validation,
                  className,
                  label,
                  ...props
                } = field;
                const { children } = field;
                return (
                  <div
                    key={index}
                    className={`col-span-${flex || 1} ${
                      fullWidth ? "col-span-full" : ""
                    }`}
                  >
                    {React.createElement(
                      field_types[xtype || "textinput"],
                      {
                        className,
                        name,
                        label,
                        containerClassname,
                        validation,
                        ...props,
                        register,
                        onChange,
                        ...register(name || source, {
                          ...validation,
                        }),
                      },
                      children &&
                        React.createElement(
                          field_types[children.name || "textinput"],
                          {
                            ...children,
                            register,
                            onChange,
                            ...register(name || source, {
                              ...validation,
                            }),
                          }
                        )
                    )}
                    <ErrorMessage
                      errors={errors}
                      name={source || name}
                      render={({ message }) => (
                        <p className="text-red pl-2 mt-[4px]">{message}</p>
                      )}
                    />
                  </div>
                );
              })}
            {React.Children.map(children, (child, index) => {
              if (!child || !child.props) return null;
              let { name, source, flex, fullWidth, validation } = child.props;
              if (validation.required) {
                label = (
                  <span>
                    <span dangerouslySetInnerHTML={{ __html: label }}></span>
                    <span className="text-red">*</span>
                  </span>
                );
              }
              return (
                <div
                  className={`col-span-${flex || 1} ${
                    fullWidth ? "col-span-full" : ""
                  }`}
                >
                  {React.cloneElement(child, {
                    label,
                    ...register(name || source, {
                      ...validation,
                    }),
                  })}
                  <ErrorMessage errors={errors} name={name || source} />
                </div>
              );
            })}
          </div>
          <div className="pt-4 flex flex-col gap-[2px] w-full [&>div]:justify-center">
            {links?.map((link, index) => (
              <div key={index} className="flex">
                <a href={link.href} target="_blank" className="text-board-color-blue hover:text-board-color-blue-light">
                  {link.label}
                </a>
              </div>
            ))}
          </div>
          <div className="form-action mt-4 flex w-full justify-center">
            <Button
              htmlType="submit"
              size={"large"}
              type="primary"
              loading={submitting}
              className={clsx(
                "bg-primary w-full sm:w-1/2 font-bold text-base rounded-[50px]",
                "xs:text-sm xs:py-4"
              )}
            >
              {submitButtonText}
            </Button>
          </div>
        </form>
      </FormContext.Provider>
    </Wrapper>
  );
};

export default SimpleForm;
