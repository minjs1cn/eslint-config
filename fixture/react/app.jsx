import React from 'react';
import { useEffect } from 'react/cjs/react.production.min';

export default function App() {
  const [ count, setCount ] = React.useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    });
  }, [ count ]);

  return (
    <div className="a">
      <h1>Hello World</h1>
      <p>{ count }</p>
      <img src="" alt="" />
    </div>
  );
}
