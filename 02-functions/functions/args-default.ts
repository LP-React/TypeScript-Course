(() => {
  const fullName = (
    firsName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    return upper
      ? `${firsName} ${lastName || "No lastname"}`.toUpperCase()
      : `${firsName} ${lastName}`;
  };

  const name = fullName("Tony", "Stark");

  console.log({ name });
})();
