import React, { Suspense } from "react";

let data, promise;

function fetchData() {
  if (data) return data;
  promise = new Promise((resolve) => {
    setTimeout(() => {
      data = "data fetched";
      resolve();
    }, 3000);
  });
  throw promise;
}

function Content() {
  const data = fetchData();
  return <p>{data}</p>;
}

// export default class suspenseDemo extends React.Component {
//   render() {
//     return (
//       <Suspense fallback={'loading data'}>
//         <Content />
//       </Suspense>
//     );
//   }
// }

export default function SuspenseDemo() {
  return (
    <Suspense fallback={"loading data"}>
      <Content />
    </Suspense>
  );
}
