import ProfilePage from '@/components/ui-pages/profile/ProfilePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Spa | Profile',
};

const Profile = () => {
  return <ProfilePage />;
};

export default Profile;
