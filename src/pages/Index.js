import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"

const Index = (props) => {
    const cheeses = useLoaderData()

    return (<>
    
    <div className="cheeses-container">
        {cheeses.map(cheese => (
            <Link to={cheese._id}>
                <h2>{cheese.name}</h2>
            </Link>
            
        ))}
    </div>
    </>)
}

export default Index