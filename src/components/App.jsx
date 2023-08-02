import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Friends } from "./FriendList/Friends";
import { Transaction } from "./Transactions/TransactionHistory";

import userItems from '../user.json';
import dataElem from "../data.json";
import friendsElem from '../friends.json';
import transactElem from "../transactions.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile items={userItems} />
      <Statistics data={dataElem} />
      <Friends friends={friendsElem} />
      <Transaction transactElem={transactElem}/>
    </div>
  );
};
