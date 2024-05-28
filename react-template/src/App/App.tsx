// start of file
import { RouterProvider } from "react-router-dom";
import { router } from "routers/routes";
import Providers from "providers";
import "./resetCSS.css";

/**
 * Aplicação principal
 * @author @cpqd
 * @returns {JSX.Element}
 */
const App = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};

export default App;
