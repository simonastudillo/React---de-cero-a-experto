import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en el <GifGrid />', () => {

  const category = 'Luffy';

  test('Mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('Debe de mostrar items cuando se cargab las imagenes useFetchGifs', () => {

    const gifs = [
      { id: 1, title: 'a', url: 'https://media.giphy.com/media/l0HlE0o3l9t9m/giphy.gif' },
      { id: 2, title: 'b', url: 'https://media.giphy.com/media/l0HlE0o3l9t9m/giphy.gif' },
      { id: 3, title: 'c', url: 'https://media.giphy.com/media/l0HlE0o3l9t9m/giphy.gif' },
      { id: 4, title: 'd', url: 'https://media.giphy.com/media/l0HlE0o3l9t9m/giphy.gif' },
      { id: 5, title: 'e', url: 'https://media.giphy.com/media/l0HlE0o3l9t9m/giphy.gif' },
    ];

    useFetchGifs.mockReturnValue({
      gifs: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img')).toHaveLength(gifs.length);
    expect(screen.getAllByRole('img').length).toBe(gifs.length);
  });
});