import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
        curentvalue: 1
	},
	getters: {
		presoptionState(state){
			return state.curentvalue;
		},
	},
	mutations: {
		presoption (state, param) {
			state.curentvalue = param
			
			console.log(state.curentvalue, param)
		},
	},
	actions: {
		
	}
});