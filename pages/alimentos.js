import { Container, TextInput, Button, Group } from '@mantine/core';
import { IconDatabase } from '@tabler/icons';
import { useRouter } from 'next/router';
import React from 'react';
import BusquedaAlimentos from '../components/BusquedaAlimentos';
import Layout from '../components/Layout';

const Alimentos = ({}) => {
  const router = useRouter();
  return (
    <>
      <Layout isActive={router}>
        <BusquedaAlimentos />
      </Layout>
    </>
  );
};

export default Alimentos;
