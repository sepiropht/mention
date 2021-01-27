import React from "react";
import { Card } from "./Card";
import { Box, List, ListItem, Link } from "@chakra-ui/react";

export type Mention = {
  id: string;
  description_short: string;
  description_medium: string;
  picture_url: string;
  created_at: string;
  source_url: string;
  original_url: string;
};
interface MentionsListProps {
  mentions: Array<Mention>;
}
export const MentionsList: React.FC<MentionsListProps> = ({ mentions }) => {
  const items = mentions.map(
    ({
      description_short,
      id,
      description_medium,
      picture_url,
      created_at,
      source_url,
      original_url,
    }) => (
      <ListItem key={id}>
        <Link href={original_url} isExternal>
          <Card
            date={created_at}
            imgSrc={picture_url}
            title={description_short}
            description={description_medium}
            link={source_url.split("/")[2]}
          ></Card>
        </Link>
      </ListItem>
    )
  );
  return (
    <>
      {items && items.length ? <List>{items}</List> : ""}
      {items && !items.length ? <Box>No mentions</Box> : ""}
    </>
  );
};
