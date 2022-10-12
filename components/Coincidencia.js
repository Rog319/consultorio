import { Paper, Text, Space } from '@mantine/core';
import React from 'react';

const Coincidencia = ({ coincidencia }) => {
  const { Alimento, Categoría } = coincidencia;
  return (
    <>
      <Space h='md' />
      <Paper shadow='sm' radius='md' p='md' withBorder>
        <Text size='lg'>{Alimento}</Text>
        <Text>Categoría: {Categoría}</Text>
      </Paper>
    </>
  );
};

export default Coincidencia;
