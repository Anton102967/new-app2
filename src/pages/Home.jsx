import Header from "../components/Header.jsx";
import fetchData from "../api/fetchData.js";

function Home() {
    fetchData();
    return (
        <Header title="Home" />
    )
}

export default Home
