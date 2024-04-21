import { Flex, Menu } from "antd";
import { FaLeaf } from "react-icons/fa6";
import {
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
function Sidebar() {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <FaLeaf />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Gösterge Paneli",
          },
          {
            key: "2",
            icon: <CarryOutOutlined />,
            label: "Siparişlerim",
          },
          {
            key: "3",
            icon: <OrderedListOutlined />,
            label: "Yapılacaklar",
          },
          {
            key: "4",
            icon: <ProfileOutlined />,
            label: "Profil",
          },
          {
            key: "5",
            icon: <SettingOutlined />,
            label: "Ayarlar",
          },
          {
            key: "6",
            icon: <LogoutOutlined />,
            label: "Çıkış Yap",
          },
        ]}
      />
    </>
  );
}

export default Sidebar;
