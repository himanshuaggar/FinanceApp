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

const cardData = [
  {
    cardNumber: '1253 5432 3521 3090',
    cardHolderName: 'Sarah Muller',
    expiryDate: '09/24',
    cardImage: require('../../../assets/cardbg.jpg'),
    cardTypeLogo: require('../../../assets/visacard.png'),
  },
  {
    cardNumber: '4567 1234 5678 9012',
    cardHolderName: 'John Doe',
    expiryDate: '12/25',
    cardImage: require('../../../assets/cardbg.jpg'),
    cardTypeLogo: require('../../../assets/visacard.png'),
  },
  {
    cardNumber: '4567 6854 5678 6012',
    cardHolderName: 'Jane Klark',
    expiryDate: '12/25',
    cardImage: require('../../../assets/cardbg.jpg'),
    cardTypeLogo: require('../../../assets/visacard.png'),
  },
];

const initialState = {
  transfers: seedData,
  selectedCard: null,
};

const transferSlice = createSlice({
  name: 'transfers',
  initialState,
  reducers: {
    addTransfer: (state, action) => {
      state.transfers.push(action.payload);
    },
    selectCard: (state, action) => {
      state.selectedCard = action.payload;
    },
  },
});

export const {addTransfer, selectCard} = transferSlice.actions;
export default transferSlice.reducer;
