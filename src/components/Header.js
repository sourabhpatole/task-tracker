import Button from "./Button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add Data" onClick={onClick} />
    </header>
  );
};
Header.defaultProps = {
  title: "Info Data",
};
export default Header;
