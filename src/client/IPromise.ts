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

function fetchData<T>(url: string): Promise<T> {
  return fetch(url).then((res) => res.json());
}

interface User {
  name: string;
}

fetchData<User>("https://api.example.com/users/1").then((user) =>
  console.log(user.name)
);
