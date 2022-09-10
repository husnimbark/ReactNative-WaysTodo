import React from "react";
import { View, ScrollView } from "react-native";
import { getAuth } from "firebase/auth";
import {
  Layout,
  Button,
  Text,
  TextInput,
  Avatar,
  Picker,
  Section,
  SectionContent,
} from "react-native-rapi-ui";
import BlankProfile from "../../assets/BlankProfile.jpeg";

import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const auth = getAuth();

  const [pickerCategoryValue, setPickerCategoryValue] = React.useState(null);
  const category = [
    { label: "Sport", value: "FED" },
    { label: "Task", value: "BED" },
    { label: "Study", value: "FSD" },
  ];

  const [pickerStatusValue, setPickerStatusValue] = React.useState(null);
  const status = [
    { label: "Done", value: "FED" },
    { label: "On Going", value: "BED" },
  ];

  return (
    <>

        <Layout>
        <ScrollView>
          <View style={{ flex: 1, marginHorizontal: 20, marginTop: 40 }}>
            <View style={{}}>
              <Text style={{ fontSize: 25, fontWeight: "600" }}>
                Steve Jobs
              </Text>
              <Button
              color="grey"
                text="200"
                size="sm"
                style={{

                  borderRadius: 20,
                  padding: 5,
                  textAlignVertical: 4,
                  marginHorizontal: 140,
                  bottom: 28,
                  fontWeight: "800",

                  fontSize: 12,
                }}
              ></Button>
              <Avatar
                source={BlankProfile}
                size="md"
                style={{ bottom: 65, alignSelf: "flex-end" }}
              ></Avatar>
            </View>
            <TextInput
              containerStyle={{ marginTop: -40 }}
              placeholder="Search"
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              leftContent={
                <Ionicons name="search" size={20} autoCompleteType="off" />
              }
            />
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Picker
                containerStyle={{ marginTop: 20 }}
                placeholder="Date "
                items={category}
                value={pickerCategoryValue}
              />
              <Picker
                containerStyle={{ marginTop: 20 }}
                placeholder="Category "
                items={category}
                value={pickerCategoryValue}
              />
              <Picker
                containerStyle={{ marginTop: 20 }}
                placeholder="Status"
                items={status}
                value={pickerStatusValue}
              />
            </View>

            <Section style={{ marginTop: 40 }}>
              <SectionContent>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "600", fontSize: 18 }}>
                    Study Golang
                  </Text>
                  <Button
                    rightContent
                    text="Study"
                    size="sm"
                    style={{
                      backgroundColor: "yellow",
                      bottom: 5,
                      left: 120,
                      fontWeight: "800",
                      borderRadius: 20,
                      color: "#fff",
                      fontSize: 12,
                    }}
                  ></Button>
                </View>

                <Text style={{ fontSize: 14, marginTop: 10, marginRight: 60 }}>
                  Learn Golang to improve fundamentals and familiarize with
                  coding.
                </Text>
                <Text
                  style={{ fontSize: 12, marginTop: 10, fontWeight: "600" }}
                >
                  30-Aug-2022
                </Text>
              </SectionContent>
            </Section>
          </View>
          </ScrollView>
        </Layout>
    
    </>
  );
}
