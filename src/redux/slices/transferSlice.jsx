import {createSlice} from '@reduxjs/toolkit';

const seedData = [
  {
    status: 'up',
    name: 'Payoneerr Payment',
    money: '$128.332',
    date: 'Today, 12:32 PM',
  },
  {
    status: 'down',
    name: 'Deposit ABCBAnk',
    money: '$168.9',
    date: 'Today, 1:38 PM',
  },
  {
    status: 'up',
    name: 'Apple Payment',
    money: '$18.2',
    date: 'Today, 12:32 PM',
  },
  {
    status: 'up',
    name: 'Payoneerr Payment',
    money: '$128.332',
    date: 'Today, 12:32 PM',
  },
];

const initialState = {
  transfers: seedData,
};

const transferSlice = createSlice({
  name: 'transfers',
  initialState,
  reducers: {
    addTransfer: (state, action) => {
      state.transfers.push(action.payload);
    },
  },
});

export const {addTransfer} = transferSlice.actions;
export default transferSlice.reducer;
