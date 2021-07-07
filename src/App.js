import React from "react";

import Container from "./components/Container/Container";

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import Transactions from "./components/Transactions/Transactions";

import user from "./tasks/social-profile/user.json";
import statisticalData from "./tasks/statistics/statistical-data.json";
import friends from "./tasks/friend-list/friends.json";
import transactions from "./tasks/transaction-history/transactions.json";

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
