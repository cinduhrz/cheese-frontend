import { useLoaderData } from "react-router-dom"

const Show = (props) => {
    const cheese = useLoaderData()
    console.log(cheese)

    return (<>
        <div className="cheese-container">
            <h2>{cheese.name}</h2>
            <p>Country of origin: {cheese.countryOfOrigin}</p>
            <img className="cheese-image" src={cheese.image} alt={cheese.name}/>
        </div>
    </>)
}

export default Show