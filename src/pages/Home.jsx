import Header from "../components/Header.jsx";
import fetchData from "../api/fetchData.js";

function Home() {
    return (
        <Header title="Home" onClick={fetchData()}/>
    )
}

export default Home
