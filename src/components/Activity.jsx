import React from "react";
import { Avatar, Button, Flex, List, Typography } from "antd";
const data = [
  {
    name: "Ahmet Selami",
    orderTime: 1,
  },
  {
    name: "Gözde Yener",
    orderTime: 3,
  },
  {
    name: "Mustafa Göksoy",
    orderTime: 4,
  },
  {
    name: "Selin Akkaya",
    orderTime: 1,
  },
  {
    name: "Melis Gür",
    orderTime: 8,
  },
];
function Activity() {
  return (
    <Flex vertical gap="small">
      <Flex align="center" justify="space-between" gap="large">
        <Typography.Title level={3} strong className="primary--color">
          Son Hareketler
        </Typography.Title>
        <Button type="link" className="gray--color">
          Tümünü Gör
        </Button>
      </Flex>
      <List
        pagination
        dataSource={data}
        renderItem={(user, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={``} />}
              title={<a href="#">{user.name}</a>}
              description="Yeni bir logo sipariş edildi"
            ></List.Item.Meta>
            <span className="gray--color">
              {user.orderTime} {user.orderTime == 1 ? "gün önce" : "gün önce"}
            </span>
          </List.Item>
        )}
      />
    </Flex>
  );
}

export default Activity;
