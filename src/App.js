import "./index.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-[100vh] gap-5  flex justify-center items-center flex-col">
          <h1 className="roboto-bold text-green-500  lg:text-4xl text-2xl">
            Printify
          </h1>
          <div class="three-body">
            <div class="three-body__dot"></div>
            <div class="three-body__dot"></div>
            <div class="three-body__dot"></div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
