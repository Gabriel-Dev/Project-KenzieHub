import logo from "../../assets/img/logo.png"
import { Link } from "../../styles/link"

import { Header } from "./style"

export function HeaderComponent({link}){
    return(
        <Header>
            <div>
                <img src={logo} alt="Kenzie Hub" />
                <Link onClick={()=>window.localStorage.clear()} to={"/login"}>{link}</Link>
            </div>
        </Header>
    )
}