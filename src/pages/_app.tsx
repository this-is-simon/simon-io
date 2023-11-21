import "../app.css";
import { Poppins } from "@next/font/google";

const fonts = Poppins({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={fonts.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
