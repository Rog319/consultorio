import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Layout isActive={router}>
        <h1>Inicio</h1>
      </Layout>
    </>
  );
};

export default Home;
