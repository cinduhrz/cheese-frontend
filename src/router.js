// Import Dependencies
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'
import App from './App'

// Create router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>

        </Route>
    )
)

// Export router
export default router