

export default {
	state: {
		stepOneflag: true,
		steptwo: false,
		stepTree: false,
		addTobasketSteep: false,
		basketHide: false,
		validateOne: false
	},
	getters: {
		//второй шаг (после адреса)
		steponeEx (state) {
			return state.steptwo
		},
		//третий шаг
		stepTreeEx (state) {
			return state.stepTree
		},
		basketGet (state) {
			return state.stepTree
		},
		validate (state) {
			return state.validateOne
		},

	},
	mutations: {
		 stepOneX (state) {
			state.stepOneflag =  !tstatehis.stepOneflag;
		  },
		  nextstepX (state) {
			state.steptwo = !state.steptwo
		  },
		  nextstepTreeX (state) {
			state.stepTree = !state.stepTree
		  },
		  addTobasketHide (state) {
			state.stepTree = !state.stepTree
		  },
		  validateOneMut (state, param) {
			  console.log(param)
			  state.validateOne = param
		  }
	},
	actions: {
		
	}
  }