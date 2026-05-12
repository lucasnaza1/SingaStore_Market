import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o nome do projeto no header', () => {
  render(<App />);
  expect(screen.getByText(/Singastore Design/i)).toBeInTheDocument();
});
