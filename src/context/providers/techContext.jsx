import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { userContext } from "./userContext";


export const techContext = createContext({});

export function TechProvider({ children }) {
    const [modal, setModal] = useState(false)
    const { setTech } = useContext(userContext);

    async function registerTech(data) {
        const userID = window.localStorage.getItem("userID");

        try {
            await api.post("/users/techs", data);
            toast.success("Tecnologia adicionada.", {
                toastId: "yes",
            });

            const response = await api.get(`/users/${userID}`);

            setTech(response.data.techs);

            setModal(false)
        } catch (error) {
            toast.error("Algo deu errado", {
                toastId: "yes",
            });
        }
    }

    async function updadteTech(id, data) {
        const userID = window.localStorage.getItem("userID");

        try {
            await api.put(`/users/techs/${id}`, data);
            toast.success("Tecnologia Alterada.", {
                toastId: "yes",
            });

            const response = await api.get(`/users/${userID}`);

            setTech(response.data.techs);

            setModal(false)
           
        } catch (error) {
            toast.error("Algo deu errado", {
                toastId: "yes",
            });
        }  
    }

    async function deleteTech(id) {
        const userID = window.localStorage.getItem("userID");

        try {
            await api.delete(`/users/techs/${id}`);
            toast.success("Tecnologia Deletada.", {
                toastId: "yes",
            });

            const response = await api.get(`/users/${userID}`);

            setTech(response.data.techs);

            setModal(false)
        } catch (error) {
            toast.error("Algo deu errado", {
                toastId: "yes",
            });
        }
    }

    return (
        <techContext.Provider value={{ modal, setModal, registerTech, updadteTech, deleteTech }}>
            {children}
        </techContext.Provider>
    )
}