export default function Calculator({ body, setBody, setIsCalculating }) {
  function handleCalculate() {
    // for instant calculation
    // setBody({
    //   ...body,
    //   healthyWeight: [
    //     ((body.h / 100) ** 2 * 18.5).toFixed(1),
    //     ((body.h / 100) ** 2 * 25).toFixed(1),
    //   ],
    // });

    setIsCalculating(true);
  }
  return (
    <>
      <label>
        Height:{" "}
        <input
          value={body.h}
          onChange={(e) =>
            setBody({
              ...body,
              h: e.target.value,
            })
          }
          type="number"
          min={1}
          className="input focus:outline-none"
          placeholder="Enter height"
        />{" "}
        cm
      </label>

      <label>
        Weight:{" "}
        <input
          value={body.w}
          onChange={(e) =>
            setBody({
              ...body,
              w: e.target.value,
            })
          }
          type="number"
          min={1}
          className="input focus:outline-none"
          placeholder="Enter weight"
        />{" "}
        kg
      </label>
      <button className="px-5 py-2 rounded-xl border" onClick={handleCalculate}>
        Calculate
      </button>
    </>
  );
}
