export const Input = (props) => {
  return (
    <div>
      <input
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        className={props.className}
        type={props.text}
      />
    </div>
  );
};
