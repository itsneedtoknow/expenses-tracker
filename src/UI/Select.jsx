export function Select({
  defaultText,
  onChange,
  value,
  options,
  isObject = false,
  className,
  id,
}) {
  return (
    <select className={className} value={value} onChange={onChange} id={id}>
      <option value={""}>{defaultText}</option>
      {isObject
        ? Object.entries(options).map((item) => {
            return (
              <option key={item[0]} value={item[0]}>
                {item[1]}
              </option>
            );
          })
        : options.map((item) => {
            return <option value={item.id}>{item.label}</option>;
          })}
    </select>
  );
}
