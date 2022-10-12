import { Button, Group, Title, Text, Space, Input } from '@mantine/core';
import React, { useState } from 'react';
import CuadroGramosKilos from './CuadroGramosKilos';
import CuadroPorcentaje from './CuadroPorcentaje';
import FormularioPorcentajeCuadro from './FormularioPorcentajeCuadro';

const CuadroDietosintetico = ({ get, datosPaciente }) => {
  const [tipoCuadro, setTipoCuadro] = useState(0);
  const [botones, setBotones] = useState(0);

  const cuadroPorcentaje = () => {
    setTipoCuadro(1);
    setBotones(1);
  };
  const botonesPorcentaje = () => {
    cuadroGramos();
  };
  const botonesGramos = () => {
    cuadroPorcentaje();
  };

  const cuadroGramos = () => {
    setTipoCuadro(2);
    setBotones(2);
  };
  return (
    <div>
      <Title align='center'>Cuadro Dietosintético</Title>
      <Space h='md' />
      <Text size={20}>¿Comó desea llenar el Cuadro Dietosintético?</Text>
      {botones === 0 ? (
        <>
          <Space h='md' />
          <Group>
            <Button color='grape' onClick={cuadroPorcentaje}>
              Porcentaje
            </Button>
            <Button color='grape' onClick={cuadroGramos}>
              Gramos/Kilogramos
            </Button>
          </Group>
        </>
      ) : null}
      {botones === 1 ? (
        <>
          <Space h='md' />
          <Group>
            <Button color='grape' onClick={botonesPorcentaje}>
              Cambiar a gramos/kilogramos
            </Button>
          </Group>
        </>
      ) : null}

      {botones === 2 ? (
        <>
          <Space h='md' />
          <Group>
            <Button color='grape' onClick={botonesGramos}>
              Cambiar a porcentaje
            </Button>
          </Group>
        </>
      ) : null}

      {tipoCuadro === 1 ? (
        <CuadroPorcentaje get={get} datosPaciente={datosPaciente} />
      ) : null}
      {tipoCuadro === 2 ? (
        <CuadroGramosKilos get={get} datosPaciente={datosPaciente} />
      ) : null}
    </div>
  );
};

export default CuadroDietosintetico;
