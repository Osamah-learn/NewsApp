import React, { Component } from "react";
import { Dimensions, Modal, Share } from "react-native";
import { WebView } from "react-native-webview";
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Icon,
  Right,
  Title,
  Button,
} from "native-base";

const webViewHeight = Dimensions.get("window").height - 56;

export class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    return this.props.onClose();
  };

  handleShare = async () => {
    try {
      const { url, title } = this.props.articleData;
      const result = await Share.share({
        message: `${title}\n\nRead More @${url}\n\nShared via Osku News App`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { showModal, articleData } = this.props;
    const url = articleData;

    if (url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}
        >
          <Container
            style={{ margin: 15, marginBottom: 0, backgroundColor: "white" }}
          >
            <Header style={{ backgroundColor: "#33ACFF" }}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon name="close" style={{ color: "white", fontSize: 20 }} />
                </Button>
              </Left>
              <Body>
                <Title
                  children={articleData.title}
                  style={{ color: "white", fontSize: 12, width: 200 }}
                  numberOfLines={2}
                ></Title>
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" style={{ color: "white", fontSize: 20 }} />
                </Button>
              </Right>
            </Header>
            <Content contentContainerStyle={{ height: webViewHeight }}>
              <WebView
                originWhitelist={["*"]}
                source={{
                  uri: url.url,
                }}
                style={{ flex: 1 }}
                onError={this.handleClose}
                startInLoadingState
                scalesPageToFit
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}
