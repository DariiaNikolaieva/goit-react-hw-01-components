import React from "react";

import Profile from "./components/Profile";
import user from "./tasks/social-profile/user.json";

import Statistics from "./components/Statistics";
import statisticalData from "./tasks/statistics/statistical-data.json";

import FriendList from "./components/FriendList";
import friends from "./tasks/friend-list/friends.json";

import Transactions from "./components/Transactions";
import transactions from "./tasks/transaction-history/transactions.json";

const App = () => {
  return (
    <div>
      <h2>Task 1. Social Profile</h2>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Task 2. Statistics</h2>
      {/* <Statistics title="Upload stats" stats={statisticalData} />; */}
      <Statistics stats={statisticalData} />
      <h2>Task 3. List of Friends</h2>
      <FriendList friends={friends} />
      <h2>Task 4. Transactions</h2>
      <Transactions items={transactions} />;
    </div>
  );
};

export default App;
