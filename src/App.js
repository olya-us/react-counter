import { useState } from 'react';

import './index.scss';

function App() {

  const[count, setCount] = useState(0);

  const onClickPluse = () => {
    setCount(count + 1)
  };

  const onClickMinus = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPluse} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
