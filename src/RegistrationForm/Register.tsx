import { SubmitHandler, useForm } from "react-hook-form";
import "./register.css";

type FormFields = {
  username: string;
  password: string;
  email: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <form className="mainContainer" onSubmit={handleSubmit(onSubmit)}>
      <div className="titleContainer">
        <h2>Register to continue</h2>
      </div>

      <input
        {...register("username", { required: true })}
        type="text"
        placeholder="username"
      />

      <input
        {...register("password", { required: true, minLength: 8 })}
        type="password"
        placeholder="password"
      />

      <input
        {...register("email", {
          required: true,
          validate: (value: string) => value.includes("@"),
        })}
        type="email"
        placeholder="email"
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
