import { Outlet } from "react-router-dom";
import Menu from "./routes/Menu";
import Footer from "./components/Rodape/Footer";
import styles from "./App.module.css";

export default function App() {

  return (
    <div className={styles.container}>
      <Menu/>
      <Outlet />
      <Footer/>
    </div>
  );
}


