import React from "react";
import styles from "../styles/Nav.module.css";
const Nav = () => {
	return (
		<div className={styles.navbar}>
			<header className={styles.header}>
				<h2>Cedric Wang</h2>
			</header>
			<nav className={styles.nav}>
				<ul className={styles.linklist}>
					<li className={styles.linkbtn}>Projects</li>
					<li className={styles.linkbtn}>Resume</li>
					<li className={styles.linkbtn}>Contact</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
