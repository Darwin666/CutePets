import service from '../services';
import {deepClone} from '../utils';

export default {
    namespace: 'main',

    state: {
        currentTab: "",
        loginFlag: false,
        signUpVisible: false,
        signInVisible: false,
    },

    reducers: {
        saveCurrentTab(state, {type, data}) {
            let cloneState = deepClone(state);
            cloneState.currentTab = data
            return cloneState;
        },

        saveLoginFlag(state, {type, data}) {
            let cloneState = deepClone(state);
            cloneState.loginFlag = data
            return cloneState;
        },

        saveSignUpVisible(state, {type, data}) {
            let cloneState = deepClone(state);
            cloneState.signUpVisible = data
            return cloneState;
        },

        saveSignInVisible(state, {type, data}) {
            let cloneState = deepClone(state);
            cloneState.signInVisible = data
            return cloneState;
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
        },
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

}