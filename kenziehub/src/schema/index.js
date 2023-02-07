import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup.string().required("Esse campo é obrigatório!"),

    email: yup.string().required("Esse campo é obrigatório!").email("Informe um email válido"),

    password: yup.string().required("Esse campo é obrigatório!")
      .matches(/(?=.*[a-z])/, "A senha deve conter 1 letra minúscula")
      .matches(/(?=.*[A-Z])/, "A senha deve conter 1 letra maiúscula")
      .matches(/(?=.*?[0-9])/, "A senha deve conter 1 dígito")
      .matches(/(?=.*?[#?!@$%^&*-])/, "A senha deve conter 1 caractere especial")
      .matches(/.{8,}/, "A senha deve conter pelo menos 8 caracteres"),

    confirmPassword: yup.string().required("Esse campo é obrigatório!")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
    bio: yup.string().required("Esse campo é obrigatório!"),

    contact: yup.string().required("Esse campo é obrigatório!")
      .matches(/^[0-9]\d{8}$/, "Informe um contato com 9 dígitos"),

    course_module: yup.string().required("Esse campo é obrigatório!"),
  });

  export const loginSchema = yup.object().shape({
    email: yup.string().required("Esse campo é obrigatório!"),
    
    password: yup.string().required("Esse campo é obrigatório!"),
  });

  export const registerTechSchema = yup.object().shape({
    title: yup.string().required("Digite uma tecnologia"),
    
    status: yup.string().required("Seleciona um status"),
  });

 