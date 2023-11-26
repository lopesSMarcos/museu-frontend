import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";





export default function ProtectedLayout() {

    const auth = useAuth();
    
    
    return (
        auth?.login
        ? <Outlet
            />
        : <Navigate to={'/login'} state={{from: location}} replace/>

    )   
}