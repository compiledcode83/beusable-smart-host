import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface HotelState {
  guests: number[];
}

const initialState: HotelState = {
  guests: [],
};

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setGuests: (state, action: PayloadAction<HotelState>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setGuests } = hotelSlice.actions;

export const selectGuests = (state: RootState) => state.hotel.guests;

export default hotelSlice.reducer;
