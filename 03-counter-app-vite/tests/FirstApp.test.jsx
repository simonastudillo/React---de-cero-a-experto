import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

  // test('Debe de hacer match con el snapshot', () => {
  //   const title = 'Hola, Soy Vegata';
  //   const { container } = render(<FirstApp title={title} subTitle='Esto es un subTitle'></FirstApp>);
  //   // Toma un snapshot y lo compara con el render de la prueba
  //   expect(container).toMatchSnapshot();
  // });

  test('Debe de mostrar el titulo en un h1', () => {
    const title = 'Hola, Soy Goku';
    const { container, getByText, getByTestId } = render(<FirstApp title={title}></FirstApp>);
    // Busca el texto en el render
    expect(getByText(title)).toBeTruthy();

    // expect(getByTestId('test-title')).toBeTruthy();
    // expect(getByTestId('test-title').innerHTML).toBe(title);   
    expect(getByTestId('test-title').innerHTML).toContain(title);

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toBe(title);
  });

  test('Debe de mostrar el subtitulo enviado por prop', () => {
    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';
    const { getAllByText } = render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      ></FirstApp>);
    // Busca el texto en el render
    // expect(getByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(2);
  });

});