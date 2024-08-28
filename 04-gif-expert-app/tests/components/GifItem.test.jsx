import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Prueba de GifItem', () => {

  const title = 'Luffy';
  const url = 'https://media2.giphy.com/media/fZdzEHC8sMC0E/giphy.gif?cid=a3fd93602nim556ngligta53mbrcvcbaalff75ri4606r127&ep=v1_gifs_search&rid=giphy.gif&ct=g';

  test('debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />)
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('debe de mostrar el título en el P', () => {
    render(<GifItem title={title} url={url} />)
    // const { innerHTML } = screen.getByRole('paragraph');
    // expect(innerHTML).toBe(title);
    expect(screen.getByText(title)).toBeTruthy();
  });

});