import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs ,Left,Body,Title,Right} from 'native-base';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';
export default class TabScreen extends Component {
  render() {
      console.log("App Work");
    return (
      <Container>
        <Header hasTabs style={{backgroundColor:'#33ACFF'}} >
          <Left/>
          <Body>
            <Title style={{color:'white'}}>اخبار News</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab  tabStyle={{backgroundColor:'white'}} heading="Sport">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'white'}}  heading="Politician">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'white'}}  heading="Migration">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}