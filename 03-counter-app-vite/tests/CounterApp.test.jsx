import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en el <CounterApp />', () => {

  const initialValue = 100;
  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={initialValue}></CounterApp>);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el valor enviado', () => {
    render(<CounterApp value={initialValue}></CounterApp>);
    expect(screen.getByText(initialValue)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(initialValue.toString());
  });

  test('Deben de incrementar con el boton +1', () => {
    render(<CounterApp value={initialValue}></CounterApp>);

    fireEvent.click(screen.getByRole('button', { name: '+1' }));
    // fireEvent.click(screen.getByText('+1'));

    expect(screen.getByText(initialValue + 1)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain((initialValue + 1).toString());
  });

  test('Deben de decrementar con el boton -1', () => {
    render(<CounterApp value={initialValue}></CounterApp>);

    // fireEvent.click(screen.getByRole('button', { name: '-1' }));
    fireEvent.click(screen.getByText('-1'));

    expect(screen.getByText(initialValue - 1)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain((initialValue - 1).toString());
  });

  test('Deben de resetear con el boton reset', () => {
    render(<CounterApp value={initialValue}></CounterApp>);
    fireEvent.click(screen.getByRole('button', { name: '-1' }));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    expect(screen.getByText('100')).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain((initialValue).toString());
  });
});