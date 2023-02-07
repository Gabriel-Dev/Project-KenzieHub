import { ButtonComponent as Button } from "../button";
import { Input } from "../../components/input"
import { Background } from "./style";
import { SelectStatus } from "../select";
import { useContext } from "react";
import { techContext } from "../../context/providers/techContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerTechSchema } from "../../schema";

export function ModalRegister() {
    const { setModal, registerTech } = useContext(techContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerTechSchema)
      });

    return (
        <Background>
            <div className="modal">
                <div>
                    <p> Cadastrar Tecnologia </p>
                    <Button onClick={() => { setModal(false) }} name="X" type="button" className="closeButton" />
                </div>
                <form onSubmit={handleSubmit(registerTech)}>
                    <Input label="Nome" name="title" type="text" placeholder="Tecnologia" 
                    register={register("title")} />
                    {errors.title && <p className="error">{errors.title.message}</p>}

                    <SelectStatus register={register("status")}/>
                    {errors.status && <p className="error">{errors.status.message}</p>}

                    <Button name="Cadastrar Tecnologia" type="submit" className="buttonPrimary" />
                </form>
            </div>
        </Background>
    )
}

export function ModalUpdate({id , title , status}) {
    const { setModal, updadteTech, deleteTech} = useContext(techContext);
    
    const { register, handleSubmit } = useForm({
        defaultValues:{
            title: title,
            status: status
        }
      });

    return (
        <Background>
            <div className="modal">
                <div>
                    <p>Tecnologia Detalhes </p>
                    <Button onClick={() => { setModal(false) }}name="X" type="button" className="closeButton" />
                </div>
                <form onSubmit={handleSubmit((data)=>{updadteTech(id,data)})}>
                    <Input label="Nome do projeto" name="tech" type="text" placeholder="Tecnologia" 
                    register={register("title")} disabled="disabled" />
                    <SelectStatus register={register("status")} />
                    <div>
                        <Button name="Salvar alterações" type="submit" className="buttonPrimary-2" />
                        <Button onClick={()=>{deleteTech(id)}} name="Excluir" type="button" />
                    </div>
                </form>
            </div>
        </Background>
    )
}