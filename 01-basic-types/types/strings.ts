(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Héror: Volcan Negro`;

  const abc: number = 123;

  console.log(batman.toUpperCase());

  console.log(`I'm ${batman}, ${abc.toString()}`);

  console.log(batman[10]?.toUpperCase() || "No esta presente");
})();
