import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import configureMockStore, { MockStore } from 'redux-mock-store';
import { Provider } from 'react-redux';
import Home from './index';

const mockStore = configureMockStore([]);

describe('Home', () => {
  let store: MockStore;

  beforeEach(() => {
    store = mockStore({
      hotel: {
        guests: [23, 45, 155, 374, 22, 99, 100, 101, 115, 209],
      },
    });
  });

  it('renders the form correctly', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(screen.getByLabelText(/Free Premium Rooms:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Free Economy Rooms:/i)).toBeInTheDocument();
  });

  it('calculates the correct results', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    // Set the number of premium rooms to 3
    const inputPremium = screen.getByLabelText(/Free Premium Rooms:/i);
    fireEvent.change(inputPremium, { target: { value: '3' } });

    // Set the number of economy rooms to 3
    const inputEconomy = screen.getByLabelText(/Free Economy Rooms:/i);
    fireEvent.change(inputEconomy, { target: { value: '3' } });

    // Verify that the correct results are displayed
    expect(screen.getByText(/Usage Premium: 3 \(EUR 738\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Usage Economy: 3 \(EUR 167\)/i)).toBeInTheDocument();
  });
});
