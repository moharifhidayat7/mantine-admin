import { useContext } from "react";
import { useGlobalContext } from "@components/contexts/GlobalContext";

import {
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
} from "@mantine/core";

import ThemeToggle from "@components/ThemeToggle";

const CustomHeader = (props) => {
  const [state, dispatch] = useGlobalContext();
  const theme = useMantineTheme();

  return (
    <Header {...props}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={state.showSidebar}
            onClick={() => dispatch({ type: "toggle_sidebar" })}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <div className="flex justify-between w-full">
          <Text>Application header</Text>
          <ThemeToggle />
        </div>
      </div>
    </Header>
  );
};

export default CustomHeader;
