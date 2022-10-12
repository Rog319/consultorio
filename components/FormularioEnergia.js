import { useForm } from '@mantine/form';
import {
  NumberInput,
  Button,
  Container,
  Text,
  Title,
  Space,
  NativeSelect,
} from '@mantine/core';
import { useState } from 'react';
import {
  formulaHarris,
  formulaMifflin,
  formulaOMS,
  formulaOwen,
  formulaValencia,
  mostrarResultado,
} from '../helpers';
import CuadroDietosintetico from './CuadroDietosintetico';

const FormularioEnergia = () => {
  // const [harris, setHarris] = useState(0);
  // const [oms, setOMS] = useState(0);
  // const [owen, setOwen] = useState(0);
  // const [valencia, setValencia] = useState(0);
  // const [mifflin, setMifflin] = useState(0);
  const [get, setGET] = useState(0);

  const form = useForm({
    initialValues: {
      peso: '',
      altura: '',
      genero: '',
      edad: '',
      facActividad: '',
      formula: '',
    },
    validate: {
      peso: (value) => (value < 1 ? 'El peso dado no tiene sentido' : null),
      altura: (value) =>
        value < 1 ? 'La altura registrada no tiene sentido' : null,
      genero: (value) =>
        value === 'Seleccione su factor de actividad'
          ? 'Por favor seleccione un genero'
          : null,
      edad: (value) => (value < 1 ? 'La altura dada no tiene sentido' : null),
    },
  });

  const { peso, altura, genero, edad, facActividad, formula } = form.values;

  let datosPaciente = {
    peso: peso,
    altura: altura,
    genero: genero,
    edad: edad,
    facActividad: facActividad,
  };

  const calcularGastoE = () => {
    switch (formula) {
      case 'Harris-Benedict':
        setGET(formulaHarris(peso, altura, genero, edad, facActividad));
        break;
      case 'OMS':
        setGET(formulaOMS(peso, altura, genero, edad, facActividad));
        break;
      case 'Owen':
        setGET(formulaOwen(peso, genero, edad, facActividad));
        break;
      case 'Valencia':
        setGET(formulaValencia(peso, genero, edad, facActividad));
        break;
      case 'Mifflin':
        setGET(formulaMifflin(peso, altura, genero, edad, facActividad));
        break;
    }
  };

  return (
    <Container>
      <Title align='center' order={1}>
        Calcular Gasto Energetico Total
      </Title>
      <form onSubmit={form.onSubmit(calcularGastoE)}>
        <NumberInput
          mt='sm'
          label='Peso'
          precision={2}
          step={0.5}
          placeholder='Tu peso en kilogramos'
          {...form.getInputProps('peso')}
        />
        <NumberInput
          mt='sm'
          label='Altura'
          placeholder='Tu altura en metros'
          precision={2}
          step={0.5}
          {...form.getInputProps('altura')}
        />

        <NativeSelect
          mt='sm'
          data={['Masculino', 'Femenino']}
          placeholder='Seleccione su genero'
          label='Genero'
          error='Por favor seleccione un genero'
          {...form.getInputProps('genero')}
        />

        <NumberInput
          mt='sm'
          label='Edad'
          placeholder='Tu edad'
          {...form.getInputProps('edad')}
        />

        <NativeSelect
          mt='sm'
          data={['Sedentario', 'Ligero', 'Moderado', 'Activo', 'Vigoroso']}
          placeholder='Seleccione su factor de actividad'
          label='Factor de actividad'
          error='Por favor seleccione un factor de actividad'
          {...form.getInputProps('facActividad')}
        />

        <NativeSelect
          mt='sm'
          data={['Harris-Benedict', 'OMS', 'Owen', 'Valencia', 'Mifflin']}
          placeholder='Seleccione la formula que desea utilizar'
          label='Formula para obtener GET'
          error='Por favor seleccione una formula'
          {...form.getInputProps('formula')}
        />

        <Button mt='sm' type='submit'>
          Calcular Gasto Energetico Total
        </Button>
      </form>
      <>
        <Space h='md' />
        <Text size='large' weight={500}>
          {mostrarResultado(get)}
        </Text>
      </>
      <>
        <Space h='md' />
        {get === 0 ? null : (
          <CuadroDietosintetico get={get} datosPaciente={datosPaciente} />
        )}
      </>
    </Container>
  );
};

export default FormularioEnergia;
