import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const user = { name: 'Juan Perez' }; // Simulación de un usuario logueado

  return (
    <Layout user={user}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;