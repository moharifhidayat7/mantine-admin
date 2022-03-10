import { useContext } from "react";
import { useGlobalContext } from "@components/contexts/GlobalContext";

import {
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
  TextInput,
  Loader,
  Group,
  Autocomplete,
} from "@mantine/core";

import { IconSearch } from "@tabler/icons";

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
        <div className="flex items-center justify-between w-full">
          <div>
            <Text>Application header</Text>
          </div>
          <Group spacing="md">
            <Autocomplete
              rightSection={<Loader size="xs" style={{ display: "none" }} />}
              icon={<IconSearch size={20} />}
              placeholder="Search"
              data={["React", "Angular", "Svelte", "Vue"]}
            />
            <ThemeToggle />
          </Group>
        </div>
      </div>
    </Header>
  );
};

export default CustomHeader;
