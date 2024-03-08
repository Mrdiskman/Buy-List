import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { ContainerFormLogin } from "./styled";

export function Login(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
      
    const onSubmit = (data) => {
        console.log(data)
        navigate("/home")
    }

    const navigate = useNavigate()
    return(
        <ContainerFormLogin>
            <form onSubmit={handleSubmit(onSubmit)} className="formLogin">
                <h1 className="loginTitle">Login</h1>
                <input type="email"{...register("email")} placeholder="Email"/>
                <input type="password" {...register("password")} placeholder="Senha"/>
                <button type="submit" className="submitLogin">Enviar</button>
            </form>
        </ContainerFormLogin>
    )
}