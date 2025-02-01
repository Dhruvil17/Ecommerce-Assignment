import Card from "./Card";
import { useContext } from "react";
import EmptyCart from "./EmptyCart";
import CartSummary from "./CartSummary";
import CartContext from "../utils/CartContext";

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    return cartItems.length === 0 ? (
        <EmptyCart />
    ) : (
        <div className="sm:flex py-[4%] items-start">
            <div className="sm:w-1/2 xl:w-3/5 grid grid-cols-1 xl:grid-cols-2 gap-4 px-[2%] xl:pl-[8%] xl:mr-[4%]">
                {cartItems.map((cartItem) => (
                    <Card
                        key={cartItem.id}
                        data={cartItem}
                        showRemoveButton={true}
                    />
                ))}
            </div>
            {cartItems.length !== 0 && <CartSummary />}
        </div>
    );
};

export default Cart;
