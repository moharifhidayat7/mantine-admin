import { forwardRef } from "react";
import {
  IconChevronRight,
  IconGear,
  IconLogout,
  IconUser,
  IconLock,
} from "@tabler/icons";
import {
  Group,
  Avatar,
  Text,
  Menu,
  UnstyledButton,
  Divider,
  MediaQuery,
  useMantineTheme,
  createStyles,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  item: {
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },
  },
  itemLogout: {
    "&:hover": {
      backgroundColor: theme.colors.red,
      color: theme.white,
    },
  },
}));

const UserButton = forwardRef(
  ({ image, name, email, icon, ...others }, ref) => {
    return (
      <UnstyledButton
        ref={ref}
        sx={(theme) => ({
          width: "100%",
          borderRadius: theme.radius.sm,
          padding: theme.spacing.xs,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
        {...others}
      >
        <Group>
          <Avatar src={image} radius="xl" />

          <div
            style={{
              flex: "1 1 0%",
              overflow: "hidden",
            }}
          >
            <Text size="sm" weight={500}>
              {name}
            </Text>

            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>

          {icon || <IconChevronRight size={15} />}
        </Group>
      </UnstyledButton>
    );
  }
);

UserButton.displayName = "UserButton";

const UserMenu = () => {
  const theme = useMantineTheme();
  return (
    <div style={{ padding: theme.spacing.xs }}>
      <Text size="sm" weight={500}>
        tes asd adas asd ad adasd asds
      </Text>
      <Text color="dimmed" size="xs">
        tes
      </Text>
    </div>
  );
};

const User = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const largeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);
  return (
    <Menu
      withArrow
      placement={largeScreen ? "end" : "center"}
      position={largeScreen ? "right" : "top"}
      trigger="hover"
      style={{ minWidth: "100%" }}
      delay={500}
      control={
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Harriette asdas dasd asd"
          email="hspoonlickeasdasd@gmail.com"
        />
      }
    >
      <Menu.Item
        onClick={() => console.log("Hello")}
        component={UserMenu}
      ></Menu.Item>
      <Divider />
      <Menu.Item icon={<IconUser size={18} />} className={classes.item}>
        My Profile
      </Menu.Item>
      <Menu.Item icon={<IconLock size={18} />} className={classes.item}>
        Change Password
      </Menu.Item>

      <Divider />
      <Menu.Item
        icon={<IconLogout size={18} />}
        color="red"
        className={classes.itemLogout}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default User;
