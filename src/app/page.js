import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>End Point Demo</h1>
      <p>
        <Link href='/demo-cors'>Cors Demo</Link>
      </p>
      <p>
        <Link href='/demo-no-cors'>No Cors Demo</Link>
      </p>
    </div>
  );
}
