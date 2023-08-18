export const Card = (props) => {
  const classes = "card" + props.className;
  return <div>{props.children}</div>;
};
