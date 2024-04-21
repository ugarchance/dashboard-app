import { Button, Card, Flex, Typography } from "antd";

function Banner() {
  return (
    <Card style={{ height: 260, padding: "20px" }}>
      <Flex gap="30px" vertical>
        <Flex vertical align="flex-start">
          <Typography.Title level={2} strong>
            Ürünlerinizi Oluşturun Ve Satın!
          </Typography.Title>
          <Typography.Text type="secondary" strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, provident.
          </Typography.Text>
        </Flex>
        <Flex gap="large">
          <Button type="primary" size="large">
            Daha Fazla Göster{" "}
          </Button>
          <Button size="large">En çok satanlar! </Button>
        </Flex>
      </Flex>
    </Card>
  );
}

export default Banner;
