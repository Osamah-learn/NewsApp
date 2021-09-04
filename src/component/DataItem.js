import React, { Component } from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";

export default class DataItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.data.title);
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri: this.props.data.urlToImage
                ? this.props.data.urlToImage
                : "https://pbs.twimg.com/profile_images/1270995122466050048/p6YGuz8y_400x400.png",
            }}
          />
        </Left>
        <Body>
          <Text numberOfLines={2}>{this.props.data.title}</Text>
          <Text note numberOfLines={2}>
            {this.props.data.description}
          </Text>
        </Body>
        <Right>
          <Button transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}
