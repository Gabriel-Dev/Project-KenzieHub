import logo from "../../assets/img/logo.png";
import { Container } from "./style";
import { Input } from "../../components/input";
import { ButtonComponent as Button } from "../../components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../../context/providers/userContext";
import { loginSchema } from "../../schema";

export function Login() {
  const { loginSubmit, navigate } = useContext(userContext);

  const [eye, setEye] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  });


  return (
    <Container>
      <img src={logo} alt="Kenzie Hub" />
      <form onSubmit={handleSubmit(loginSubmit)} noValidate>
        <h3>Login</h3>
        <Input label="Email" name="email" type="email" placeholder="Digite seu email" register={register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <Input label="Senha" name="password" type={eye ? "text" : "password"} placeholder="Digite sua senha" register={register("password")}
          eye={eye ? <BsEye onClick={() => setEye(!eye)} /> : <BsEyeSlash onClick={() => setEye(!eye)} />} />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <Button name="Entrar" type="submit" className="buttonPrimary" />
        <small>Ainda não possui uma conta?</small>
        <Button onClick={() => navigate("/register")} name="Cadastre-se" type="button" />
      </form>
      <ToastContainer position="top-right" autoClose={3000} limit={1} theme="dark" />
    </Container>
  );
}
