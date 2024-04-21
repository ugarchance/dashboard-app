import { Flex, Typography, Button, Card, Avatar, Tooltip, Divider } from "antd";
import React from "react";
import AvatarImage from "./../assets/avatar1.png";

function SellerList() {
  return (
    <Flex align="center" justify="space-between" gap={"small"}>
      <Flex gap="small" vertical={"row"} className="top-seller">
        <Flex align="center " justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            En Çok Satanlar
          </Typography.Title>
          <Button type="link" className="gray--color">
            Tümünü Gör
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              maxCount={7}
              maxPopoverTrigger="click"
              size={"large"}
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "pointer",
              }}
            >
              <Tooltip title="User 1 " placement="top">
                <Avatar src={AvatarImage} />
              </Tooltip>
              <Tooltip title="User 2 " placement="top">
                <Avatar src={AvatarImage} />
              </Tooltip>{" "}
              <Tooltip title="User 3 " placement="top">
                <Avatar src={AvatarImage} />
              </Tooltip>{" "}
              <Tooltip title="User 4 " placement="top">
                <Avatar src={AvatarImage} />
              </Tooltip>{" "}
              <Tooltip title="User 5 " placement="top">
                <Avatar src={AvatarImage} />
              </Tooltip>{" "}
              <Tooltip title="User 6 " placement="top">
                <Avatar src={AvatarImage} />
              </Tooltip>
            </Avatar.Group>
            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              <Typography.Text type="secondary" strong>
                1200 Adet Logo Satıldı
              </Typography.Text>
              <Typography.Text type="secondary" strong>
                6 Adet Satıcı
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
      <Flex gap="small" vertical={"row"} className="featured-seller">
        <Flex align="center " justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Öne Çıkanlar
          </Typography.Title>
          <Button type="link" className="gray--color">
            Tümünü Gör
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              maxCount={7}
              maxPopoverTrigger="click"
              size={"large"}
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "pointer",
              }}
            >
              <Tooltip title="User 1 " placement="top">
                <Avatar src={AvatarImage} />
              </Tooltip>
              <Tooltip title="User 2 " placement="top">
                <Avatar src={AvatarImage} />
              </Tooltip>{" "}
              <Tooltip title="User 3 " placement="top">
                <Avatar src={AvatarImage} />
              </Tooltip>{" "}
              <Tooltip title="User 4 " placement="top">
                <Avatar src={AvatarImage} />
              </Tooltip>{" "}
              <Tooltip title="User 5 " placement="top">
                <Avatar src={AvatarImage} />
              </Tooltip>{" "}
              <Tooltip title="User 6 " placement="top">
                <Avatar src={AvatarImage} />
              </Tooltip>
            </Avatar.Group>
            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              <Typography.Text type="secondary" strong>
                1330 Adet Logo Satıldı
              </Typography.Text>
              <Typography.Text type="secondary" strong>
                8 Adet Satıcı
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}

export default SellerList;
