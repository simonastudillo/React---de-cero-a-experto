import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

  const title = 'Hola, Soy Goku';
  const subTitle = 'Soy un subtitulo';

  test('Debe de hacer match con el snapchot', () => {
    const { container } = render(<FirstApp title={title}></FirstApp>);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Hola soy Goku"', () => {
    render(<FirstApp title={title}></FirstApp>);
    // screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('Debe de mostrar el titulo en un h1', () => {
    render(<FirstApp title={title}></FirstApp>);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  });

  test('Debe de mostrar el subtitulo enviado por prop', () => {
    render(<FirstApp
      title={title}
      subTitle={subTitle}
    ></FirstApp>);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});