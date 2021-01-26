import React from "react";
import { Box, Image, Text, extendTheme } from "@chakra-ui/react";
import dayjs from "dayjs";

extendTheme({
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
});
interface CardProps {
  img: string;
  date: string;
}
export const Card: React.FC<CardProps> = ({ img, date }) => {
  //console.log(dayjs("2020-12-31T06:30:19.79103600+00:00").toString());
  const link = "twitter.com";
  const time = "25 feb";
  const title = "@1mealmanythanks @Mention I have not been";
  const description =
    "@1mealmanythanks @Mention I have not been out lately because of the covid19 and the lockdown l would love to spend time with @Wendy44422193 at @KFCSA just to have some good time in our …";
  return (
    <Box display="flex" padding="15px" border="1px solid #F5F7F9">
      <Box padding="10px">
        <Image
          width="100px"
          height="50px"
          src="https://pbs.twimg.com/profile_images/1133209360107155456/aUg0_ZVS_normal.jpg"
          alt=""
        ></Image>
      </Box>
      <Box>
        <Box
          className="header"
          display="flex"
          padding-left="10px"
          width="100%"
          justifyContent="space-between"
        >
          <Box color="#8F9EAB">{link}</Box>
          <Box>{time}</Box>
        </Box>
        <Box className="content">
          <Box textStyle="h1" fontWeight="bold" fontSize="18px">
            {title}
          </Box>
          <Text
            display="-webkit-box"
            overflow="hidden"
            textOverflow="ellipsis"
            color="#273D54"
            fontSize="16px"
            style={{
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
