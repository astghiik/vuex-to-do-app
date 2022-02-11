import Vuex from 'vuex';
import toDos from './modules/to-dos';

// Create store
export default new Vuex.Store({
    modules: {
        toDos
    }
})
