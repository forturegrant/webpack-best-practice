interface Result {
  name: string;
}
async function getName(): Promise<Result> {
  return Promise.resolve({
    name: "zzp",
  });
}

const getName = (): Promise<Result> =>
  Promise.resolve({
    name: "zzp",
  });
