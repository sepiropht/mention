import React, { useCallback, useEffect, useState, useRef } from "react";
import { Card } from "./components/Card";
import { List, ListItem, Container, Link, Spinner } from "@chakra-ui/react";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

const account_id = "661072_53ca2jsh01c88c4wwkc0wockckk0w4440o4o0w8wkkgco4o888";
const alert_id = 1214654;
const token =
  "ZDdmNDVmYzU1NWZkMDkwMDc4YjBjMzYyZDk2MDI3NGVlNmFmNTJkZDU5MzBhYWRiZGZmNzAxOGM1NDkzNDYxYQ";

type Mention = {
  id: string;
  description_short: string;
  description_medium: string;
  picture_url: string;
  created_at: string;
  source_url: string;
  original_url: string;
};

function App() {
  const [mentions, setMentions] = useState<Array<Mention>>([]);
  const [fetchLink, setFetchLink] = useState<string>(
    `/api/accounts/${account_id}/alerts/${alert_id}/mentions?access_token=${token}`
  );
  const [showSpinner, setSpinner] = useState(true);
  const calledOnce = useRef<boolean>(false);

  const fetchMentions = useCallback(() => {
    setSpinner(true);
    fetch(fetchLink)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data._links.more) {
          setSpinner(false);
          return;
        }
        setMentions([...mentions, ...data.mentions]);
        setFetchLink(`${data._links.more.href}&access_token=${token}`);
        setSpinner(false);
      });
  }, [fetchLink, mentions]);

  useBottomScrollListener(fetchMentions);
  useEffect(() => {
    if (calledOnce.current) return;
    fetchMentions();
    calledOnce.current = true;
  }, [fetchMentions]);

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
    <Container textAlign="center">
      <List>{items}</List>
      {showSpinner && <Spinner textAlign="center" size="xl" />}
    </Container>
  );
}

export default App;
