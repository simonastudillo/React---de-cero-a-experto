import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en el componente padre', () => {
  test('', () => {
    const { container } = render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    const category = 'Luffy';
    fireEvent.change(input, { target: { value: category } });
    expect(input.value).toBe(category);

    fireEvent.submit(form);
    screen.debug();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1);

    expect(input.value).toBe('');

  });
})