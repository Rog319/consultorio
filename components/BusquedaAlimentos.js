import {
  Container,
  TextInput,
  Button,
  Group,
  Text,
  Title,
  Center,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { useState } from 'react';
import { useForm } from '@mantine/form';

import Coincidencia from './Coincidencia';

// export async function getInitialProps() {
//   const respuesta = await fetch(
//     'https://smaedb2-default-rtdb.firebaseio.com/SMAE.json'
//   );
//   const entradas = await respuesta.json();
//   if (typeof window !== 'undefined')
//     localStorage.setItem('entradas', JSON.stringify(entradas));

//   const entradas2 = JSON.parse(localStorage.getItem('entradas'));

//   return {
//     props: {
//       entradas2,
//     },
//   };
// }

const BusquedaAlimentos = () => {
  const [busqueda, setBusqueda] = useState('');
  const [localstorage, setLocalStorage] = useState([]);
  const [alimentoRecuperado, setAlimentoRecuperado] = useState([]);
  const form = useForm({
    initialValues: { alimento: '' },
    validate: {
      alimento: (value) =>
        value === '' ? 'Escriba el nombre de un alimento' : null,
    },
  });

  async function realizarPeticion() {}

  async function busquedaAlimentos() {
    const valueAlimento = form.values['alimento'];

    const respuesta = await fetch(
      'https://smaedb2-default-rtdb.firebaseio.com/SMAE.json'
    );
    const alimentos = await respuesta.json();

    // if (typeof window !== 'undefined') {
    //   localStorage.setItem('alimentos', JSON.stringify(alimentos));
    // }

    // const alimentos2 = JSON.parse(localStorage.getItem('alimentos'));

    setAlimentoRecuperado(
      alimentos.filter((alimentos) =>
        alimentos.Alimento.toLowerCase().includes(valueAlimento.toLowerCase())
      )
    );
  }

  return (
    <div>
      <Container px='xs'>
        <Title align='center'>Buscador de alimentos</Title>
        <form onSubmit={form.onSubmit(busquedaAlimentos)}>
          <TextInput
            mt='sm'
            placeholder='Introduce el nombre del alimento'
            label=''
            {...form.getInputProps('alimento')}
          />
          <Center>
            <Button
              leftIcon={<IconSearch />}
              mt='sm'
              variant='outline'
              color='indigo'
              type='submit'
            >
              Buscar
            </Button>
          </Center>
        </form>
        <div>
          {alimentoRecuperado.map((alimento, index) => (
            <Coincidencia key={index} coincidencia={alimento} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BusquedaAlimentos;
