import React from "react";
import {
  ProductContainer,
  ProductCard,
  ProductCards,
  ProductInfo,
  ProductButton,
} from "./ProductStyles";

const Products = ({ heading, data }) => {
  return (
    <ProductContainer>
      <h1>{heading}</h1>
      <ProductCards>
        {data.map((item, index) => {
          return (
            <ProductCard key={index}>
              <img src={item.img} alt="pizza" />
              <ProductInfo>
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
                <h1>{item.price}</h1>
              </ProductInfo>
              <ProductButton>{item.button}</ProductButton>
            </ProductCard>
          );
        })}
      </ProductCards>
    </ProductContainer>
  );
};

export default Products;
