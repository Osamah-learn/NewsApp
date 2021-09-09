import React, { Component } from "react";
import TimeAgo from "./Time";
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
  View,
} from "native-base";
import { LogBox } from "react-native";
/* 
Hiding 
Warning: VirtualizedLists should never be nested  */
LogBox.ignoreAllLogs();

export default class DataItem extends Component {
  constructor(props) {
    super(props);
  }
  handlePress = () => {
    const { url, title } = this.props.data;
    this.props.onPress({ url, title });
  };
  render() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            large
            source={{
              uri: this.props.data.urlToImage
                ? this.props.data.urlToImage
                : "https://pbs.twimg.com/profile_images/1270995122466050048/p6YGuz8y_400x400.png",
            }}
          />
        </Left>
        <Body>
          <Text style={{ marginTop: 30 }} numberOfLines={2}>
            {this.props.data.title}
          </Text>
          <Text style={{ paddingTop: 0, marginTop: 4 }} note numberOfLines={2}>
            {this.props.data.description}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 8,
              marginLeft: 0,
            }}
          >
            <TimeAgo Time={this.props.data.publishedAt} />
          </View>
        </Body>
        <Right>
          <Button transparent onPress={this.handlePress}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}
