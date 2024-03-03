import { SubmitHandler, useForm } from "react-hook-form";
import "./register.css";
import Button from "../Button/Button";

type FormFields = {
  username: string;
  password: string;
  email: string;
};

const Register = () => {
  const { register, handleSubmit, formState } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <form className="mainContainer" onSubmit={handleSubmit(onSubmit)}>
      <div className="titleContainer">
        <h2>Register to continue</h2>
      </div>

      <input
        className="input-field"
        {...register("username", {
          required: "Username is required",
        })}
        type="text"
        placeholder="username"
      />
      {formState.errors.username && (
        <div className="red-text">{formState.errors.username.message}</div>
      )}
      <input
        className="input-field"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must have 8 characters",
          },
        })}
        type="password"
        placeholder="password"
      />
      {formState.errors.password && (
        <div className="red-text">{formState.errors.password.message}</div>
      )}
      <input
        className="input-field"
        {...register("email", {
          required: "Email is required",
          validate: (value) => {
            if (!value.includes("@")) {
              return "Email must include @";
            }
            return true;
          },
        })}
        type="email"
        placeholder="email"
      />
      {formState.errors.email && (
        <div className="red-text">{formState.errors.email.message}</div>
      )}

      <button
        className="submit-button"
        disabled={formState.isSubmitting || !formState.isValid}
        type="submit"
      >
        {formState.isSubmitting ? "Loading..." : "Register"}
      </button>
    </form>
  );
};

export default Register;
