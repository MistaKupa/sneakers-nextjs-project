export default function ProfileInformationInput({
  inputName,
  inputType,
  type,
  placeHolder,
  value,
  onChange,
}) {
  return (
    <>
      {inputType === "select" ? (
        <div className="relative w-72 h-12">
          <select
            name={inputName}
            type={type}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
            className="w-72 h-12 border border-dark-300 rounded-md p-2 outline-newPrimary"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unspecified">Unspecified</option>
          </select>
        </div>
      ) : (
        <div className="relative w-72 h-12">
          <input
            name={inputName}
            type={type}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
            className="w-72 h-12 border border-dark-300 rounded-md p-3 outline-newPrimary"
          />
        </div>
      )}
    </>
  );
}
