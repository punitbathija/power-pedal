import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
  <Header/>
  <h1>Power Pedal</h1>;
</>}
