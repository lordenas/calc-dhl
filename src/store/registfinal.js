
export default {
	state: {
        curentvalueFace: 2,
        curentvalueBay: 1
	},
	getters: {
        presoptionStateFace(state) {
            return state.curentvalueFace; 
        },
        presoptionStateBay(state) {
            return state.curentvalueBay; 
        },
	},
	mutations: {
        presoptionFace(state, param) {
            state.curentvalueFace = param
            console.log(state.curentvalueFace, param)
        },
        presoptionBay(state, param) {
            state.curentvalueBay = param
            console.log(state.curentvalueBay, param)
        },
	},
	actions: {
		presoptionFace(context) {
            context.commit('presoptionFace');
        }
	}
  }