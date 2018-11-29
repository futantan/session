export const upperUserFirstName = user => {
  return {
    ...user,
    name: {
      ...user.name,
      first: user.name.first.toUpperCase()
    }
  };
};
