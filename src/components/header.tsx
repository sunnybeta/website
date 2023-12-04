import '../styles/header.css'

export default function Header() {
	return (
		<header>
			<h2>SUNNY BÉTA</h2>
			<nav className='navbar'>
				<ul>
					<li><a href='#'>ABOUT</a></li>
					<li><a href='#'>PORTFOLIO</a></li>
					<li><a href='#'>TECH STACK</a></li>
					<li><a href='#'>EXPERIENCE</a></li>
					<li><a href='#'>CONTACT</a></li>
				</ul>
			</nav>
		</header>
	);
}
