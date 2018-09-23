import Vue from 'vue';
import Vuex from 'vuex';
const tarifzone = require('../json/tarifzone.json')
const pricelist = require('../json/pricelist.json')

Vue.use(Vuex);
let newdata =  new Date()
export const store = new Vuex.Store({
	state: {
		curentvalue: 1, //тип документы или груз
		curentTime: 1, //время
		backetData: [], //корзина
		selectedDate: (newdata.getDate()<10? '0':'') + newdata.getDate() + '.' +   ((newdata.getMonth()+1)<10? '0':'') + (newdata.getMonth()+1) + '.'+ newdata.getUTCFullYear() ,
		gabarit: null,
		weight: null, //вес
		gabarits: { //габариты
			height: null,
			width: null,
			depth: null
		},
		valueCitySending: null, //город отправитель
		valueCityReception: null, // город получатель
		tarifzonevalue: null, //тарифная зона
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
			//Получаем данные о городе отправки и записываем в сторе
			state.valueCitySending = citiSet
			console.log(state.valueCitySending)
		},
		toCityReception(state, reception) {
			//Получаем данные о городе получателе и записываем в сторе
			state.valueCityReception = reception
			console.log(state.valueCityReception)
		},
		tarifZone(state) {
			//console.log('зона отправки', state.valueCitySending)
			let arr = tarifzone;
			//console.log(arr)
			
			for (var i = 0; i<arr.datatarifzone.length; i++) {
				//console.log(tarifzone.datatarifzone[i][state.valueCitySending])
				if(tarifzone.datatarifzone[i][0] == state.valueCitySending+'a') {
					let paramFix = state.valueCitySending+'a'
					//console.log(arr.datatarifzone[i])
					var ilnegh = [] 
					ilnegh.push(arr.datatarifzone[i])
					for (var j = 0; j<ilnegh.length; j++) {
						console.log('работает', arr.datatarifzone[i][state.valueCityReception])
						state.tarifzonevalue = arr.datatarifzone[i][state.valueCityReception]
					}
				}
			}
		},
		selecttarif () {
				console.log('прайс', pricelist.pricelistdata)
		},
	},
	actions: {
		
	}
});