import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops! An error occurred</h1>
      <img src="/images/404.svg" alt="404 Error" className="error-image" />
      {error && <p className="error-message">{error.data}</p>}
      <NavLink to="/">
        <button className="home-button">Go Home</button>
      </NavLink>
    </div>
  );
};
