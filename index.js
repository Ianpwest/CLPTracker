/** @format */

import { Navigation } from "react-native-navigation";
import App from "./App";
import {name as appName} from './app.json';
import LogOn from "./Areas/Account/Views/LogOn";
import Scan from "./Areas/Scan/Views/Scan";

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent(`account.views.LogOn`, () => Scan);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "account.views.LogOn"
      }
    }
  });
});
