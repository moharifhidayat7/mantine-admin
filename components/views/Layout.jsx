import { useState } from "react";

import CustomHeader from "./CustomHeader";
import CustomNavbar from "./CustomNavbar";

import { AppShell, Container } from "@mantine/core";

import { useGlobalContext } from "@components/contexts/GlobalContext";

const Layout = ({ children }) => {
  const [state, dispatch] = useGlobalContext();

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <CustomNavbar
          padding="md"
          hiddenBreakpoint="sm"
          hidden={!state.showSidebar}
          width={{ sm: 200, lg: 250 }}
        />
      }
      header={<CustomHeader height={70} padding="md" />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container fluid>{children}</Container>
    </AppShell>
  );
};

export default Layout;
