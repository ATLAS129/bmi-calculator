import { useState, useMemo } from "react";
import Bmi from "./components/Bmi";
import Calculator from "./components/Calculator";

export default function App() {
  const [isCalculating, setIsCalculating] = useState(false);
  const [body, setBody] = useState({
    h: "",
    w: "",
    healthyWeight: [],
  });
  const BMI = useMemo(() => {
    setBody({
      ...body,
      healthyWeight: [
        ((body.h / 100) ** 2 * 18.5).toFixed(1),
        ((body.h / 100) ** 2 * 25).toFixed(1),
      ],
    });
    setIsCalculating(false);
    let bmi = (body.w / (body.h / 100) ** 2).toFixed(1);
    return [bmi > 0 ? bmi : "", bmi >= 18.5 && bmi <= 25];
  }, [isCalculating]);

  // for instant calculation (Calculator.jsx has comments too)
  // const BMI = [
  //   (body.w / (body.h / 100) ** 2).toFixed(1) > 0
  //     ? (body.w / (body.h / 100) ** 2).toFixed(1)
  //     : "",
  //   (body.w / (body.h / 100) ** 2).toFixed(1) >= 18.5 &&
  //     (body.w / (body.h / 100) ** 2).toFixed(1) <= 25,
  // ];

  return (
    <>
      <div className="w-[50vw] h-[50vh] mx-auto text-center">
        <h1 className="text-3xl border-2">BMI Calculator</h1>
        <div className="h-full flex justify-between items-center mx-auto *:border-2">
          <div className="w-1/2 h-full flex justify-center items-center flex-col gap-y-5 p-2 ">
            <Calculator
              body={body}
              setBody={setBody}
              setIsCalculating={setIsCalculating}
            />
          </div>
          <div className="flex flex-col w-1/2 h-full p-2 justify-between">
            <Bmi BMI={BMI} body={body} />
          </div>
        </div>
      </div>
    </>
  );
}
