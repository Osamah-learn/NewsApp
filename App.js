import React from "react";
import TabScreen from "./src/screens/TabScreen";
import * as Font from 'expo-font';






export default function App() {

  React.useEffect(() => {
    (async () => await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }))();
   }, [])
  return <TabScreen />;
}
