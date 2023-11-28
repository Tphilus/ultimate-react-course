import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div>
      <div className={styles.app}>
        <Sidebar />
        <Map />
      </div>
    </div>
  );
}
