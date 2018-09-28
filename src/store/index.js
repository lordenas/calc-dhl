import Vue from 'vue';
import Vuex from 'vuex';
import step from './indexstep'
const tarifzone = require('../json/tarifzone.json')
const pricelist = require('../json/pricelist.json')

Vue.use(Vuex);
let newdata =  new Date()
export const store = new Vuex.Store({
	modules: {
		step,
	},
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
		tarifcalc: 0,
		finalCalchide: false
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
		tarifcalcState(state) {
			return state.tarifcalc
		},
		finalCalchideState(state) {
			return state.finalCalchide
		}
		
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
		selecttarif (state) {
				console.log('прайс', pricelist.pricelistdata)
				let parseWeight = parseFloat(state.backetData[0].parametr)
				var summ = 0
				console.log('basket', JSON.parse(JSON.stringify(state.backetData)))
				for (var a = 0; a<state.backetData.length; a++) {
					for (var i = 0; i<pricelist.pricelistdata.length; i++) {
						console.log('json',  JSON.parse(JSON.stringify(state.backetData[a].parametr)))
						if(parseFloat(pricelist.pricelistdata[i].kg) ==  Math.ceil(parseFloat(JSON.parse(JSON.stringify(state.backetData[a].parametr))))) {
							console.log('кг', parseFloat(pricelist.pricelistdata[i].kg))
							var maslengt = []
							maslengt.push(pricelist.pricelistdata[i])
							for(var j = 0; j < maslengt.length; j++) {
								console.log(pricelist.pricelistdata[j][state.tarifzonevalue], 'цена')
								summ += parseFloat(pricelist.pricelistdata[j][state.tarifzonevalue])
								console.log('itog', summ)
								state.tarifcalc = summ
								state.finalCalchide = true
							}
						}
					}
				}
		},
	},
	actions: {
		
	}
});



/*
var decimal = 1;
if(2 % 1 == 0) {
 decimal = 0;
  } else {
   decimal = 1;
  }
console.log((Math.ceil(2 * 2) / 2).toFixed(decimal))*/