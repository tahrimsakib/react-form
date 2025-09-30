import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductM = () => {
  const [product, setProduct] = useState([]);

  const handleProduct = (newProduct) => {
    const newProducts = [...product, newProduct];
    setProduct(newProducts);
  };

  return (
    <div>
      <ProductForm handleProduct={handleProduct}></ProductForm>
      <ProductTable product={product}></ProductTable>
    </div>
  );
};

export default ProductM;
