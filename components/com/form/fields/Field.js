"use client";
import React, { useEffect, useState, useContext } from "react";
import FormContext from "../FormContext";
import { useForm } from "react-hook-form";
import { clsx } from "clsx";
import { ErrorMessage } from "@hookform/error-message";
const Field = ({
  children,
  label,
  className,
  multiline,
  source,
  validation,
  name,
  containerClassname,
  labelClassname,
  ...props
}) => {
  const [value, setValue] = useState();
  const { register } = useContext(FormContext);
  const {
    formState: { errors },
  } = useForm();
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    Field.count = Field.count || 0;
    Field.count++;
  }, []);
  return (
    <label className={clsx("block container-label", containerClassname)}>
      {label && (
        <span className="flex">
          <span
            className={clsx("block text-sm font-semibold text-slate-700", labelClassname)}
            dangerouslySetInnerHTML={{ __html: label }}
          ></span>
          {validation && <span className="text-red">*</span>}
        </span>
      )}

      {React.Children.map(children, (child, index) => {
        if (!child) return null;
        return React.cloneElement(child, {
          ...props,
          ...register(name || source, validation),
          name: name || source,
          source,
          className: `mt-1 block w-full px-3 py-2 bg-white border border-color-grey-light rounded-md text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ${className || ""}`,
          onChange: handleOnChange,
        });
      })}
    </label>
  );
};
export default Field;
