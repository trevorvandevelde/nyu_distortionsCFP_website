import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders the conference navigation', async () => {
  const { container } = render(<App />);
  expect(screen.getByRole('navigation', { name: /conference sections/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /call for proposals/i })).toHaveAttribute('href', '#call-for-proposals');
  expect(container.querySelector('.home-page')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('link', { name: /contact/i }));
  window.location.hash = '#contact';
  fireEvent(window, new HashChangeEvent('hashchange'));
  await waitFor(() => expect(screen.getByText('Clifton Boyd')).toBeInTheDocument());
  expect(screen.getByText('The American Musicological Society')).toBeInTheDocument();
  expect(container.querySelector('.home-page')).not.toBeInTheDocument();
});
