import CartPage from '@/components/ui-pages/cart/CartPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Spa | Cart',
};

const Cart = () => {
  return <CartPage />;
};

export default Cart;
