import { useSelector } from "react-redux";
import ItemsList from "./ItemList";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div>
            Cart Items
        </div>

    )
};

export default Cart;