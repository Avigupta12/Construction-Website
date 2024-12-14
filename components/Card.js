import React, {useState} from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

export default function Card(props) {
 
  let dispatch = useDispatchCart();
  let data = useCart();
 
  
 
  // let priceOptions = options ? Object.keys(options) : [];
 
  const [qty,setQty] = useState(1);
  const [size,setSize] = useState("");
  
  const handleAddToCart = async () => {
   
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
  
    console.log(food);
    console.log(new Date());
  
    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          qty: qty,
          img: props.foodItem.img, // Pass imgSrc
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          qty: qty,
          size: size,
          img: props.foodItem.img, // Pass imgSrc
        });
        console.log("Size different so simply ADD one more to the list");
        return;
      }
  
      return;
    }
  
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      qty: qty,
      size: size,
      img: props.foodItem.img, // Pass imgSrc
    });
  };
  
  // console.log(props.foodItem?.img);
  
  // let finalPrice = qty * (options?.[size] ? parseInt(options[size]) : 0);
  // useEffect(()=>{
  //   setSize(priceRef.current.value)
  // },[])
  return ( 
    <div>
        
       <div>
        <div
          className="card mt-3  "
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src={props.foodItem?.img} className="card-img-top" alt='...' style={{height:"230px", objectFit:"fill"}}/>
          <div className="card-body">
            <h5 className="card-title">{props.foodItem?.name}</h5>
            {/* <p className="card-text">This is some important text</p> */}
            <div className="container w-100"> 
              
              {/* <select className="m-2 h-100  bg-success rounded" ref={priceRef}  onChange={(e)=>setSize(e.target.value)}  >
                {priceOptions.map((data)=>{
                  return  <option key={data} value={data}>{data}</option>
                  
                })}
              </select> */}
              {/* <div className="d-inline h-100 fs-5">₹ {finalPrice}/- </div> */}
                
            </div>
            <hr>
            </hr> 
            <button className={`btn btn-success justify-center ms-2` } onClick={handleAddToCart}>Wishlist</button>
          </div>
        </div>
      </div>
        
    </div>
  )
}
