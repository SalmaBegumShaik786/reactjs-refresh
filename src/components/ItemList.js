import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";

const ItemsList = ({ items }) => {

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        console.log('add item clicked');
        //Dispatch an action
        dispatch(addItem(item));
    }

    const handleRemoveItem = () => {
        dispatch(removeItem());
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    console.log('items', items);
    return (
        <div>
            <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleRemoveItem()}
            >
                Remove -
            </button>
            <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleClearCart()}
            >
                Clear Cart
            </button>
            {items.map((item) => (
                <div
                    data-testid="foodItems"
                    key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>
                                - ₹
                                {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button
                                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                                onClick={() => handleAddItem(item)}
                            >
                                Add +
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemsList;