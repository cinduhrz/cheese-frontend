const URL = "https://cheese-backend-74o5.onrender.com"

export const cheesesLoader = async () => {
    const response = await fetch(URL + "/cheeses")
    const cheeses = await response.json()
    return cheeses
}