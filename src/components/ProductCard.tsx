import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import { ProductType } from "../services/products";
import SuccessToast from "./SuccessToast";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { id, name, imageUrl, price } = product;

  return (
    <>
      <Card className="mb-4 shadow-sm">
        <Link href={`/products/${id}`} passHref>
            <Image
              src={imageUrl}
              alt={name}
              className="card-img-top"
              layout="responsive"
              width={400}
              height={400}
              objectFit="cover"
            />
        </Link>

        <CardBody className="text-center">
          <Link href={`/products/${id}`} passHref>
            <h5 className="card-title text-primary mb-2" style={{ cursor: "pointer" }}>
              {name}
            </h5>
          </Link>

          <CardSubtitle className="mb-3 text-muted">
            R$ {price.toFixed(2)}
          </CardSubtitle>

          <Button
            color="dark"
            block
            onClick={() => {
              setToastIsOpen(true);
              setTimeout(() => setToastIsOpen(false), 3000);
            }}
          >
            Adicionar ao Carrinho
          </Button>
        </CardBody>
      </Card>

      <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
    </>
  );
};

export default ProductCard;
