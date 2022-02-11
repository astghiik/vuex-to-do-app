import axios from 'axios';

const state = {
    toDos: [],
    doneIds: []
};

const getters = {
    allToDos: state => state.toDos,
    done: state => state.doneIds
};

const actions = {
    async fetchToDos({ commit }) {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setToDos', res.data);
    },

    addToDone({ commit }, id) {
        commit('addIdToDone', id);
    },

    removeFromDone({ commit }, id) {
        commit('removeIdFromDone', id);
    },

    async postToDo({ commit }, title) {
        const res= await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        });
        commit('addNewToDo', res.data);
    }
};

const mutations = {
    setToDos: (state, toDos) => state.toDos = toDos,
    addIdToDone: (state, id) => state.doneIds.push(id),
    removeIdFromDone: (state, id) => state.doneIds.splice(state.doneIds.indexOf(id), 1),
    addNewToDo: (state, toDo) => state.toDos.unshift(toDo)
};

export default {
    state,
    getters,
    actions,
    mutations
};
