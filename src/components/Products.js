import Card from "./Card";
import axios from "axios";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://fakestoreapi.com/products"
            );
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return products.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-2 py-[4%] px-[4%] xl:px-[8%]">
            {products.map((product) => (
                <Card
                    key={product.id}
                    data={product}
                    showRemoveButton={false}
                />
            ))}
        </div>
    );
};

export default Products;
