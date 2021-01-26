import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { List, ListItem, Container } from "@chakra-ui/react";

const account_id = "661072_53ca2jsh01c88c4wwkc0wockckk0w4440o4o0w8wkkgco4o888";
const alert_id = 1214654;
const token =
  "ZDdmNDVmYzU1NWZkMDkwMDc4YjBjMzYyZDk2MDI3NGVlNmFmNTJkZDU5MzBhYWRiZGZmNzAxOGM1NDkzNDYxYQ";

type Mention = {
  id: string;
};

function App() {
  const [mentions, setMentions] = useState<Array<Mention>>([]);
  useEffect(() => {
    fetch(
      `/api/accounts/${account_id}/alerts/${alert_id}/mentions?access_token=${token}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMentions(data.mentions);
      });
  }, []);
  const items = mentions.map((mention) => (
    <ListItem key={mention.id}>
      <Card img={""} date={""}></Card>
    </ListItem>
  ));
  return (
    <Container>
      <List>{items}</List>
    </Container>
  );
}

export default App;
