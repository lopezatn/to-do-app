import { useState } from "react";
import "./inputfield.css";

const DEFAULT_TYPE = "text";

export interface InputFieldProps {
  id: string;
  type?: string;
  placeholder: string;
  onChange?: (value: string) => void;
}

const InputField = ({
  type = DEFAULT_TYPE,
  placeholder,
  id,
  onChange,
}: InputFieldProps) => {
  const [empty, setEmpty] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange && onChange(inputValue);
    setEmpty(inputValue === "");
  };

  return (
    <>
      <label className={empty ? "custom-field" : "custom-field-not-empty"}>
        <input type={type} id={id} onChange={handleChange} />
        <span className="placeholder">{placeholder}</span>
      </label>
    </>
  );
};

export default InputField;
