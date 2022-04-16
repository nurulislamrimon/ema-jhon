import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb"

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedItem = products.find(product => product.id === id);
            if (addedItem) {
                addedItem.quantity = storedCart[id];
                savedCart.push(addedItem);
            }
        }
        setCart(savedCart)
    }, [products])

    return [cart, setCart];
}
export default useCart;