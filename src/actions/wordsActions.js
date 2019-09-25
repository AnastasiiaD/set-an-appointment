import apiHelper from "../utils/UiApiHelper";

export const Types = {
    START_LOADING: "START_LOADING",
    STOP_LOADING: "STOP_LOADING",

    ADD_WORD: "ADD_WORD",
    SUCCESS_ADD_WORD: "SUCCESS_ADD_WORD",
    SUCCESS_REMOVE_WORD: "SUCCESS_REMOVE_WORD",

    SUCCESS_GET_WORDS: "SUCCESS_GET_WORDS",

    FAIL_NOTIFICATION: "FAIL_NOTIFICATION",
    DONE_NOTIFICATION: "DONE_NOTIFICATION",
};

export const startLoading = () => ({
    type: Types.START_LOADING,
});

export const stopLoading = () => ({
    type: Types.STOP_LOADING,
});


export const successGetWords = words => ({
    type: Types.SUCCESS_GET_WORDS,
    words,
});

export const successAddWords = word => ({
    type: Types.SUCCESS_ADD_WORD,
    word
});

export const successRemoveWord = id => ({
    type: Types.SUCCESS_REMOVE_WORD,
    id
});

export const doneNotification = msg => ({
    type: Types.DONE_NOTIFICATION,
    msg
});

export const failNotification = msg => ({
    type: Types.FAIL_NOTIFICATION,
    msg
});

export const getWords = () => async dispatch => {
    dispatch(startLoading());
    try {
        const { data } = await apiHelper.getWords();
        dispatch(successGetWords(data.words));
    } catch (err) {
        dispatch(failNotification("Please try again!"));
        dispatch(stopLoading());
    }
};

export const addWord = word => async dispatch => {
    dispatch(startLoading());
    try {
        const { data } = await apiHelper.addWord(word);
        dispatch(successAddWords(data));
        dispatch(doneNotification("Word successfully added!"));
    } catch (err) {
        dispatch(failNotification("You already have this word in list!"));
        dispatch(stopLoading());
    }
};

export const removeWord = id => async dispatch => {
    dispatch(startLoading());
    try {
        const { data } = await apiHelper.removeWord(id);
        dispatch(successRemoveWord(id));
        dispatch(doneNotification(data.msg));
    } catch (err) {
        dispatch(failNotification(`Not found word with id: ${id}!`));
        dispatch(stopLoading());
    }
};