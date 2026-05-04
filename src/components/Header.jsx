import formatText from "../helpers/formatText.js";

function Header({title})  {
    return <h1>{formatText(title)}</h1>
}

export default Header;