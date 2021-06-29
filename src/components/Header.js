import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ tittle, onAdd }) => {
  return (
    <header className="header">
      <h1>{tittle}</h1>
      <Button color="green" text="Add" onClick={onAdd} />
    </header>
  );
};

// const headingStyle = { color: "red", backgroundColor: "black" };

Header.defaultProps = {
  tittle: "Task Tracker",
};

Header.propTypes = {
  tittle: PropTypes.string.isRequired,
};

export default Header;
