import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Landing from "../components/Landing";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Cedric Wang</title>
				<meta
					name="description"
					content="Zongqi Cedric Wang's Portfolio Website"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Landing></Landing>
		</div>
	);
}
