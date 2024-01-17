import Main from "./layouts/Main/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./components/theme/theme-provider";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { setLoading, setUser } from "./redux/features/auth/authSlice";
import { useAppDispatch } from "./redux/hooks";

function App() {
  //Handle user persistency
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email === null || user?.email) {
        dispatch(setUser(user));
      }
      dispatch(setLoading(false));
    });
    return () => unsubscribe();
  }, []);

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
