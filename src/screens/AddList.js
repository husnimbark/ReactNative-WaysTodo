import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { getAuth } from "firebase/auth";
import { Layout, Button, Text, TextInput, Picker } from "react-native-rapi-ui";

export default function ({ navigation }) {
  const auth = getAuth();

  const [pickerValue, setPickerValue] = React.useState(null);
  const items = [
    { label: "Front-end Developer", value: "FED" },
    { label: "Back-end Developer", value: "BED" },
    { label: "Full-stack Developer", value: "FSD" },
  ];

  return (
    <>
      <Layout>
        <ScrollView>
          <View style={{ flex: 1, marginHorizontal: 20, marginTop: 40 }}>
            <Text style={{ fontSize: 25, fontWeight: "600" }}>Add List</Text>
            <TextInput
              containerStyle={{ marginTop: 30, marginBottom: 20 }}
              placeholder="Name"
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
            />
            <Picker
              labelSize="sm"
              items={items}
              value={pickerValue}
              placeholder="Category"
              onValueChange={(val) => setPickerValue(val)}
            />
            <TextInput
              containerStyle={{ marginTop: 20 }}
              placeholder="Enter category name"
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
            />
            <TextInput
              multiline={true}
              numberOfLines={4}
              containerStyle={{ marginTop: 20 }}
              placeholder="Description"
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
          </View>


        </ScrollView>
      </Layout>
    </>
  );
}
