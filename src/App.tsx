import Main from "./layouts/Main/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ToastContainer></ToastContainer>
      <Main></Main>
    </div>
  );
}

export default App;
