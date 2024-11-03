import { useState, useMemo } from "react";
import Bmi from "./components/Bmi";
import Calculator from "./components/Calculator";

export default function App() {
  const [body, setBody] = useState({
    h: "",
    w: "",
  });

  const healthyW = useMemo(() => {
    return body.h > 0
      ? [
          ((body.h / 100) ** 2 * 18.5).toFixed(1),
          ((body.h / 100) ** 2 * 25).toFixed(1),
        ]
      : [];
  }, [body.h]);

  const BMI =
    body.h > 0 && body.w > 0 && (body.w / (body.h / 100) ** 2).toFixed(1) > 0
      ? (body.w / (body.h / 100) ** 2).toFixed(1)
      : "";

  return (
    <>
      <div className="w-full h-[50vh] mx-auto text-center flex-col lg:flex-row lg:w-[50vw]">
        <h1 className="w-full text-3xl border-2">BMI Calculator</h1>
        <div className="h-full flex flex-col lg:flex-row *:border-2 *:w-full">
          <div className="w-1/2 h-full flex justify-center items-center flex-col gap-y-5 p-2 ">
            <Calculator body={body} setBody={setBody} />
          </div>
          <div className="flex flex-col w-1/2 h-full p-2 justify-between">
            <Bmi BMI={BMI} body={body} healthyW={healthyW} />
          </div>
        </div>
      </div>
    </>
  );
}
