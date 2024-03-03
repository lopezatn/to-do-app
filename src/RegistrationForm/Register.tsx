import { SubmitHandler, useForm } from "react-hook-form";
import "./register.css";

type FormFields = {
  username: string;
  password: string;
  email: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

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
        {...register("username", {
          required: "Username is required",
        })}
        type="text"
        placeholder="username"
      />
      {errors.username && (
        <div className="red-text">{errors.username.message}</div>
      )}
      <input
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
      {errors.password && (
        <div className="red-text">{errors.password.message}</div>
      )}
      <input
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
      {errors.email && <div className="red-text">{errors.email.message}</div>}

      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Register"}
      </button>
    </form>
  );
};

export default Register;
