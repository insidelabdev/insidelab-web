import Field from "./Field";
const Checkbox = (props) => {
  return (
    <Field {...props}>
      <input type="checkbox" />
    </Field>
  );
};

export default Checkbox;
