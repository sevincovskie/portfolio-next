import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvayder from "@/components/transitionProvayder";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sevinc Portfolio App",
  description: "The best animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvayder>{children}</TransitionProvayder>
      </body>
    </html>
  );
}
