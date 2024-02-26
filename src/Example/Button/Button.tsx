import "./button.css";

interface ButtonProps {
  buttonValue: string;
  id: string;
  isDisabled?: boolean;
  onClick: () => void;
}

// what is in?
const Button = ({ buttonValue, id, isDisabled, onClick }: ButtonProps) => {
  const handleClick = (event: any) => {
    onClick();
  };

  // what is out?
  return (
    <>
      <input
        className={`customButton`}
        type="button"
        id={id}
        disabled={isDisabled}
        value={buttonValue}
        onClick={handleClick}
      />
    </>
  );
};

export default Button;
