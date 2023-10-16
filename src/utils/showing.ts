export const showServiceCategory = (value: 'male' | 'female'): string => {
  const categories = {
    male: 'Male',
    female: 'Female',
  };

  return categories[value];
};

export const showUserRole = (
  value: 'super_admin' | 'admin' | 'user'
): string => {
  const roles = {
    super_admin: 'Super Admin',
    admin: 'Admin',
    user: 'User',
  };

  return roles[value];
};

export const showServiceStatus = (
  value: 'upcoming' | 'available' | 'notAvailable'
): string => {
  const serviceStatus = {
    upcoming: 'Upcoming',
    available: 'Available',
    notAvailable: 'Not Available',
  };

  return serviceStatus[value];
};
