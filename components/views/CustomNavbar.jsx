import { useState } from "react";
import {
  Navbar,
  ScrollArea,
  Box,
  Group,
  Text,
  createStyles,
  Divider,
} from "@mantine/core";
import { IconHome, IconDatabase } from "@tabler/icons";
import Link from "next/link";
import Menu from "@components/Menu";
import User from "@components/User";

const CustomNavbar = (props) => {
  const menus = [
    { icon: <IconHome />, href: "/", text: "Dashboard" },
    {
      icon: <IconDatabase />,
      text: "Master Data",
      items: [
        { href: "/akun", text: "Akun" },
        { href: "/pegawai", text: "Pegawai" },
        { href: "/produk", text: "Unit Produk" },
        { href: "/pelanggan", text: "Pelanggan" },
        { href: "/payment-type", text: "Payment Type" },
        { href: "/inventaris", text: "Inventaris" },
      ],
    },
  ];

  return (
    <Navbar {...props}>
      <Navbar.Section grow component={ScrollArea}>
        <Menu>
          {menus.map((menu, index) =>
            menu.items ? (
              <Menu.Items
                icon={menu.icon}
                text={menu.text}
                key={`menu-${index}`}
              >
                {menu.items.map((item) => (
                  <Menu.Items.Item
                    href={item.href}
                    text={item.text}
                    key={item.href}
                  />
                ))}
              </Menu.Items>
            ) : (
              <Menu.Item
                icon={menu.icon}
                href={menu.href}
                text={menu.text}
                key={menu.href}
              />
            )
          )}
        </Menu>
      </Navbar.Section>
      <Divider my="xs" />
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
};

export default CustomNavbar;
