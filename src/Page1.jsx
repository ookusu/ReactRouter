import { Link } from "react-router-dom";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1 Page</h1>
      <Link to="/Page1DetailA">DetailA</Link>
      <Link to="/Page1DetailB">DetailB</Link>
    </div>
  );
};
