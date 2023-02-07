import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const userContext = createContext({});

export function UserProvider({ children }) {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [tech , setTech]= useState([])
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getUser() {
			const authToken = window.localStorage.getItem("authToken");
			const userID = window.localStorage.getItem("userID");
			
			if (!authToken) {
				setLoading(false)
				return;
			}
			
			try {
				const response = await api.get(`/users/${userID}`);
				api.defaults.headers.common["Authorization"] = `Bearer ${authToken}`

				setUser(response.data);
				setTech(response.data.techs)

			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
		getUser();
	}, [navigate]);

	async function loginSubmit(data) {
		try {
			const response = await api.post("/sessions", data);

			window.localStorage.clear();
			window.localStorage.setItem("authToken", response.data.token);
			window.localStorage.setItem("userID", response.data.user.id);

			setLoading(true)
			navigate("/home");
			
		} catch (error) {
			toast.error("Email ou senha incorreto", {
				toastId: "yes",
			});
		}
	}

	async function registerSubmit(data) {
		try {
			await api.post("/users", data);
			toast.success("Usuario cadastrado. redirecionando para login...", {
				toastId: "yes",
			});
			setTimeout(() => {
				navigate("/login");
			}, 4000);
		} catch (error) {
			toast.error("Algo deu errado", {
				toastId: "yes",
			});
		}
	}

	return (
		<userContext.Provider value={{ loginSubmit, registerSubmit, navigate, user, loading, 
		setLoading, tech, setTech }}>
			{children}
		</userContext.Provider>
	)
}
