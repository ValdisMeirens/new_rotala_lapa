import styles from "./managment.module.css";
import Footer from "@/components/footer/footer";
import ManagmentContainer from "@/components/managment/managment_container";
import ManagmentHeader from "@/components/managment/managment_header";

export default function Managment() {
  return (
    <div className={styles.container}>
      <ManagmentHeader />
      <ManagmentContainer />
      <Footer />
    </div>
  );
}
