import { HeaderComponent as Header } from "../../components/header";
import { ButtonComponent as Button } from "../../components/button";
import { CardComponent as Card } from "../../components/card";
import { Container } from "./style";
import { ModalRegister, ModalUpdate } from "../../components/modal";
import { useContext, useState } from "react";
import { userContext } from "../../context/providers/userContext";
import { techContext } from "../../context/providers/techContext";
import { ToastContainer } from "react-toastify";

export function Home() {
  const { user , tech} = useContext(userContext);
  const { modal , setModal } = useContext(techContext);
  const [ modalUpdate , setModalUpdate] = useState(<ModalUpdate/>)

  const Component = ({children}) =>{
    <div>{children.length}</div>
  }

  return (
    <>
      <Header link="Sair" />
      <Container>
        <div className="nameAndModule">
          <div>
            <h1>Olá, {user.name}</h1>
            <p>{user.course_module}</p>
          </div>
        </div>
        <section>
          <div className="titleAndButton">
            <h2>Tecnologias</h2>
            <Button onClick={()=>{setModal("register")}} name="+" type="button" />
          </div>

          <ul className="techList">
            {tech.length !== 0 ? tech.map(({id , title , status})=>
              <Card key={id} onClick={()=>{setModalUpdate(<ModalUpdate id={id} title={title} status={status}/>) 
              setModal("update")}} title={title} status={status} />
            ) : 
            <p>Nenhuma tecnologia adicionada</p>}
          </ul>
        </section>
        {modal === "register" && <ModalRegister/>}
        {modal === "update" && modalUpdate }
        <ToastContainer autoClose={1000} limit={1} theme="dark"/>
        <Component>
          <p style>teste</p>
          <p>teste</p>
        </Component>
      </Container>
    </>
  );
}
