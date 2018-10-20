

export default {
	state: {
		stepOneflag: true,
		steptwo: false,
		stepTree: false,
		addTobasketSteep: false,
		basketHide: false,
		validateOne: false,
		calcRegistr: false
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
		calcRegistrGet (state) {
			return state.calcRegistr
		}

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
			state.stepTree = false
		  },
		  validateOneMut (state, param) {
			  console.log(param)
			  state.validateOne = param
		  },
		  registrStateShow (state) {
			  state.calcRegistr = ! state.calcRegistr
		  }
	},
	actions: {
		
	}
  }