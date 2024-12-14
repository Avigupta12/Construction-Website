
import React,{useContext, createContext,useReducer} from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            qty: action.qty,
           
            img: action.img, // Include img field when adding
          },
        ];
  
      case "REMOVE":
        let newArr = [...state];
        newArr.splice(action.index, 1);
        return newArr;
  
      case "UPDATE":
        let arr = [...state];
        arr = arr.map((food) =>
          food.id === action.id
            ? {
                ...food,
                qty: parseInt(action.qty) + food.qty, // Update quantity
               
                img: food.img, // Retain existing img field
              }
            : food
        );
        return arr;
  
      case "DROP":
        return []; // Clear the state
  
      default:
        console.log("Error in Reducer");
        return state;
    }
  };
  

export const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,[]);
    return(
    <CartDispatchContext.Provider value={dispatch}>

        <CartStateContext.Provider value={state}>
            {children}
        </CartStateContext.Provider> 
 
    </CartDispatchContext.Provider>

   

    )
}

export const useCart= ()=> useContext(CartStateContext);

export const useDispatchCart = ()=>useContext(CartDispatchContext);