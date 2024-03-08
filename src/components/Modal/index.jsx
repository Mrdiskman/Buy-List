import { ModalStyled } from "./styled";
import { useForm } from "react-hook-form"

export function Modal({ onClose, setItems }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
      
    const onSubmit = (data) => {
        setItems(oldItems => [...oldItems, data]);
        onClose();
    }
    
    return(
    <ModalStyled>
            <form onSubmit={handleSubmit(onSubmit)} className="formModal">
                <button onClick={onClose} className="closeModal">Fechar</button>

                <p>Marca:</p>
                <input  {...register("brand")} />
                <p>Nome do Item:</p>
                <input type="text" {...register("name")}/>
                <p>Preço:</p>
                <input type="number" {...register("price")}/>

                <button type="submit" className="submitBtn">Add Item</button>
            </form>
    </ModalStyled>
    )
}