import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { Title } from '@mantine/core';
import FormularioEnergia from '../components/FormularioEnergia';

const Energia = () => {
  const router = useRouter();
  return (
    <>
      <Layout isActive={router}>
        <FormularioEnergia />
      </Layout>
    </>
  );
};

export default Energia;
