import "./styles.scss";

const Button = () => {
  const onClick = () => {
    alert("Clicked");
  };

  return <button onClick={onClick}>Search</button>;
};

export default Button;
