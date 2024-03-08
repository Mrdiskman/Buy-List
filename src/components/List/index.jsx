import {ListStyled} from "./styled"

export function List({ items, setItems }) {
  const handleDelete = (indexToDelete) => {
      setItems(items.filter((item, index) => index !== indexToDelete));
  };

  return(
    <ListStyled>
      <ul className="boxList">
      {items && items.map((item, index) => (
        <li key={index} className="items">
          <div className="info">
            <p>Marca: {item.brand}</p> 
            <p>/ Nome: {item.name}</p>
            <p>/ Preço: {Number(item.price).toFixed(2)}</p> 
            <div className="excludeContainer">
              <button onClick={() => handleDelete(index)} className="excludeBtn">X</button>
            </div>
          </div>
        </li>        
        ))}
      </ul>
    </ListStyled>
  )
}