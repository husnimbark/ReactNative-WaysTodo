import React from "react";
import { View , } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  Layout,
  Button,
  Text,
  TextInput,
  TopNav,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";


export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  return (

    <Layout>
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
      }}
    >
      
      <Section>
        <SectionContent>
          <Button
            text="Profile"
            onPress={() => {
              navigation.navigate("Profile");
            }}
            style={{
              marginTop: 10,
            }}
          />
          <Button
            status="danger"
            text="Logout"
            onPress={() => {
              signOut(auth);
            }}
            style={{
              marginTop: 10,
            }}
          />
          <Button
            text={isDarkmode ? "Light Mode" : "Dark Mode"}
            status={isDarkmode ? "success" : "warning"}
            onPress={() => {
              if (isDarkmode) {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
            style={{
              marginTop: 10,
            }}
          />
        </SectionContent>
      </Section>
    </View>
  </Layout>

  );
}
