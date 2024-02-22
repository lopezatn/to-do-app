import { addNumbers } from "./exampleUtil";

const DEFAULT_MESSAGE = "Default message";
const NO_MESSAGE = "No message";

export interface ExampleProps {
  message: string;
  optionalMessage?: string;
  optionalMessage2: string | undefined;
  optionalMessageWithDefaultValue?: string;
  numbersToSum: number[];
}

const Example = ({
  message,
  optionalMessage,
  optionalMessage2,
  optionalMessageWithDefaultValue = DEFAULT_MESSAGE,
  numbersToSum,
}: ExampleProps): React.ReactElement => {
  console.log("Example props");
  console.log("Message: ", message, ". Type: ", typeof message);
  console.log(
    "optionalMessage: ",
    optionalMessage,
    ". Type: ",
    typeof optionalMessage
  );
  console.log(
    "optionalMessage2: ",
    optionalMessage2,
    ". Type: ",
    typeof optionalMessage2
  );
  console.log(
    "optionalMessageWithDefaultValue: ",
    optionalMessageWithDefaultValue,
    ". Type: ",
    typeof optionalMessageWithDefaultValue
  );

  return (
    <div>
      <h1>{message}</h1>
      <h3>{optionalMessage ?? NO_MESSAGE}</h3>
      <h3>{optionalMessage2 ?? NO_MESSAGE}</h3>
      <h3>{optionalMessageWithDefaultValue ?? NO_MESSAGE}</h3>
      <h4>Sum is: {addNumbers(numbersToSum[0], numbersToSum[1])}</h4>
    </div>
  );
};

export default Example;
