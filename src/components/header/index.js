import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<Link href="/" class={style.logo}>
			<img src="../../assets/logo.svg" alt="Phone Logo" height="32" width="32" />
			<h1>Phone Store</h1>
		</Link>
	</header>
);

export default Header;
