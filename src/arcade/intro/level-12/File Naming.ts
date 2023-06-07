function solution(names: string[]): string[] {
  let nameMapCounter: Record<string, any> = {};
  let output = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const nameCounter = nameMapCounter[name];
    const newCounter = nameCounter !== undefined ? nameCounter + 1 : 1;

    if (nameCounter >= 0) {
      let newName;
      let counter = newCounter;
      do {
        newName = name + `(${counter})`;
        counter++;
      } while (nameMapCounter[newName] !== undefined);

      nameMapCounter[newName] = 0;
      nameMapCounter[name] = newCounter;
      output.push(newName);
    } else {
      output.push(name);
      nameMapCounter[name] = 0;
    }
  }

  return output;
}
