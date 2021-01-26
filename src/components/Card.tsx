import React, { useRef } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import profile from "./profile.png";

interface CardProps {
  imgSrc: string;
  date: string;
  title: string;
  description: string;
  link: string;
}
export const Card: React.FC<CardProps> = ({
  imgSrc,
  date,
  title,
  description,
  link,
}) => {
  const formatedDate = dayjs(date).format("DD MMM");
  const imgEl = useRef<HTMLImageElement>(null);

  function imgError() {
    if (imgEl.current) {
      imgEl.current.onerror = null;
      imgEl.current.src = profile;
    }
    return true;
  }
  return (
    <Box
      display="flex"
      padding="15px"
      border="1px solid #F5F7F9"
      width="550px"
      cursor="pointer"
      textAlign="left"
    >
      <Box padding="10px">
        <Box width="40px" height="40px">
          <Image
            borderRadius="60%"
            ref={imgEl}
            src={imgSrc}
            onError={imgError}
            alt="profile"
          ></Image>
        </Box>
      </Box>
      <Box width="100%">
        <Box
          className="header"
          display="flex"
          padding-left="10px"
          width="100%"
          justifyContent="space-between"
        >
          <Box color="#8F9EAB">{link}</Box>
          <Box color="#A1D3EF">{formatedDate}</Box>
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
