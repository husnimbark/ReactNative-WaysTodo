import React from "react";
import { View, ScrollView} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { Layout, Button, Text, TextInput } from "react-native-rapi-ui";
// import firebase from '../../database/firebaseDB';
// import { addDoc, collection } from "firebase/firestore";

export default function ({ navigation }) {
  const auth = getAuth();

  return (
  
   
      <Layout>
           <ScrollView>
        <View style={{ flex: 1, marginHorizontal: 20, marginTop: 40 }}>
          <Text style={{ fontSize: 25, fontWeight: "600" }}>Add Category</Text>
        
            <TextInput
              containerStyle={{ marginTop: 30 }}
              placeholder="Enter category name"
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
      
              keyboardType="email-address"
            />
            <Button
              text="Add"
              style={{
                marginTop: 20,
              }}
            />
       
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              marginTop: 50,
              textAlign: "center",
            }}
          >
            List Category
          </Text>
          <View style={{ alignItems: "flex-start", paddingTop: 20 }}>
            <Button
              size="md"
              text="Sport"
              style={{
                borderRadius: 20,
                backgroundColor: "#ff5555",

                fontWeight: "600",
                color: "#fff",
                fontSize: 12,
              }}
            ></Button>
          </View>
        </View>
        </ScrollView>
      </Layout>

  
  );
}
