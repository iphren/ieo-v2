import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from "react-router-dom";

test('renders contact us section', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const linkElement = screen.getByText(/contact_us.title/i);
  expect(linkElement).toBeInTheDocument();
});
