import { useState } from "react";
import { HeaderStyled, HomeStyled, MainStyled } from "./styled";
import { Modal } from "../../components/Modal";
import { List } from "../../components/List";
import { Total } from "../../components/Total";

export function Home(){
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    return(
        <HomeStyled>
            <HeaderStyled>
                <h1 className="title">Lista de compras</h1>
            </HeaderStyled>
            <MainStyled>
                <div className="openModalContainer">
                  <button onClick={() => setShowModal(true)} className="openModal">Adicionar Itens</button>
                </div>
            
                {showModal && (
                <Modal onClose={() => setShowModal(false)} setItems={setItems}/>
                )}
                <section className="cart">
                    <List items={items} setItems={setItems}/>
                    <Total items={items}/>
                </section>
            </MainStyled>
            
            <footer></footer>
        </HomeStyled>
    )
}