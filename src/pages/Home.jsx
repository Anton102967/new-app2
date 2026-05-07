import {ProductCard} from "../components/Test.jsx";

function Home() {
    const products = [
      { id: 1, name: 'Апельсины', price: 45 },
      { id: 2, name: 'Яблоки', price: 60 },
      { id: 3, name: 'Бананы', price: 80 },
      { id: 4, name: 'Груши', price: 95 },
    ];
    return(
        <>
            {products.map(el => (
                <ProductCard name={el.name} price={el.price} key={el.id} />
            ))}
        </>
    )
}

export default Home
