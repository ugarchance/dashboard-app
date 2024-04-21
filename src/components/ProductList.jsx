import React from "react";
import { Flex, Typography, Button, Card, Image } from "antd";
import productData from "./../data/productData";

const { Meta } = Card;
function ProductList() {
  return (
    <div>
      <Flex align="center" justify="space-between">
        <Typography.Title level={3} strong className="primary--color">
          Ürünlerim
        </Typography.Title>
        <Button type="link" className="gray--color">
          Tümünü Gör
        </Button>
      </Flex>

      <Flex align="center" gap={"large"} className="product-card">
        {productData.map((product) => (
          <Card key={product.id} hoverable>
            <Image
              src={product.picture}
              preview={{
                mask: <div>Detaylı İncele</div>,
              }}
              style={{ width: "130px" }}
            />
            <Meta title={product.name} style={{ marginTop: "1rem" }} />
          </Card>
        ))}
      </Flex>
    </div>
  );
}

export default ProductList;
