import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Prueba de AddCategory', () => {

  test('Debe de cambiar el valor de la caja de texto', () => {
    // debe enviar siempre una funcion
    render(<AddCategory onNewCategory={() => true} />);
    // Asegurarse de que el value cambie en el input
    // Obtenemos el input
    const input = screen.getByRole('textbox');
    // Verificamos que por defecto el input tiene un valor vacio
    expect(input.value).toBe('');
    // Cambiar el valor del input
    fireEvent.input(input, { target: { value: 'Luffy' } });
    expect(input.value).toBe('Luffy');
  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Luffy';
    const onNewCategory = jest.fn(() => true);

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe('');
    // expect(onNewCategory).toHaveBeenCalled();
    // expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('No debe de llamar onNewCategory si el input no tiene un valor', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(input.value).toBe('');

    // expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).not.toHaveBeenCalledWith();
  });

});