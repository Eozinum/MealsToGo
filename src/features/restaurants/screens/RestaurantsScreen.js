import React from "react";
import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { ReastaurantInfoCard } from "../components/ReastaurantInfoCard";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: 16px;
`;
const CardsContainer = styled.View`
  flex: 1;
  padding-top: 16px;
  background-color: blue;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <CardsContainer>
      <ReastaurantInfoCard />
    </CardsContainer>
  </SafeArea>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
