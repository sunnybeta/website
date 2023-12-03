import '../styles/header.css'

export default function Header() {
	return (
		<header>
			<div className='title'>
				<img src='/coding.gif'></img>
				<h2>Sunny Beta</h2>
			</div>
			<nav className='navbar'>
				<ul>
					<li><a href='#'>ABOUT</a></li>
					<li><a href='#'>GITHUB</a></li>
					<li><a href='#'>PORTFOLIO</a></li>
					<li><a href='#'>TECH STACK</a></li>
					<li><a href='#'>EXPERIENCE</a></li>
					<li><a href='#'>CONTACT</a></li>
				</ul>
			</nav>
		</header>
	);
}
