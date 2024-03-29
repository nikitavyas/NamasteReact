import React from "react";
import { Menu } from "antd";
import type { MenuProps } from 'antd';

const LeftMenu: React.FC<{ mode: MenuProps["mode"] }> = ({mode}) => {
    return (
    <Menu mode={mode}>
      <Menu.Item key="explore">Explore</Menu.Item>
      <Menu.Item key="features">Features</Menu.Item>
      <Menu.Item key="about">About Us</Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;