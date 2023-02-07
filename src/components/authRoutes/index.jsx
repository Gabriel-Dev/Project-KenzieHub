import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { userContext } from "../../context/providers/userContext"

export function AuthRoutes(){
const { user , loading } = useContext(userContext)

  if(loading){
    return null
  }
 
  return user ? <Outlet/> : <Navigate to="/login"/>
}