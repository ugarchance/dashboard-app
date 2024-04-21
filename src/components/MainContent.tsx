import { Flex } from "antd";
import React from "react";
import Banner from "./Banner";
import ProductList from "./ProductList";
import SellerList from "./SellerList";

function MainContent() {
  // flex : 1 değeri diğer öğelerle esnek bi şekilde çalışmak için kullanılır.  Bir konteyner içinde öğerler arasubdaki alanı eşit olarak dağıtır.
  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap="5rem">
        <Banner />
        <ProductList />
        <SellerList />
      </Flex>
    </div>
  );
}

export default MainContent;
