interface ButtonProps {
  buttonValue: string;
  onClick: () => void;
}

const Button = ({ buttonValue, onClick }: ButtonProps) => {
  const handleClick = (event: any) => {
    onClick();
  };

  return (
    <>
      <input type="button" value={buttonValue} onClick={handleClick} />
    </>
  );
};

export default Button;
