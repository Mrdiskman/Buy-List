import { TotalStyled } from "./styled";

export function Total({ items }){
    const totalPrice = items.reduce((total, item) => total + Number(item.price), 0);
    const itemCount = items.length;

    return (
        <TotalStyled>
            <p>Preço total: {Number(totalPrice).toFixed(2)}</p>
            <p>Quantidade de itens: {itemCount}</p>
        </TotalStyled>
    );
}
