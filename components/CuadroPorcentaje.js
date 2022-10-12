import {
  NumberInput,
  TextInput,
  Button,
  Space,
  Input,
  Group,
  Text,
  SimpleGrid,
  Alert,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { IconAlertCircle } from '@tabler/icons';

const CuadroPorcentaje = ({ get, datosPaciente }) => {
  const [proteinasKc, setProteinasKc] = useState(0);
  const [proteinasG, setProteinasG] = useState(0);
  const [proteinasGk, setProteinasGk] = useState(0);
  const [lipidosKc, setlipidosKc] = useState(0);
  const [lipidosG, setlipidosG] = useState(0);
  const [lipidosGk, setlipidosGk] = useState(0);
  const [carbohidratosKc, setcarbohidratosKc] = useState(0);
  const [carbohidratosG, setcarbohidratosG] = useState(0);
  const [carbohidratosGk, setcarbohidratosGk] = useState(0);
  const [totalPorcentaje, setTotalPorcentaje] = useState(100);

  const proteinaValorKcal = 4;
  const lipidoValorKcal = 9;
  const carbohidratoValorKcal = 4;

  const { peso } = datosPaciente;

  const form = useForm({
    initialValues: { proteinasP: '', lipidosP: '', carbohidratosP: '' },
    validate: {
      proteinasP: (value) => (value === 0 ? 'Coloque un porcentaje' : null),
      lipidosP: (value) => (value === 0 ? 'Coloque un porcentaje' : null),
      carbohidratosP: (value) => (value === 0 ? 'Coloque un porcentaje' : null),
    },
  });

  const { proteinasP, lipidosP, carbohidratosP } = form.values;

  const completarCuadro = () => {
    let tempTotalPorcentaje = proteinasP + lipidosP + carbohidratosP;
    setTotalPorcentaje(tempTotalPorcentaje);
    if (tempTotalPorcentaje === 100) {
      let temp1 = get * (proteinasP / 100);
      setProteinasKc(temp1);
      setProteinasG(temp1 / proteinaValorKcal);
      let temp2 = temp1 / proteinaValorKcal;
      setProteinasGk(temp2 / peso);

      let temp3 = get * (lipidosP / 100);
      setlipidosKc(temp3);
      setlipidosG(temp3 / lipidoValorKcal);
      let temp4 = temp3 / lipidoValorKcal;
      setlipidosGk(temp4 / peso);

      let temp5 = get * (carbohidratosP / 100);
      setcarbohidratosKc(temp5);
      setcarbohidratosG(temp5 / carbohidratoValorKcal);
      let temp6 = temp5 / carbohidratoValorKcal;
      setcarbohidratosGk(temp6 / peso);
    }
  };

  const limpiarCuadro = () => {
    setProteinasKc(0);
    setProteinasG(0);
    setProteinasGk(0);
    setlipidosKc(0);
    setlipidosG(0);
    setlipidosGk(0);
    setcarbohidratosKc(0);
    setcarbohidratosG(0);
    setcarbohidratosGk(0);
  };
  return (
    <div>
      <Space h='md' />
      {totalPorcentaje !== 100 ? (
        <Alert icon={<IconAlertCircle size={16} />} title='ERROR' color='red'>
          La suma de los porcentajes debe ser 100, verifiquelos!
        </Alert>
      ) : null}
      <Space h='md' />
      <form onSubmit={form.onSubmit(completarCuadro)}>
        <Group>
          <SimpleGrid cols={1} verticalSpacing='lg'>
            <Text>Macronutrientes</Text>
            <Text>Proteinas</Text>
            <Text>Lipidos</Text>
            <Text>Carbohidratos</Text>
            <Text>Total</Text>
          </SimpleGrid>
          <SimpleGrid verticalSpacing='lg'>
            <Text>Porcentaje</Text>

            <NumberInput
              placeholder='Porcentaje de proteinas'
              hideControls
              {...form.getInputProps('proteinasP')}
            />
            <NumberInput
              hideControls
              placeholder='Porcentaje de lipidos'
              {...form.getInputProps('lipidosP')}
            />
            <NumberInput
              hideControls
              placeholder='Porcentaje de carbohidratos'
              {...form.getInputProps('carbohidratosP')}
            />
            <Text>{totalPorcentaje}</Text>
          </SimpleGrid>
          <SimpleGrid verticalSpacing='lg'>
            <Text>KiloCalorias</Text>
            <Text>{proteinasKc.toFixed(2)}</Text>
            <Text>{lipidosKc.toFixed(2)}</Text>
            <Text>{carbohidratosKc.toFixed(2)}</Text>
            <Text>{get.toFixed(2)}</Text>
          </SimpleGrid>
          <SimpleGrid verticalSpacing='lg'>
            <Text>Gramos</Text>
            <Text>{proteinasG.toFixed(2)}</Text>
            <Text>{lipidosG.toFixed(2)}</Text>
            <Text>{carbohidratosG.toFixed(2)}</Text>
            <Text>0</Text>
          </SimpleGrid>
          <SimpleGrid verticalSpacing='lg'>
            <Text>Gramos/Kilogramos</Text>
            <Text>{proteinasGk.toFixed(2)}</Text>
            <Text>{lipidosGk.toFixed(2)}</Text>
            <Text>{carbohidratosGk.toFixed(2)}</Text>
            <Text>0</Text>
          </SimpleGrid>
        </Group>
        <Space h='md' />
        <Group>
          <Button type='submit'>Rellenar Cuadro</Button>
          <Button onClick={limpiarCuadro}>Limpiar Cuadro</Button>
        </Group>
        <Space h='md' />
      </form>
    </div>
  );
};

export default CuadroPorcentaje;
