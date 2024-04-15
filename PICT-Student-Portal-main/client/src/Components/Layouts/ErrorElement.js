import { useContext } from "react";
import { useRouteError } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import UserContext from "../../Hooks/UserContext";

const ErrorElement = () => {
  const { user } = useContext(UserContext);
  const error = useRouteError();

  return (
    <div className="relative flex flex-col bg-slate-950">
      {user && <Header />}
      <main className="mt-[3.15rem] flex h-[calc(100vh-3.15rem)] whitespace-nowrap bg-slate-950 light:bg-gradient-to-b light:from-slate-950 light:to-lightblue-950/60">
        {user && <Nav />}
        <div className="outlet-border z-[1] mt-1 w-full overflow-y-auto bg-slate-50 p-4 text-slate-900 light:bg-gradient-to-t light:from-slate-950 light:from-75% light:to-[#200c45] light:text-slate-400 lg:p-10">
          <h2 className="text-6xl font-bold text-lightblue-950 light:text-slate-400">
            Oops!
          </h2>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </main>
    </div>
  );
};

export default ErrorElement;
