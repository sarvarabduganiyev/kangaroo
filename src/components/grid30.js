function Grid30({ toggle }) {
    return (
        <div style={toggle ? { left: "0px" } : { left: "-100%" }} className="grid30">
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="grid30__h1 mb-52">INCREDIBLE</h1>
                <ul className="mt-8 button__div space-y-4 fixed">
                    <li><a className="links hover:underline links__active" href="#">HOME</a></li>
                    <li><a className="links hover:underline" href="#">ABOUT</a></li>
                    <li><a className="links hover:underline" href="#">GALLERY</a></li>
                    <li><a className="links hover:underline" href="#">CONTACT</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Grid30;
