import React from "react";
import styles from "../styles/Landing.module.css";

const Landing = () => {
	return (
		<div className={styles.landing}>
			<div className={styles.landing_left}>
				<div className={styles.textblock}>
					<span className={styles.linesep}></span>
					<h1 className={styles.helloh1}>Hello,</h1>
					<h3 className={styles.regtexth3}>My name is</h3>
					<h1 className={styles.nameh1}>Cedric Wang</h1>
					<h3 className={styles.regtexth3}>I am a </h3>
					<h1 className={styles.jobtitle}>Software Engineer</h1>
				</div>
			</div>
			<div className={styles.landing_right}>
				<div className={styles.blocks_container}>
					<div className={styles.yellow_blocks}></div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
