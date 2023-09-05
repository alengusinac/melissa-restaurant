import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="innerMain">
      <h1>404 No Page Found</h1>
      <Link to="/">Back home </Link>
    </div>
  );
};

export default NotFound;
