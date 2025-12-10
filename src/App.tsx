import { Toaster } from "sonner";
import "./App.css";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Footer } from "./layout/Footer";

function App() { 

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Toaster position="top-center" richColors />
     
    </>
  );
}

export default App;
