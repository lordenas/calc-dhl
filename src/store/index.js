import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let newdata =  new Date()
export const store = new Vuex.Store({
	state: {
		curentvalue: 1,
		curentTime: 1,
		backetData: [],
		selectedDate: (newdata.getDate()<10? '0':'') + newdata.getDate() + '.' +   ((newdata.getMonth()+1)<10? '0':'') + (newdata.getMonth()+1) + '.'+ newdata.getUTCFullYear() ,
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
			return state.curentTime; // переключатель времени 
		},
		dateCalenStatePosition(state){
			return state.selectedDate.getUTCFullYear() + ' - ' + state.selectedDate.getUTCFullYear() ; // выбор даты 
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
		//  регулятор времени
		dateState (state, param) {
			state.curentTime = param
			console.log(state.curentTime, param)
		},
		//  регулятор даты
		calendarState (state, param) {
			state.selectedDate = (param.getDate()<10? '0':'') + param.getDate() + '.' +   ((param.getMonth()+1)<10? '0':'') + (param.getMonth()+1) + '.'+ param.getUTCFullYear() 
			//console.log(state.selectedDate, param.getUTCFullYear())
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
		},
		// выбор города отправки
		toCitysending(state, citiSet) {
			console.log(citiSet)
		}
	},
	actions: {
		
	}
});