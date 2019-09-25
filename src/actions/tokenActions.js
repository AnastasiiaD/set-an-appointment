import apiHelper from "../utils/UiApiHelper";

export const Types = {
    SET_WHETHER_IS_VALID: "SET_WHETHER_IS_VALID",
    SET_WHETHER_IS_CHECKED: "SET_WHETHER_IS_CHECKED",
};

export const isTokenValid = isValid => ({
    type: Types.SET_WHETHER_IS_VALID,
    isValid
});


export const setWhetherIsValid = () => async dispatch => {
    try {
        dispatch(setWhetherIsChecked(true));
        const data = await apiHelper.checkToken();
        if (data.status = 200) {
            dispatch(isTokenValid(true));
        } else {
            dispatch(isTokenValid(false));
        }

    } catch {
        isTokenValid(false);
    }
};

export const setWhetherIsChecked = isChecked => ({
    type: Types.SET_WHETHER_IS_CHECKED,
    isChecked,
});