const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Innocent blog</h1>
            <div className="links">
                <a href="/home" className="home">home</a>
{/*when we are styling in linily the style is written in an object from as shown bellow*/}
                <a href="/create" style={{
                   color:"white",
                   backgroundColor:" rgb(230, 55, 55)",
                   borderRadius:"8px"
                }} className='new-blog'>new-blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;// rember to put this syntax default