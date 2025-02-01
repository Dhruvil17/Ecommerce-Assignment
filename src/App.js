import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import CartContext from "./utils/CartContext";

const App = () => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = sessionStorage.getItem("cartItems");
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });
    const [discount, setDiscount] = useState(() => {
        const savedDiscount = sessionStorage.getItem("discount");
        return savedDiscount ? Number(JSON.parse(savedDiscount)) : 0;
    });
    const [discountedPrice, setDiscountedPrice] = useState(() => {
        const savedDiscountedPrice = sessionStorage.getItem("discountedPrice");
        return savedDiscountedPrice
            ? Number(JSON.parse(savedDiscountedPrice))
            : 0;
    });

    useEffect(() => {
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
        sessionStorage.setItem("discount", JSON.stringify(discount.toFixed(2)));
        sessionStorage.setItem(
            "discountedPrice",
            JSON.stringify(discountedPrice.toFixed(2))
        );
    }, [cartItems, discount, discountedPrice]);

    const incrementItem = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (cartItem) => cartItem.id === item.id
            );

            if (existingItem) {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const decrementItem = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (cartItem) => cartItem.id === item.id
            );

            if (existingItem && existingItem.quantity > 1) {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                );
            }
            return prevItems.filter((cartItem) => cartItem.id !== item.id);
        });
    };

    const removeItem = (item) => {
        setCartItems((prevItems) =>
            prevItems.filter((cartItem) => cartItem.id !== item.id)
        );
    };

    const emptyCartItems = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                incrementItem,
                decrementItem,
                removeItem,
                emptyCartItems,
                discount,
                setDiscount,
                discountedPrice,
                setDiscountedPrice,
            }}>
            <Header />
            <Outlet />
        </CartContext.Provider>
    );
};

export default App;
