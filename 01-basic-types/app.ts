(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  enum heroPower {
    acuaman = 0,
    batman = 1,
    flash = 5,
    superman = 100,
  }

  const fuerzaAcuaman : heroPower = heroPower.acuaman;
  const fuerzaBatman : heroPower = heroPower.batman;
  const fuerzaFlash : heroPower = heroPower.flash;
  const fuerzaSuperman : heroPower = heroPower.superman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();
