import React from "react";
import { Tab } from "semantic-ui-react";

const Tabs = (props) => {
  const buildPanes = () => {
    return props.panes.map((pane) => {
      return { menuItem: pane.name, render: () => pane.content };
    });
  };
  return <Tab panes={buildPanes()} />;
};

export default Tabs;
