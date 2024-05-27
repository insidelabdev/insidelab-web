"use client";
import React, { useEffect, useState } from "react";
import ButtonStyle from "@/styles/Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Button = ({
  onClick,
  htmlType,
  style,
  color,
  background,
  children,
  ...props
}) => {
  const [type, setType] = useState("default");
  const [current_type, setCurrentType] = useState();
  const [size, setSize] = useState("small");
  const [icon, setIcon] = useState();
  const [className, setClassName] = useState();
  const [disabled, setDisabled] = useState();
  useEffect(() => {
    if (typeof props.type != "undefined") setType(props.type);
  }, [props.type]);
  useEffect(() => {
    if (typeof props.disabled != "undefined") setDisabled(props.disabled);
  }, [props.disabled]);
  useEffect(() => {
    if (typeof props.loading != "undefined") setDisabled(props.loading);
  }, [props.loading]);
  useEffect(() => {
    if (props.size) setSize(props.size);
  }, [props.size]);
  useEffect(() => {
    if (typeof type != "undefined") setCurrentType(type);
  }, [type]);
  useEffect(() => {
    if (props.icon) {
      setIcon(props.icon);
    }
  }, [props.icon]);
  useEffect(() => {
    if (props.className) {
      setClassName(props.className);
    }
  }, [props.className]);
  if (!type) return null;
  return (
    <div>
      <button
        disabled={disabled}
        className={`${className || ""} hover:opacity-50 text-${size} ${
          ButtonStyle["button-" + type]
        } ${ButtonStyle["button-" + size]} p-[8px] rounded-[4px]`}
        /*  className={`btn bg-${type} text-black 
                    border-${current_type} border-[1px]
                    hover:opacity-50 rounded-[4px] px-2 py-[4px] 
                ${disabled == true ? "cursor-no-drop" : undefined}
                btn-${size}
                 `} */
        type={htmlType || "button"}
        onClick={onClick}
        style={style}
        {...props}
      >
        {icon && (
          <span className="icon-container">
            <FontAwesomeIcon
              style={{
                color: style && style.color,
                fontSize: style && style.fontSize,
              }}
              icon={["fas", `${icon}`]}
            />
          </span>
        )}
        {children}
      </button>
    </div>
  );
};
