import {
  NumberInput,
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

const CuadroGramosKilos = ({ get, datosPaciente }) => {
  //Proteinas
  const [proteinasKc, setProteinasKc] = useState(0);
  const [proteinasG, setProteinasG] = useState(0);
  const [proteinasP, setProteinasP] = useState(0);
  //const [proteinasGk, setProteinasGk] = useState(0);
  //Lipidos
  const [lipidosKc, setlipidosKc] = useState(0);
  const [lipidosG, setlipidosG] = useState(0);
  const [lipidosP, setlipidosP] = useState(0);
  //const [lipidosGk, setlipidosGk] = useState(0);
  //Carbohidratos
  const [carbohidratosKc, setcarbohidratosKc] = useState(0);
  const [carbohidratosG, setcarbohidratosG] = useState(0);
  const [carbohidratosGk, setcarbohidratosGk] = useState(0);
  const [carbohidratosP, setcarbohidratosP] = useState(0);

  const [totalPorcentaje, setTotalPorcentaje] = useState(100);
  const proteinaValorKcal = 4;
  const lipidoValorKcal = 9;
  const carbohidratoValorKcal = 4;

  const { peso } = datosPaciente;

  const form = useForm({
    initialValues: { proteinasGk: 0, lipidosGk: 0 },
    validate: {
      proteinasGk: (value) => (value === 0 ? 'Coloque un porcentaje' : null),
      lipidosGk: (value) => (value === 0 ? 'Coloque un porcentaje' : null),
    },
  });

  const { proteinasGk, lipidosGk } = form.values;

  const completarCuadro = () => {
    let { temp, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9 } = 0;
    //Proteinas
    temp = proteinasGk * peso;
    setProteinasG(temp);
    temp2 = temp * proteinaValorKcal;
    setProteinasKc(temp2);
    temp3 = (temp2 / get) * 100;
    setProteinasP(temp3);
    //Lipidos
    temp4 = lipidosGk * peso;
    setlipidosG(temp4);
    temp5 = temp4 * lipidoValorKcal;
    setlipidosKc(temp5);
    temp6 = (temp5 / get) * 100;
    setlipidosP(temp6);
    //Carbohidratos
    temp7 = 100 - (temp3 + temp6);
    setcarbohidratosP(temp7);
    temp8 = (temp7 / 100) * get;
    setcarbohidratosKc(temp8);
    temp9 = temp8 / carbohidratoValorKcal;
    setcarbohidratosG(temp9);
    setcarbohidratosGk(temp9 / peso);

    let tempPorcentaje = temp3 + temp6 + temp7;
    setTotalPorcentaje(tempPorcentaje);
  };

  const limpiarCuadro = () => {
    setProteinasKc(0);
    setProteinasG(0);
    setProteinasP(0);
    setlipidosKc(0);
    setlipidosG(0);
    setlipidosP(0);
    setcarbohidratosKc(0);
    setcarbohidratosG(0);
    setcarbohidratosGk(0);
    setcarbohidratosP(0);
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
            <Text>{proteinasP.toFixed()}</Text>
            <Text>{lipidosP.toFixed()}</Text>
            <Text>{carbohidratosP.toFixed()}</Text>
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
          <SimpleGrid verticalSpacing='xs'>
            <Text>Gramos/Kilogramos</Text>
            <NumberInput
              hideControls
              precision={1}
              {...form.getInputProps('proteinasGk')}
            />
            <NumberInput
              hideControls
              precision={1}
              {...form.getInputProps('lipidosGk')}
            />
            <Text>{}</Text>
            <Text>{}</Text>
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

export default CuadroGramosKilos;
