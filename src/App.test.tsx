import { render, screen } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";

test('renders home page button', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const linkElement = screen.getByText(/home_page/i);
  expect(linkElement).toBeInTheDocument();
});
