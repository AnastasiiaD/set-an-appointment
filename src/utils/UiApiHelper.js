import axios from "axios";
import { API, ROUTES } from "./../constants";

class UiApiHelper {
    constructor() {
        axios.interceptors.response.use(
            response => Promise.resolve(response),
            error => {
                if (error.response.status === 401) {
                    console.log(error.response);
                    window.location.replace(ROUTES.SIGNIN);
                    return Promise.reject({}); //todo probably we do not need to throw any actions whan got empty promise reject "if (empty) return" --- in actions
                }
                return Promise.reject(error);
            }
        );
    }

    testWebPage = url => axios.post(API.TEST_URL(), { url });
    saveWebPage = url => axios.post(API.ADD_URL(), { url });

    registerUser = (
        firstName, lastName, company, email, password
    ) => axios.post(API.REGISTER_USER(), { firstName, lastName, company, email, password });
    loginUser = ( email, password ) => axios.post(API.LOGIN_USER(), { email, password });
    logoutUser = () => axios.post(API.LOGOUT_USER());

    getListOfUrls = () => axios.get(API.GET_LIST());
    deleteUrlById = id => axios.delete(API.DELETE_URL(id));

    getWords = () => axios.get(API.GET_WORDS());
    addWord = word => axios.post(API.ADD_WORD(), { word });
    removeWord = id => axios.delete(API.DELETE_WORD(id));

    openUrlInNewTab = url => window.open(url, "_blank");
    checkToken = () => axios.get(API.CHECK_TOKEN());
};

export default new UiApiHelper();