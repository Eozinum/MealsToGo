import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { ReastaurantInfoCard } from "../components/ReastaurantInfoCard";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;
const CardsContainer = styled.View`
  flex: 1;
  padding-top: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
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
