
import React from "react";
import { Link } from "react-router";
import styles from "./Product.module.css";

interface ProductProps {
  id: number;
  imagePath: string;
  name: string;
  price: number;
}

export default function Product({ id, imagePath, name, price }: ProductProps) {
  return (
    <div className={styles.product} data-testid={`product-${id}`}>
      <img src={imagePath} alt="Placeholder" />
      <div>{name}</div>
      <div>${price}</div>
      <div>
        <Link to={`/products/${id}`} role="link">View Details</Link>
      </div>
    </div>
  );
}