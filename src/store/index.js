import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		curentvalue: 1,
		curentTime: 1,
		backetData: [],
		gabarit: null,
		weight: null,
		gabarits: {
			height: null,
			width: null,
			depth: null
		}
	},
	getters: {
		presoptionState(state){
			return state.curentvalue; // переключатель докумет или груз
		},
		dateStatePosition(state){
			return state.curentTime; // переключатель времени в дате отправки
		},
		backetDataState(state){
			return state.backetData; // корзина
		},
	},
	mutations: {
		//  регулятор груз или документы
		presoption (state, param) {
			state.curentvalue = param
			console.log(state.curentvalue, param)
		},
		//  регулятор груз или документы
		dateState (state, param) {
			state.curentTime = param
			console.log(state.curentTime, param)
		},
		// добавление посылки в корзину
		backetDataArr (state, gabarit) {
			console.log(gabarit)
			state.backetData.push({
				title: this.state.curentvalue,
				parametr: gabarit.weightel + ' кг.',
				gabarit: gabarit.gabarit
			})
		},
		// удаление посылки из корзины
		deletepost (state,index) {
			state.backetData.splice(index, 1)
		},
		// изменить позицию товара ( вызывается из корзины )
		editpost(state, index) {
			console.log(index)
			let typePost = state.backetData[index].title
			state.curentvalue = typePost
		}
	},
	actions: {
		
	}
});