import service from '../services';
import {deepClone} from '../utils';

export default {
    namespace: 'main',

    state: {
        currentTab: "",
        login: false,
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
        },
    },

    reducers: {
        saveCurrentTab(state, {type, data}) {
            let cloneState = deepClone(state);
            cloneState.currentTab = data
            return cloneState;
        },

        saveLogin(state, {type, data}) {
            let cloneState = deepClone(state);
            cloneState.login = data
            return cloneState;
        }
    },

}