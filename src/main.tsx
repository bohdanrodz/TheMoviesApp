import {createRoot} from 'react-dom/client'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider} from "react-router";
import {routes} from "./router/router.tsx";

createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>)
