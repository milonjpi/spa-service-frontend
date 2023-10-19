import { Metadata } from 'next';
import HomePage from '../../components/ui-pages/HomePage';

export const metadata: Metadata = {
  title: '24/7 Spa | Home',
};

const Home = () => {
  return <HomePage />;
};

export default Home;
