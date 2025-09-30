import React from "react";

const ProductForm = ({ handleProduct }) => {
  const handleProductsubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(name ,price,quantity)

    const newProduct = {
      name,
      price,
      quantity,
    };
    // console.log(newProduct);
    handleProduct(newProduct);
  };
  return (
    <div>
      <form onSubmit={handleProductsubmit}>
        <input type="text" name="name" placeholder="Product Name" /> <br />
        <input type="text" name="price" placeholder="Product Price" /> <br />
        <input
          type="text"
          name="quantity"
          placeholder="Product Quantity"
        />{" "}
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ProductForm;
