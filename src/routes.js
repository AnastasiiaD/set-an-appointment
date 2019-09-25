import {ServiceProvider, Signin, Signup, Home} from "./route";
import {ROUTES} from "./constants";

const routes = [
    {
        path: ROUTES.SERVICE_PROVIDER,
        exact: true,
        component: ServiceProvider,
        isPrivatePath: false,
    }, {
        path: ROUTES.SIGNIN,
        exact: true,
        component: Signin,
        isPrivatePath: false,
    }, {
        path: ROUTES.SIGNUP,
        exact: true,
        component: Signup,
        isPrivatePath: false,
    }, {
        path: ROUTES.HOME,
        exact: true,
        component: Home,
        isPrivatePath: false,
    }
];

export default routes;