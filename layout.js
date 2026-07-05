document.getElementById("header-container").innerHTML = `
<header id="header">
    <div class="inner">
    <nav> 
        <ul>
        <li><a href="#menu">Menu</a></li>
        </ul>
    </nav>
</header>
`;

document.getElementById("menu-container").innerHTML = `
<nav id="menu">
	<h2>Menu</h2>
	<ul>
		<li><a href="index.html">Home</a></li>
		<li><a href="featured-projects.html">Featured Projects (BIGA)</a></li>
		<li><a href="additional-projects.html">Additional Projects (BIGA)</a></li>
        <li><a href="personal-projects.html">Personal Projects</a></li>	
	</ul>
</nav>
`;

document.getElementById("footer").innerHTML = `
<div class="inner">
	<ul class="copyright">
		<li>&copy; 2026 Steven Tan</li>
	</ul>
	<ul class="icons">
		<li><a href="https://www.linkedin.com/in/steventan-nz/" class="icon brands style2 fa-linkedin"><span class="label">LinkedIn</span></a></li>
		<li><a href="https://steventan.itch.io/" class="icon brands style2 fa-itch-io"><span class="label">Itch.io</span></a></li>
		<li><a href="mailto:tan2001steven@hotmail.com" class="icon solid style2 fa-envelope"><span class="label">Email</span></a></li>
	</ul>
</div>
`;