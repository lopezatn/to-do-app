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

      <input {...register("username")} type="text" placeholder="username" />
      <input {...register("password")} type="password" placeholder="password" />
      <input {...register("email")} type="email" placeholder="email" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
