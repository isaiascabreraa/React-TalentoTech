import { useAuthContext } from "../../context/AuthContext/useCartContext"


export const RutaProtegida = ({children}) => {
    
    const { user } = useAuthContext();

    if(!user) {
        return <Navigate to="/" replace />
    }

    return (children);
}