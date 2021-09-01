import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class Tab3 extends Component {
  render() {
    return (
      <Container>
    
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://pbs.twimg.com/profile_images/1270995122466050048/p6YGuz8y_400x400.png' }} />
              </Left>
              <Body>
              <Text>This is our title</Text>
                <Text note numberOfLines={2}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}