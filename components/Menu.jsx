import { useState } from "react";
import Link from "next/link";
import { Group, Box, Text, createStyles } from "@mantine/core";
import {
  IconDashboard,
  IconSettings,
  IconChevronDown,
  IconChevronRight,
  IconPoint,
} from "@tabler/icons";

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    subMenuStyle: {
      display: "none",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
      borderRadius: theme.radius.sm,
    },
    show: {
      display: "block",
    },
  };
});

const subStyle = createStyles((theme, _params, getRef) => {
  return {
    subItemStyle: {
      padding: theme.spacing.xs,
      paddingLeft: 25,
      borderRadius: theme.radius.sm,
      cursor: "pointer",

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[1],
      },
    },
  };
});

const Menu = ({ children }) => {
  return <>{children}</>;
};

const Item = ({ icon, text, href }) => {
  return (
    <Link href={href} passHref>
      <Box
        component="a"
        sx={(theme) => ({
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          cursor: "pointer",
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[1],
          },
        })}
      >
        <Group>
          {icon}
          <div>
            <Text weight={500}>{text}</Text>
          </div>
        </Group>
      </Box>
    </Link>
  );
};

Menu.Item = Item;

const Items = ({ icon, children, text }) => {
  const [show, setShow] = useState(false);
  const { classes, cx } = useStyles();
  return (
    <div>
      <Box
        onClick={() => setShow(!show)}
        sx={(theme) => ({
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          cursor: "pointer",
          userSelect: "none",
          backgroundColor: show
            ? theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[1]
            : "unset",
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[1],
          },
        })}
      >
        <Group>
          {icon}
          <div
            style={{
              flexGrow: 1,
            }}
          >
            <Text weight={500}>{text}</Text>
          </div>
          {show ? (
            <IconChevronDown size={15} />
          ) : (
            <IconChevronRight size={15} />
          )}
        </Group>
      </Box>
      <div
        className={cx(classes.subMenuStyle, {
          [classes.show]: show,
        })}
      >
        {children}
      </div>
    </div>
  );
};

Menu.Items = Items;

const SubItem = ({ icon = <IconPoint />, href, text }) => {
  const { classes, cx } = subStyle();
  return (
    <div className={classes.subItemStyle}>
      <Link href={href} passHref>
        <Box component="a">
          <Group>
            {icon}
            <div>
              <Text weight={500}>{text}</Text>
            </div>
          </Group>
        </Box>
      </Link>
    </div>
  );
};

Menu.Items.Item = SubItem;

export default Menu;
