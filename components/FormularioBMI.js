import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { useForm } from '@mantine/form';
import {
  NumberInput,
  Button,
  Container,
  Text,
  Title,
  Space,
} from '@mantine/core';
import { useState } from 'react';
import { calcularIMC } from '../helpers';

const FormularioBMI = () => {
  const router = useRouter();
  const [bmi, setBMI] = useState(0);

  const form = useForm({
    initialValues: { peso: '', altura: '' },
    validate: {
      peso: (value) => (value < 1 ? 'El peso dado no tiene sentido' : null),
      altura: (value) =>
        value < 1 ? 'La altura registrada no tiene sentido' : null,
    },
  });

  const calcularIMC = () => {
    const peso = form.values['peso'];
    const altura = form.values['altura'];
    const imc = peso / (altura * altura);
    setBMI(imc);
  };

  const resultado = () => {
    const resultadoImc =
      'Tu indice de masa corporal es: ' + bmi.toPrecision(4) + '. ';

    if (bmi === 0) {
      return '';
    } else if (bmi < 18.5) {
      return resultadoImc + 'Por lo cual tienes un peso muy bajo';
    } else if (bmi >= 18.5 && bmi < 25.0) {
      return resultadoImc + 'Por lo cual estas en un peso saludable';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      return resultadoImc + 'Por lo cual estas en sobrepeso';
    } else {
      return resultadoImc + 'Por lo cual tienes obesidad';
    }
    return;
  };

  return (
    <Container>
      <Title order={1}>Calcula tu Indice de Masa Corporal</Title>
      <form onSubmit={form.onSubmit(calcularIMC)}>
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
        <Button mt='sm' type='submit'>
          Calcular IMC
        </Button>
      </form>
      <div>
        <Space h='md' />
        <Text size='large' align='center' weight={500}>
          {resultado()}
        </Text>
      </div>
    </Container>
  );
};

export default FormularioBMI;
