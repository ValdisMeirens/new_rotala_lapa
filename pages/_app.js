import "@/styles/globals.css";
import { Alegreya, Exo, Lato, Poppins, Raleway } from "next/font/google";

const roboto = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
    // <Component {...pageProps} />
  );
}
