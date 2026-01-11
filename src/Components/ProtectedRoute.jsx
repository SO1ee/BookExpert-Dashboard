import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";


export default function ProtectedRouter({children}) { 
    return isAuthenticated() ? children : <Navigate to="/" />;
}