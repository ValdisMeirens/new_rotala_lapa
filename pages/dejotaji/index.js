import DancersHeader from "@/components/dancers/dancers_header";
import DancersContainer from "@/components/dancers/dancers_container";

import styles from "./dancers.module.css";
import Footer from "@/components/footer/footer";
import { server } from "@/components/config/constants";

export default function Dancers({ data }) {
  return (
    <div className={styles.container}>
      <DancersHeader />
      <DancersContainer dancers={data} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/dancers`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
