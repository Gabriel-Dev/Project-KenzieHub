import { useForm } from "react-hook-form";
import { ButtonComponent as Button } from "../../components/button";
import { HeaderComponent as Header } from "../../components/header";
import { Input } from "../../components/input";
import { Select } from "../../components/select";
import { Container } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { userContext } from "../../context/providers/userContext";
import { registerSchema } from "../../schema";

export function Register() {
  const { registerSubmit } = useContext(userContext);

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  return (
    <>
      <Header link="Voltar" />
      <Container>
        <form onSubmit={handleSubmit(registerSubmit)} noValidate>
          <h3>Crie sua conta</h3>
          <small>Rapido e grátis, vamos nessa</small>
          <Input label="Nome" name="name" type="text" placeholder="Digite seu nome" 
          register={register("name")} />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <Input label="Email" name="email" type="email" placeholder="Digite seu email" 
          register={register("email")} />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <Input label="Senha" name="password" type="password" placeholder="Digite sua senha" 
          register={register("password")} />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <Input label="Confirme sua senha" name="confirmPassword" type="password" placeholder="Digite sua senha" 
          register={register("confirmPassword")} />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

          <Input label="Bio" name="bio" type="text" placeholder="Digite sua biografia" 
          register={register("bio")} />
          {errors.bio && <p className="error">{errors.bio.message}</p>}

          <Input label="Contato" name="contact" type="text" placeholder="Digite seu contato" 
          register={register("contact")} />
          {errors.contact && <p className="error">{errors.contact.message}</p>}

          <Select register={register("course_module")} />
          {errors.course_module && <p className="error">{errors.course_module.message}</p>}

          <Button name="Cadastrar" type="submit" className="buttonPrimary-2" />
        </form>
        <ToastContainer position="top-right" autoClose={3000} limit={1} theme="dark" />
      </Container>
    </>
  );
}
