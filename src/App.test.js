import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import {shallow } from 'enzyme';
import App from './App';
import {
  MemoryRouter,
  BrowserRouter,
  Routes, Route
} from "react-router-dom";
import HomePage from './screens/home_page';
import Welcome from './screens/welcom'
import Card from './components/card';
import * as api from './services/transaction.services';
import { TransActions } from './components/actions';
import TransactionServices from './screens/transactions';
import AddNewVendor from './screens/add_new_vendor';
import userEvent from '@testing-library/user-event'
import MerchantServices from './screens/merchant_services';

jest .mock('./services/transaction.services');

test('renders learn react link', () => {
  render(<MemoryRouter>
    <App />
  </MemoryRouter>);
  const linkElement = screen.getByText(/Payziff/i);
  expect(linkElement).toBeInTheDocument();
});


describe('count <> cards on home page', () => {
  let wrapper;

   beforeEach(() => {
      wrapper = shallow(<Welcome />);
      console.log(wrapper); 
   });

   it('should render <Card /> cards', () => {
    expect(wrapper.find('.pz-cards').find(Card)).toHaveLength(4)
   });

});

describe("transaction data testing", () => {
  beforeEach(() => jest.clearAllMocks());

  it("render transactions table on response data", async () => {
    api.getTransactions.mockResolvedValue({
        "status": 200,
        "data": [
            {
                "orderId": 1001,
                "orderAmount": 5000,
                "OrderStatus": "SUCCESS",
                "createdAt": "2023-01-19T05:45:01.000Z",
                "updatedAt": "2023-01-19T05:45:01.000Z"
            },
            {
                "orderId": 1002,
                "orderAmount": 3000,
                "OrderStatus": "PENDING",
                "createdAt": "2023-01-19T05:49:36.000Z",
                "updatedAt": "2023-01-19T05:49:36.000Z"
            },
            {
                "orderId": 1003,
                "orderAmount": 40000,
                "OrderStatus": "PAID",
                "createdAt": "2023-01-19T06:20:35.000Z",
                "updatedAt": "2023-01-19T06:20:35.000Z"
            }
        ]
    });

    render(<TransactionServices />);
    
    await waitFor(() => {
      screen.getByText("5000");
    });
  });

  it("should render error message when api fails", async () => {
    api.getTransactions.mockRejectedValue({});
    render(<TransactionServices />);
    await waitFor(() => {
      screen.getByText("Unable to fetch data");
    });
  });

})