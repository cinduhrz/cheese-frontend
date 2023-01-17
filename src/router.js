// Import Dependencies
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'
import App from './App'
import Index from './pages/Index'
import Show from './pages/Show'
import { cheesesLoader } from './loaders'
import { cheeseLoader } from './loaders'
import { createAction } from './actions'

// Create router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route 
                path="cheeses"
                loader={cheesesLoader}
                element={<Index/>}/>
            <Route
                path="cheeses/:id"
                loader={cheeseLoader}
                element={<Show/>}/>
            <Route path="create" action={createAction}/>
            {/* <Route path="update/:id" action={}/>
            <Route path="delete/:id" action={}/> */}
        </Route>
    )
)

// Export router
export default router