import { store } from '../store';
import { setGuests } from '../reducers/hotel.slice';
import guests from 'data/guests.json';

const { dispatch } = store;

export const fetchGuests = async () => {
  dispatch(setGuests({ guests }));
};
