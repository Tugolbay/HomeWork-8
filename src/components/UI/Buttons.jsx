export const Buttons = (props) => {
  return (
    <div>
      <button onClick={props.onClick} className={props.className}>
        {props.children}
      </button>
    </div>
  );
};
