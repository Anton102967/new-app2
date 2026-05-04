import UserInfo from "../components/UserInfo.jsx";
import Wrapper from "../components/Wrapper.jsx";

function Home() {
    return (
        <Wrapper>
            <UserInfo name={'Олег'} city={'Нижневартовск'} />
        </Wrapper>
    )
}

export default Home
