import { useLoaderData } from "react-router-dom"
import { Link, Form } from "react-router-dom"

const Index = (props) => {
    const cheeses = useLoaderData()

    return (<>
    <div className="create-cheese-form">
        <Form action="/create" method="POST">
            <input type="input" name="name" placeholder="enter cheese name"/>
            <input type="input" name="countryOfOrigin" placeholder="enter its country of origin"/>
            <input type="input" name="image" placeholder="enter its image url"/>

            <input type="submit" value="create cheese"/>
        </Form>
    </div>
    
    <div className="cheeses-container">
        {cheeses.map(cheese => (
            <Link to={cheese._id} key={cheese._id}>
                <h2>{cheese.name}</h2>
            </Link>
        ))}
    </div>
    </>)
}

export default Index