import Main from "./layouts/Main/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
  return (
    <div className="">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ToastContainer></ToastContainer>
        <Main></Main>
      </ThemeProvider>
    </div>
  );
}

export default App;
