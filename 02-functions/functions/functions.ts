(() => {
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activateBatsignal = (): string => {
    return "Batsignal actived!";
  };

  console.log(activateBatsignal());

  const heroName = returnName();
})();
