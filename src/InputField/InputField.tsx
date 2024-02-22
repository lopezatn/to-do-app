const DEFAULT_TYPE = "text";

export interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  onChange?: (value: string) => void;
}

const InputField = ({
  label,
  id,
  type = DEFAULT_TYPE,
  onChange,
}: InputFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange && onChange(inputValue);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} onChange={handleChange} />
    </>
  );
};

export default InputField;
