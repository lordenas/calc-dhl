
let newdata =  new Date()
export default {
	state: {
		selectedDateRS: (newdata.getDate()<10? '0':'') + newdata.getDate() + '.' +   ((newdata.getMonth()+1)<10? '0':'') + (newdata.getMonth()+1) + '.'+ newdata.getUTCFullYear() ,
		selectedDateRD: (newdata.getDate()<10? '0':'') + newdata.getDate() + '.' +   ((newdata.getMonth()+1)<10? '0':'') + (newdata.getMonth()+1) + '.'+ newdata.getUTCFullYear() ,
	},
	getters: {
		dateCalenStatePositionRS(state){
			return state.selectedDateRS
		},
		dateCalenStatePositionRD(state){
			return state.selectedDateRD
		},
	},
	mutations: {
		//  регулятор даты отправки в регулярной доставке  (повторять с)
		calendarStateRegS (state, param) {
            console.log(param)
			state.selectedDateRS = (param.getDate()<10? '0':'') + param.getDate() + '.' +   ((param.getMonth()+1)<10? '0':'') + (param.getMonth()+1) + '.'+ param.getUTCFullYear() 
			//console.log(state.selectedDate, param.getUTCFullYear())
		},
		calendarStateRegD (state, param) {
            console.log(param)
			state.selectedDateRD = (param.getDate()<10? '0':'') + param.getDate() + '.' +   ((param.getMonth()+1)<10? '0':'') + (param.getMonth()+1) + '.'+ param.getUTCFullYear() 
			//console.log(state.selectedDate, param.getUTCFullYear())
		},
	},
	actions: {
		
	}
  }