import Grid30 from "./grid30";
import Grid70 from "./Grid70";
import { useState } from "react";

function Header() {
    const [toggle, setToggle] = useState(false);

    const onToggle = () => {
        setToggle(!toggle);

    }

    return (
        <div className="grid__header min-h-screen">
            <Grid30 toggle={toggle} />
            <Grid70 toggle={toggle} setToggle={setToggle} onToggle={onToggle} />
        </div>
    );
}

export default Header;
