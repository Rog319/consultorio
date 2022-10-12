import { AppShell, Header, Navbar, NavLink, Box } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = ({ children, isActive }) => {
  return (
    <AppShell
      padding='md'
      navbar={
        <Navbar width={{ base: 300 }} height={950} p='xs'>
          {
            <>
              <Link href='/' passHref>
                <NavLink
                  component='a'
                  label='Inicio'
                  active={isActive.pathname === '/'}
                />
              </Link>
              <Link href='../bmi' passHref>
                <NavLink
                  component='a'
                  label='BMI'
                  active={isActive.pathname === '/bmi'}
                />
              </Link>
              <Link href='../energia' passHref>
                <NavLink
                  component='a'
                  label='Energia'
                  active={isActive.pathname === '/energia'}
                />
              </Link>
              <Link href='../alimentos' passHref>
                <NavLink
                  component='a'
                  label='Alimentos'
                  active={isActive.pathname === '/alimentos'}
                />
              </Link>
            </>
          }
        </Navbar>
      }
      header={
        <Header height={80} p='xs'>
          {<h1>Consultorio del Dr. Rogelio</h1>}
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default Layout;
