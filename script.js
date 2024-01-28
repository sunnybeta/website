function changeZIndex(current) {
	const sections = ["about", "techstack", "portfolio", "contact", "experience"]
	sections.forEach(section => document.getElementById(section).style.zIndex = 0)
	document.getElementById(current).style.zIndex = 99;
}
