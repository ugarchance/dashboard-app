import { Card, Flex, Typography, Image } from "antd";
import React from "react";
import product1 from "./../assets/product1-removebg-preview.png";

function ContentSidebar() {
  return (
    <div>
      <Card className="card">
        <Flex vertical gap={"large"}>
          <Typography.Title level={4}>
            Bugün Sipariş Edilen
            <br /> 5 adet
          </Typography.Title>
          <Typography.Title level={4}>
            Bu Ay Sipariş Edilen <br /> 100 adet
          </Typography.Title>
        </Flex>
        <Image
          src={product1}
          alt="product"
          style={{
            position: "absolute",
            bottom: -35,
            left: 156,
            height: "130px",
            width: "auto",
          }}
        />
      </Card>
    </div>
  );
}

export default ContentSidebar;
