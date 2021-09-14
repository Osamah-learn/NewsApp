import React, { Component } from "react";
import {
  Container,
  Header,
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
    return (
      <Container>
        <Header  hasTabs style={{ backgroundColor: "#344955" ,height:80,}}>
          <Left style={{flex:1.3}} />
          <Body>
            <Title style={{ color: "white",fontStyle:'normal',fontWeight:'bold' }}>Osku News</Title>
          </Body>
          <Right />
        </Header >
        <Tabs renderTabBar={renderTabBar}>
          <Tab tabStyle={{ backgroundColor: '#232F34' }} activeTabStyle={{ backgroundColor: "#F9AA33" }} heading=" العامة">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{ backgroundColor: '#232F34' }} activeTabStyle={{ backgroundColor: "#F9AA33" }} heading=" الرياضة">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{ backgroundColor: '#232F34' }} activeTabStyle={{ backgroundColor: "#F9AA33" }} heading="تقنية">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
