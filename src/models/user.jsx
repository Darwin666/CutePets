import service from '../services';

export default {
    namespace: 'user',

    state: {
        login: false,
        userData: {
            name: "",
            email: "",
            phone: ""
        }
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
        save(state, action) {
        return { ...state, ...action.payload };
        },
    },

}