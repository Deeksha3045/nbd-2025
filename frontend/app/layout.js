import { Poppins } from "next/font/google";
import "./globals.css";

// Import Poppins with desired options
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
  variable: "--font-poppins",
});

export const metadata = {
  title: "Noseberry",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} --font-poppins`}>
        {children}
      </body>
    </html>
  );
}
