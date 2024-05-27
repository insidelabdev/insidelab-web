"use client";
import React from "react";
import Field from "./Field";
const TextInput = ({ multiline = false, ...props }) => {
  return (
    <Field type="text" {...props}>
      {!multiline && <input type="text" />}
    </Field>
  );
};
export default TextInput;
