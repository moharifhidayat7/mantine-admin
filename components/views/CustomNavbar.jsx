import { useState } from "react";
import { Navbar, Box, Group, Text, createStyles } from "@mantine/core";
import { IconHome, IconDatabase } from "@tabler/icons";
import Link from "next/link";
import Menu from "@components/Menu";

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
      <Menu>
        {menus.map((menu) =>
          menu.items ? (
            <Menu.Items icon={menu.icon} href={menu.href} text={menu.text}>
              {menu.items.map((item) => (
                <>
                  <Menu.Items.Item href={item.href} text={item.text} />
                </>
              ))}
            </Menu.Items>
          ) : (
            <Menu.Item icon={menu.icon} href={menu.href} text={menu.text} />
          )
        )}
      </Menu>
    </Navbar>
  );
};

export default CustomNavbar;
