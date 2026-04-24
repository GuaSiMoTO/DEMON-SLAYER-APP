import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Mocks del contexto y el hook
vi.mock('../../context/UserContext', () => ({
  useUser: vi.fn()
}));

import { useUser } from '../../context/UserContext';
import UserPage from '../../pages/UserPage/UserPage';

describe('UserPage', () => {
  const mockSaveUser = vi.fn();
  const mockResetUser = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('1. Muestra el mensaje del overlay (chatbot)', () => {
    useUser.mockReturnValue({
      user: { name: '', avatar: 'placeholder.png' }, // Evitamos el aviso de src vacía
      saveUser: mockSaveUser,
      resetUser: mockResetUser,
    });

    render(
      <MemoryRouter initialEntries={[{ pathname: '/user', state: { message: '¡Bienvenido!' } }]}>
        <UserPage />
      </MemoryRouter>
    );

    // Cambiamos toBeInTheDocument() por toBeDefined() o comprobamos que sea verdad
    const message = screen.getByText('¡Bienvenido!');
    expect(message).toBeDefined(); 
  });

  it('2. El input cambia a MAYÚSCULAS', () => {
    useUser.mockReturnValue({
      user: { name: '', avatar: 'placeholder.png' },
      saveUser: mockSaveUser,
      resetUser: mockResetUser,
    });

    render(
      <MemoryRouter>
        <UserPage />
      </MemoryRouter>
    );
    
    const input = screen.getByPlaceholderText(/YOUR NAME.../i);
    fireEvent.change(input, { target: { value: 'pau' } });

    expect(input.value).toBe('PAU');
  });

  it('3. Llama a saveUser al hacer click en SAVE', () => {
    vi.stubGlobal('alert', vi.fn());
    useUser.mockReturnValue({
      user: { name: '', avatar: 'avatar1.png' },
      saveUser: mockSaveUser,
      resetUser: mockResetUser,
    });

    render(
      <MemoryRouter>
        <UserPage />
      </MemoryRouter>
    );
    
    const input = screen.getByPlaceholderText(/YOUR NAME.../i);
    fireEvent.change(input, { target: { value: 'MARCO' } });
    
    const saveButton = screen.getByText('SAVE');
    fireEvent.click(saveButton);

    expect(mockSaveUser).toHaveBeenCalled();
  });

  it('4. Muestra botón DELETE si ya hay usuario', () => {
    useUser.mockReturnValue({
      user: { name: 'JUAN', avatar: 'avatar2.png' },
      saveUser: mockSaveUser,
      resetUser: mockResetUser,
    });

    render(
      <MemoryRouter>
        <UserPage />
      </MemoryRouter>
    );

    const deleteBtn = screen.getByText(/DELETE USER/i);
    expect(deleteBtn).toBeDefined();
  });
});