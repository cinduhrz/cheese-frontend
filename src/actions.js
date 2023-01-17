import { redirect } from "react-router-dom";

const URL = "https://cheese-backend-74o5.onrender.com"

export const createAction = async ({ request }) => {
    // get data from form
    const formData = await request.formData()
    // setup new cheese to match schema
    const newCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image")
    }

    // send new cheese to our API
    // to do that, use fetch to hit the post route
    await fetch(URL + '/cheeses', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCheese)
    })

    // redirect to index
    return redirect("/cheeses")
}