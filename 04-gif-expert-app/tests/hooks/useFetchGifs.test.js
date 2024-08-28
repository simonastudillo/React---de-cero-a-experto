import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hooks useFetchGifs', () => { 

  const category = 'Luffy';

  test('Debe de regresar el estado inicial', () => {
    const {result} = renderHook(() => useFetchGifs(category));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Debe de regresar un arreglo de imagenes y el isLoading en false', async () => {
    const {result} = renderHook(() => useFetchGifs(category));
    await waitFor(
      // () => expect ( result.current.gifs.length ).toBeGreaterThan(0),
      () => expect ( result.current.isLoading ).toBeFalsy(),
      { timeout: 1000 }
    );
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });

 })