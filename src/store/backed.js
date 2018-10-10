export default {
	state: {
        backetData: [], //корзина
	},
	getters: {
        backetDataState(state) {
            return state.backetData; // корзина
        },
	},
	mutations: {
        // добавление посылки в корзину
        backetDataArr(state, gabarit) {
            console.log(gabarit)
            state.backetData.push({
                title: this.state.curentvalue,
                parametr: gabarit.weightel + ' кг.',
                gabarit: gabarit.gabarit,
                price: 0
            })
        },
        // удаление посылки из корзины
        deletepost(state, index) {
            state.backetData.splice(index, 1)
        },
	},
	actions: {
		
	}
  }