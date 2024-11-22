import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      Error Occured ... Go to home <Link to={"/"}>HOME</Link>{" "}
    </div>
  );
};

export default ErrorPage;
