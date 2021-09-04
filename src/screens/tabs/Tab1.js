import React, { Component } from "react";
import { Alert, ActivityIndicator } from "react-native";
import DataItem from "../../component/DataItem";
import { getArticles } from "../../service/news";
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
  ScrollView,
} from "native-base";

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
    };
  }

  componentDidMount() {
    getArticles().then(
      (data) => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      (error) => {
        Alert.alert(error, "SomeThing Went Wrong");
      }
    );
  }

  render() {
    console.log(this.state.data);
    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={true} />
        <Text style={{ marginTop: 10 }}>Please Wait ...</Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return <DataItem data={item} key={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    );

    return <Container>{view}</Container>;
  }
}
