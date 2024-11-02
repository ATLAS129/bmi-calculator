export default function Bmi({ BMI, body }) {
  return (
    <>
      <h1 className="text-xl">Your result:</h1>
      <h1
        className={
          "text-5xl text-center" +
          (BMI[0] > 0 ? (BMI[1] ? " text-green-500" : " text-red-500") : "")
        }
      >
        BMI = {BMI[0]}
      </h1>
      <div>
        <p>Healthy BMI range: 18.5 kg/m2 - 25 kg/m2</p>
        <p>
          Healthy weight for the height: {body.healthyWeight[0]} kg -{" "}
          {body.healthyWeight[1]} kg
        </p>
      </div>
    </>
  );
}
