import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { GET_USER } from './mocks/mockGet';
import App from '../src/App';
import renderWithRouter from './helpers/renderWithRouter';


describe('Testa se API retorna oque é esperado', async () => {
  it('Testa se ao tentar pegar dados de usuário, retorna oque é esperado', async () => {
    const fetchResolved = {
      json: async () => GET_USER,
    } as Response;

    const mock = vi.spyOn(global, 'fetch')
    .mockResolvedValue(fetchResolved);
    const { user } = renderWithRouter(<App />, { route: '/profile' });

    const user1 = await screen.findByText(/João Silva/i);
    const user2 = await screen.findByText(/Maria Silva/i);
    const showPassword = await screen.findByTestId('profile-show-password-1');

    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
    expect(showPassword).toHaveTextContent('Mostrar');

    await user.click(showPassword);
    expect(showPassword).toHaveTextContent('Ocultar');

    mock.mockRestore();
  })

});

