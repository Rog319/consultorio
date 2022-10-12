import {
  Center,
  Container,
  Input,
  NumberInput,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';

const FormularioPorcentajeCuadro = () => {
  const form = useForm({
    initialValues: {
      proteinasP: '',
      lipidosP: '',
      carbohidratosP: '',
    },
    validate: {
      proteinasP: (value) =>
        value < 1 ? 'El peso dado no tiene sentido' : null,
      lipidosP: (value) =>
        value < 1 ? 'La altura registrada no tiene sentido' : null,
      carbohidratosP: (value) =>
        value < 1 ? 'El peso dado no tiene sentido' : null,
    },
  });
  return (
    <div>
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput
          mt='sm'
          label='Porcentaje de proteinas'
          placeholder='Cantidad de proteinas en porcentaje'
          {...form.getInputProps('proteinasP')}
        />
        <TextInput
          mt='sm'
          label='Porcentaje de lipidos'
          placeholder='Cantidad de lipidos en porcentaje'
          {...form.getInputProps('lipidosP')}
        />
        <TextInput
          mt='sm'
          label='Porcentaje de carbohidratos'
          placeholder='Cantidad de carbohidratos en porcentaje'
          {...form.getInputProps('carbohidratosP')}
        />
      </form>
    </div>
  );
};

export default FormularioPorcentajeCuadro;
