export default function Calculator({ body, setBody }) {
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
    </>
  );
}
