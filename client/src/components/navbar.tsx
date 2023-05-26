const Navbar = () => {

    function testing() {
        console.log("hello");
    }


    return (
        <div className="navbar pos-fixed">
            <div className="light-dark-switch pointer" onClick={testing}></div>


        </div>
    );
}
 
export default Navbar;