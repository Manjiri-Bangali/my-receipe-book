import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page title', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Recipe Book/i);
  expect(linkElement).toBeInTheDocument();
});
