import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(10);

  const increment = () => {
    setCount((prev) => prev + 3);
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="w-[320px] flex flex-col mx-auto border bg border-black text-center p-3  ">
      {" "}
      <h1 className="text-3xl font-bold mb-5 ">counter: {count}</h1>
      <div className="space-x-2">
        <button
          className="px-4 py-2 bg-green-700 text-white  rounded-lg mb-5"
          onClick={decrement}
        >
          decrement
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white  rounded-lg"
          onClick={reset}
        >
          reset
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white  rounded-lg"
          onClick={increment}
        >
          increment
        </button>
      </div>
    </div>
  );
};

export default App;
