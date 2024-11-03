export default function Bmi({ BMI, body, healthyW }) {
  return (
    <>
      <h1 className="text-xl">Your result:</h1>
      <h1
        className={
          "text-5xl text-center" +
          (BMI > 0
            ? BMI < 18.5
              ? " text-cyan-500"
              : BMI > 25
              ? " text-red-500"
              : " text-green-500"
            : "")
        }
      >
        BMI = {BMI}
        {BMI > 0 && (
          <p
            className={
              BMI < 18.5
                ? "text-cyan-500"
                : BMI > 25
                ? "text-red-500"
                : "text-green-500"
            }
          >
            {BMI < 18.5
              ? "Underweight"
              : BMI > 25
              ? "Overweight"
              : "Healthy weight"}
          </p>
        )}
      </h1>
      <div>
        <p>Healthy BMI range: 18.5 kg/m2 - 25 kg/m2</p>
        <p>
          Healthy weight for the height: {healthyW[0]} kg - {healthyW[1]} kg
        </p>
      </div>
    </>
  );
}
