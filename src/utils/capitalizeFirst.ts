const capitalizeFirst = (accessStatus: string) => {
  return (
    accessStatus.charAt(0).toUpperCase() + accessStatus.toLowerCase().slice(1)
  );
};

export default capitalizeFirst;
