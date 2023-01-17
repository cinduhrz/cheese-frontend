// Import Dependencies
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'
import App from './App'
import Index from './pages/Index'
import Show from './pages/Show'

// Create router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="cheeses" element={<Index/>}/>
            <Route path="cheeses/:id" element={<Show/>}/>
            {/* <Route path="create" action={}/>
            <Route path="update/:id" action={}/>
            <Route path="delete/:id" action={}/> */}
        </Route>
    )
)

// Export router
export default router