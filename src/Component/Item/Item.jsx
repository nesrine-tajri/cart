import React from "react";
import "./Item.css";

function Item({ image, name, category, price, handleAddToCard, handleRemoveFromCard,order }) {
  const getImageType = () => {
    if (window.innerWidth < 768) {
      return "mobile";
    } else if (window.innerWidth < 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  };
  const imageType = getImageType();
  console.log(getImageType());

  const selectedItem = order?.find((item) => item.name === name);

  console.log(
    order?.find((item) => item.name === name),
    "find"
  );
  console.log(selectedItem?.quantity,'quantity')
    // console.log(order?.includes(name),"order include");
  // console.log(name,"name");

//   function handleAddToCard() {
//   if (selectedItem) {
//     selectedItem.quantity++
//     return selectedItem.quantity
//   }
// }
//   function handleRemoveFromCard() {
//   if (selectedItem && selectedItem.quantity > 0) {
//     selectedItem.quantity--
//     return selectedItem.quantity
//   }
// }
  // const itemInOrder = (order || []).find((x) => x.name === name);
  // const quantity = itemInOrder ? itemInOrder.quantity : 0;

  return (
    <div className="item">
      <div className="image">
        <img src={image[imageType]} alt={name} />

        

        {selectedItem && selectedItem.quantity > 0 ? (
          <div className="bg-orange-700 text-white rounded-3xl p-1  gap-3 flex justify-between items-center text-center">
       <div onClick={() => handleRemoveFromCard({ name, category, price, image })} className="rounded-3xl px-3 ml-1 border-white border-2 font-bold cursor-pointer text-lg text-center items-center border-solid">-</div>
        <h6   className="font-bold  border-none text-white text-center items-center px-5 bg-orange-700">{selectedItem?.quantity}</h6>
        <div  onClick={() => handleAddToCard({ name, category, price, image }) }  className="rounded-3xl px-2 mr-1 border-white cursor-pointer border-2 font-bold text-lg text-center items-center border-solid">+</div>
       </div>        ) : (
       
          <div className="cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bg-b"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
            >
              <g fill="#C73B0F" clip-path="url(#a)">
                <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.333 0h20v20h-20z" />
                </clipPath>
              </defs>
            </svg>
            <button
              onClick={() => handleAddToCard({ name, category, price, image })}
            >
              Add to Cart
            </button>
          </div>
         )} 
        {/* :
     <div className="bg-orange-700 text-white rounded-3xl p-2 flex justify-between items-center text-center">
       <div onClick={() => handleRemoveFromCard()} className="rounded-3xl border-white border-2 border-solid">-</div>
        <button type="button" onClick={() => handleAddToCard({ name, category, price, image })} className="font-bold border-none text-white bg-orange-700">{quantity}</button>
        <div  onClick={() => handleAddToCard() }  className="rounded-3xl border-white border-2 border-solid">+</div>
       </div>
       } */}
      </div>
      <p>{category}</p>

      <h3>{name}</h3>
      <h2>${price}</h2>
    </div>
  );
}

export default Item;
