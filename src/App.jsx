import "./App.css";

import Item from "./Component/Item/Item";
import Product from "./Pages/Product";

import React from "react";
 
function App() {
  const [order, setOrder] = React.useState([]);
  const handleAddToCard = (item) => {
    const exist = order.find((x) => x.name === item.name);
   
    if (exist) {
      setOrder(order.map((x) =>
       x.name === item.name ? { ...x, quantity: x.quantity + 1 ,total:x.price*(x.quantity+1)} : x
      ));
} else {
  const cardItem = {
    
    ...item,
   total:item.price, 
  quantity: 1,
   
  };
  setOrder([...order, cardItem]);
}
    console.log({order})
  };
  const handleRemoveFromCard = (item) => {
    const exist = order.find((x) => x.name === item.name);
   
    if (exist && exist.quantity > 0) {
      setOrder(order.map((x) =>
       x.name === item.name ? { ...x, quantity: x.quantity - 1 ,total:x.price*(x.quantity-1)} : x
      ));
} else {
  setOrder(order.filter((x) => x.name !== item.name));
}
    console.log({order})
  };
function def(item){
  setOrder(order.filter(x=>x.name!==item))
}

  return (
    <div className="App">
      <Product order={order} handleAddToCard={handleAddToCard} handleRemoveFromCard={handleRemoveFromCard} def={def}/>
    </div>
  );
}

export default App;
