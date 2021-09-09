import React, { Component } from "react";
import { Alert, ActivityIndicator } from "react-native";
import DataItem from "../../component/DataItem";
import { getArticles } from "../../service/news";
import {ModalComponent }from "..//..//component/Modal";
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

export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      setModelVisible: false,
      modalArticleData: {},
    };
  }
handleModalDataOnPress = (articleData)=>{
this.setState({
  setModelVisible:true,
  modalArticleData:articleData,
})
}
handleModalClose = ()=>{
this.setState({
  setModelVisible:false,
  modalArticleData:{}
})
}
  componentDidMount() {
    getArticles('technology').then(
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
    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={true} />
        <Text style={{ marginTop: 10 }}>Please Wait ...</Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return <DataItem
          onPress={this.handleModalDataOnPress}
          data={item} key={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    );

    return (
      <Container>
        <Content>{view}</Content>
        <ModalComponent
        showModal={this.state.setModelVisible}
        articleData ={this.state.modalArticleData}
        onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}
