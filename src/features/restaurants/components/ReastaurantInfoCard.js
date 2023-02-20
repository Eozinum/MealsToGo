import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const StyledCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.sizes[1]};
  border-radius: ${(props) => props.theme.sizes[0]};
`;
const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.sizes[0]};
  margin: ${(props) => props.theme.space[2]};
`;

const StyledView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const StyledTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
`;

const StyledAddress = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.text.secondary};
`;

const TextClosed = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text.error};
`;

const StyledRating = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

const StyledImage = styled.Image`
  width: 15px;
  height: 15px;
  margin-left: ${(props) => props.theme.space[2]};
`;

const StyledRatingView = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

const ClosedContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ReastaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Resto Name",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpen = false,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <StyledCard elevation={5}>
      <StyledCover source={{ uri: photos[0] }} />
      <StyledView>
        <StyledTitle>{name}</StyledTitle>
        <StyledRatingView>
          <StyledRating>
            {ratingArray.map((m, i) => (
              <SvgXml key={i} xml={star} width={20} height={20} />
            ))}
          </StyledRating>
          {isOpen && <SvgXml xml={open} width={20} height={20} />}
          {isClosedTemporarily && (
            <ClosedContainer>
              <TextClosed>CLOSED TEMPORARILY</TextClosed>
              <StyledImage source={{ uri: icon }} />
            </ClosedContainer>
          )}
        </StyledRatingView>
        <StyledAddress>{address}</StyledAddress>
      </StyledView>
    </StyledCard>
  );
};
