import "./button.css";

interface ButtonProps {
  value: string;
  type: string;
  id: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

// what is in?
const Button = ({ value, type, id, isDisabled, onClick }: ButtonProps) => {
  const handleClick = (event: any) => {
    onClick?.();
  };

  // what is out?
  return (
    <>
      <input
        className={`customButton`}
        type={type}
        id={id}
        disabled={isDisabled}
        value={value}
        onClick={handleClick}
      />
    </>
  );
};

export default Button;
