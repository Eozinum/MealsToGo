/* eslint-disable no-unused-vars */
import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";

const StyledCover = styled(Card.Cover)`
  background-color: white;
  padding: 10px;
  border-radius: 0;
`;
const StyledCard = styled(Card)`
  background-color: white;
  border-radius: 0;
`;

const StyledTitle = styled(Card.Title)``;

export const ReastaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Resto Name",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpen = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <StyledCard elevation={5}>
      <StyledCover source={{ uri: photos[0] }} />
      <StyledTitle title={name} subtitle="SUBTITLE" />
    </StyledCard>
  );
};
