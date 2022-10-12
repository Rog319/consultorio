import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import FormularioBMI from '../components/FormularioBMI';
import { useState } from 'react';

const Bmi = () => {
  const router = useRouter();

  return (
    <Layout isActive={router}>
      <FormularioBMI></FormularioBMI>
    </Layout>
  );
};

export default Bmi;
