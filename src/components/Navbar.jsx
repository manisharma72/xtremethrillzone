import React, { useState } from "react";


const Navbar = () => {
const [open, setOpen] = useState(false);


return (
<header className="navbar">
<div className="container nav-inner">
<a href="/" className="brand" aria-label="Xtremethrillzone home">
<img src="/Logo.svg" alt="Xtremethrillzone" onError={(e)=>{e.currentTarget.style.display='none';}}/>
<span>Xtremethrillzone</span>
</a>
<nav className={`nav-links ${open ? "open" : ""}`} onClick={()=>setOpen(false)}>
<a href="#home">Home</a>
<a href="#activities">Activities</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>
<a className="btn primary sm" href="tel:+91 8979857450">Call Now</a>
</nav>
<button className={`burger ${open ? "active" : ""}`} onClick={()=>setOpen(!open)} aria-label="Menu">
<span></span><span></span><span></span>
</button>
</div>
</header>
);
};


export default Navbar;