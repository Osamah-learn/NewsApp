import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Title,
  Right,
  DefaultTabBar,
} from "native-base";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";

/* Create an function to fix some bug in NativeBase version 2 library  */
const renderTabBar = (props) => {
  props.tabStyle = Object.create(props.tabStyle);
  return <DefaultTabBar {...props} />;
};
export default class TabScreen extends Component {
  render() {
    console.log("App Work");
    return (
      <Container>
        <Header hasTabs style={{ backgroundColor: "#33ACFF" }}>
          <Left />
          <Body>
            <Title style={{ color: "white" }}>اخبار News</Title>
          </Body>
          <Right />
        </Header>
        <Tabs renderTabBar={renderTabBar}>
          <Tab tabStyle={{ backgroundColor: "white" }} heading=" الرياضة">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{ backgroundColor: "white" }} heading=" العامة">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{ backgroundColor: "white" }} heading="الهجرة">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
