import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Friends } from "./FriendList/Friends";
import { Transaction } from "./Transactions/TransactionHistory";
import { GlobalStyle } from "./GlobalStyle";

import userItems from '../user.json';
import dataElem from "../data.json";
import friendsElem from '../friends.json';
import transactElem from "../transactions.json";

import {Wrapper} from './App.styled'


export const App = () => {
  return (
    <Wrapper>
      <Profile items={userItems} />
      <Statistics title='Upload Stats' data={dataElem} />
      <Friends friends={friendsElem} />
      <Transaction transactElem={transactElem} />
      <GlobalStyle/>
    </Wrapper>
  );
};
