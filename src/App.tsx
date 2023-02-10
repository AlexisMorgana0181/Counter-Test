import { FC, useState } from "react";
import cls from 'classnames';

import Button from "./components/CounterButton";
import './App.scss'


const App: FC<{}> = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="mainContainer">
      <h1 className={cls(
        "color", { "negativeColor": count < 0, "positiveColor": count })}>
          {count}
      </h1>
      <div className="btnContainer">
        <Button text="-" onChange={() => setCount(prevValue => prevValue - 1)} />
        <Button text="+" onChange={() => setCount(prevValue => prevValue + 1)} />
      </div>
    </div>
  );
}

export default App;
