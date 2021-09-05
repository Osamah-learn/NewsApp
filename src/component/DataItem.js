import React, { Component } from "react";
import TimeAgo from './Time'
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
  View
} from "native-base";

export default class DataItem extends Component {
  constructor(props) {
    super(props);
  }
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
          <Text style={{marginTop:30}  } numberOfLines={2}>{this.props.data.title}</Text>
          <Text style={{paddingTop:0,marginTop:4}} note numberOfLines={2}>
            {this.props.data.description}
          </Text>
          <View style={{flex:1,flexDirection:'row',marginTop:8,marginLeft:0}}>
          <TimeAgo Time={this.props.data.publishedAt}/>
         
          </View>
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
