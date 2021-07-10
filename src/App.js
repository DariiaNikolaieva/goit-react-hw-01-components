import React from "react";

import Container from "./components/Container/Container";

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/Friends/FriendList";
import Transactions from "./components/Transactions/Transactions";

import user from "./db/user.json";
import statisticalData from "./db/statistical-data.json";
import friends from "./db/friends.json";
import transactions from "./db/transactions.json";

const App = () => {
  return (
    <>
      <Container>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics stats={statisticalData} />

        <FriendList friends={friends} />

        <Transactions items={transactions} />
      </Container>
    </>
  );
};

export default App;
