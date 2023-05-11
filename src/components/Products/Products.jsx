import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Products.scss";
const Products = () => {
  const { products, getProducts,addCart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  const productsDiv = products.map((product) => {
    return (
      <div key={product._id}>
        <p>{product.name}</p>
        <p>{product.price} €</p>
        <img
          className="img-product"
          src="https://www.estrellamilitar.es/3554-large_default/botella-cristal-ejecito-aire.jpg"
          alt=""
        />
        <button onClick={()=>addCart(product)}>Add Cart</button>
      </div>
    );
  });

  return <div>{productsDiv}</div>;
};

export default Products;
