(() => {
  const fullName = (firsName: string, lastName?: string): string => {
    return `${firsName} ${lastName || 'no lastname'}`;
  };

  const name = fullName("Tony");

  console.log({ name });
})();
