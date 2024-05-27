import Field from "./Field";
const TextArea = (props) => {
  return (
    <Field multiline={true} {...props}>
      {<textarea type="text" />}
    </Field>
  );
};

export default TextArea;
