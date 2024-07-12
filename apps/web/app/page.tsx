import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Button>Hello world</Button>
      <button className="bg-slate-700 text-white">normal button</button>
      <h1 className="bg-slate-700 text-white">normal button</h1>
    </div>
  );
}
