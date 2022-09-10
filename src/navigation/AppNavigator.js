import React, { useContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme, themeColor } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";
//Screens
import Todo from "../screens/Todo";
import Profile from "../screens/Profile";
import AddCategory from "../screens/AddCategory";
import AddList from "../screens/AddList";
import Settings from "../screens/Settings";
import Loading from "../screens/utils/Loading";
// Auth screens
import Index from "../screens/auth/Index";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";
import { AuthContext } from "../provider/AuthProvider";

// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: "AIzaSyAEpwZvRBXEC7DA7D4ooKt8uiTu_dfZ6Tg",
  authDomain: "",
  databaseURL: "",
  projectId: "waystodo-a5284",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const AuthStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <AuthStack.Screen name="Index" component={Index} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="Profile" component={Profile} />
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Todo"
        component={Todo}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Todo" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"checkmark-circle"} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddList"
        component={AddList}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Add List" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"albums"} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddCategory"
        component={AddCategory}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Add Category" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"apps"} />
          ),
        }}
      />
          <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Settings" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"settings"} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
