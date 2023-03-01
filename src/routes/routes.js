import App from "../App";
import AgainstClub from "../pages/AgainstClub";
import Home from "../pages/Home";
import MyClub from "../pages/MyClub";

const routes = [
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path: "",
                element: <Home/>
            }
            ,
            {
                path: "myclub",
                element: <MyClub/>
            },
            {
                path: "againstclub",
                element: <AgainstClub/>
            }
        ]
    }
]

export default routes