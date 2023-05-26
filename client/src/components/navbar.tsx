interface NavBarProps {
    onChangeDisplayMode: () => void;
}

const Navbar = ({ onChangeDisplayMode }: NavBarProps) => {

    return (
        <div className="navbar pos-fixed">
            <div className="light-dark-switch pointer" onClick={onChangeDisplayMode}></div>


        </div>
    );
}
 
export default Navbar;