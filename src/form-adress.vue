

<template>
	<div>
       
		<div  class="title-block-new">
			<div class="div-block-51 _500 w-clearfix">
				<div class="heading-text-block _500">
					<div class="div-line"></div>
					<div class="div-rad"></div>
					<div class="div-block-50"></div>
					<div class="div-rad min"></div>
					<h2 class="heading-13">Отправитель<br></h2>
				</div>
			</div>
		</div>
		<div class="toset col-sm-12">
			<div class="blocktwo">
				<div class="country">
					<div class="form-group row">
						<label for="staticEmail" class="col-sm-2 col-form-label">Страна<span class="redstar">*</span></label>
						<div class="col-sm-10">
							<multiselect 
							:disabled="disabledcountrySet" 
							v-model="valuecountry" 
							selectLabel=" " 
							:hideSelected="false" 
							noResult="Ничего не найдено" 
							label="country" 
							placeholder="Страна" 
							:options="optionscountry" 
							:searchable="true" 
							:allow-empty="false"
							deselectLabel="Уже выбран"
							@input="countrydesebl">
								<template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.country }}</strong></template>
							</multiselect>
						</div>
					</div>
					
					<div class="form-group row">
						<label for="staticEmail" class="col-sm-2 col-form-label">Город<span class="redstar">*</span></label>
						<div class="col-sm-10">
                            <template v-if="disabledcountryGet">
                                    <input class="form-control" v-model="citynoRusSend" @input="controlvalidOne" type="text" placeholder="Город">
                            </template>
                            <template  v-if="!disabledcountryGet">
                                <multiselect 
									:disabled="valuecountry.country == 'Россия' ? false : true" 
									v-model="value" 
									deselectLabel="Уже выбран" 
									noResult="Ничего не найдено" 
									selectLabel=" " 
									:hideSelected="false" 
									:showLabels="false" 
									:multiple="false"  
									track-by="region" 
									label="city" 
									placeholder="Город" 
									:options="options" 
									:searchable="true" 
									:allow-empty="false" 
									@input="dispatchAction('CitySending')"
									>
                                    <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.city }}  {{ '(' + option.region }}</strong></template>
									
									<template slot="option" slot-scope="props">
										<div class="option__desc"><span class="option__title">{{ props.option.city }}</span><span class="option__small">{{'(' +  props.option.region }}</span></div>
									</template>
                                    <span slot="noResult">Ничего не найдено.</span>
                                </multiselect>
                            </template>
						</div>
					</div>
					<div class="form-group row">
						<label for="staticEmail" class="col-sm-2 col-form-label">Индекс</label>
						<div class="col-sm-10">
							<input class="form-control" :maxlength="6"  v-model="index" type="text"  @input="controlvalidOne" placeholder="Индекс">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="title-block-new">
			<div class="div-block-51 _500 w-clearfix">
				<div class="heading-text-block _500">
					<div class="div-line"></div>
					<div class="div-rad"></div>
					<div class="div-block-50"></div>
					<div class="div-rad min"></div>
					<h2 class="heading-13">Получатель<br></h2>
				</div>
			</div>
		</div>
		<div class="toset">
			<div class="blocktwo">
				<div class="country">
					<div class="form-group row">
						<label for="staticEmail" class="col-sm-2 col-form-label">Страна<span class="redstar">*</span></label>
						<div class="col-sm-10">
							<multiselect 
							:disabled="disabledcountryGet"  
							v-model="valuecountryToSet" 
							selectLabel=" " 
							noResult="Ничего не найдено" 
							:hideSelected="false" 
							label="country"
							deselectLabel="Уже выбран"
							placeholder="Страна" 
							:options="optionscountry" 
							:searchable="true" 
							:allow-empty="false" 
							@input="selectCountry"
							>
								<template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.country }}</strong></template>
								<span slot="noResult">Ничего не найдено.</span>
							</multiselect>
						</div>
					</div>
					
					
					<div class="form-group row">
						<label for="staticEmail" class="col-sm-2 col-form-label">Город<span class="redstar">*</span></label>
						<div class="col-sm-10">
                            <template v-if="valuecountryToSet.country != 'Россия' ? true : false">
                                    <input class="form-control"  @input="controlvalidOne" v-model="citynoRus" type="text" placeholder="Город">
                            </template>
                             <template v-if="valuecountryToSet.country == 'Россия' ? true : false">
                                <multiselect 
								deselectLabel="Уже выбран" 
								v-model="valuetoSet" 
								:disabled="valuecountryToSet.country == 'Россия' ? false : true" 
								selectLabel=" " 
								noResult="Ничего не найдено"  
								:hideSelected="false" 
								:showLabels="false" 
								:multiple="false"  
								track-by="region" 
								label="city"
								placeholder="Город" 
								:options="options" 
								:searchable="true" 
								:allow-empty="false" 
								@input="dispatchAction('CityReception')"
								>
                                    <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.city }}  {{ '(' + option.region }}</strong></template>
									
									<template slot="option" slot-scope="props">
										<div class="option__desc"><span class="option__title">{{ props.option.city }}</span><span class="option__small">{{'(' +  props.option.region }}</span></div>
									</template>
                                    <span slot="noResult">Ничего не найдено.</span>
                                </multiselect>

								
                             </template>
						</div>
					</div>
					
					<div class="form-group row">
						<label for="staticEmail" class="col-sm-2 col-form-label">Индекс</label>
						<div class="col-sm-10">
							<input class="form-control" :maxlength="6" v-model="indexReception" type="text" @input="controlvalid" placeholder="Индекс">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

	import {mapMutations} from 'vuex';
	import {mapGetters} from 'vuex';
	const cityId = require('./json/cityid.json') 
	const country = require('./json/country.json')
	import Multiselect from 'vue-multiselect'
	
	export default {
	  name: 'app',
	  data () {
	    return {
	      index: '',
	      indexReception: '',
	      stepOneflag: true,
	      value: 0,
	      valuetoSet: 0,
	      valuecountry: {"country": "Россия" },
	      valuecountryToSet: {"country": "Россия" },
	      options: [],
	      optionscountry: [],
	      disabledcountrySet: false,
		  disabledcountryGet: false,
		  citynoRus: '',
		  citynoRusSend: '',

	    }
	  },
	  mounted () {
	      this.cicl()
	      this.countrycl()
	      this.randomInteger()
	  },
	  computed: {
	    //indextel() {
	    //    //console.log( this.index.replace(',','.').replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, ''))
	    //    this.index = this.index.replace(',','.').replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, '');
	    //    this.controlvalid ()
	    //},
	  },
	  methods: {
	    ...mapMutations([
	            'toCitysending', 'toCityReception', 'tarifZone', 'selecttarif', 'validateOneMut', 'importmut', 'importcalc', 'mapDayToShiping', 'randomInteger'
	     ]),
	     //если страна отправки не Россия тогда блокируем поле страна получения, и ставим страну Россия
	     countrydesebl () {
			 this.citynoRusSend = ''
			 this.citynoRus = ''
			this.$store.state.citynoRusSendStore = ''
			this.$store.state.citynoRusStore = ''
			this.$store.state.citySetText = ''
			this.$store.state.countrySetText = this.valuecountry.country
			
	    	if ( JSON.stringify(this.valuecountry) !=  JSON.stringify({"country":"Россия","zone":"0"})) {
	            //console.log(JSON.stringify(this.valuecountry))
	            this.disabledcountryGet = true
	            this.valuecountryToSet = {"country":"Россия","zone":"0"}
				this.importmut(this.valuecountry.zone)
				this.$store.state.countrySetText = this.valuecountry.country
	            //this.importcalc(this.valuecountry.zone)
	         } else {
				  this.disabledcountryGet = false
				  
	         } 
	     },
	
	     selectCountry () {
			this.citynoRusSend = ''
			 this.citynoRus = ''
			this.$store.state.citynoRusSendStore = ''
			this.$store.state.citynoRusStore = ''
			this.$store.state.cityGetText  = ''
	         //проверкаа на страну
	         if ( JSON.stringify(this.valuecountryToSet) !=  JSON.stringify({"country":"Россия","zone":"0"})) {
	            this.disabledcountrySet = true
	            this.valuecountry = {"country":"Россия","zone":"0"}
				this.importmut(this.valuecountryToSet.zone)
				this.$store.state.countryGetText = this.valuecountryToSet.country
	            //this.importcalc(this.valuecountryToSet.zone)
	         } else {
				this.disabledcountrySet = false
				this.$store.state.countryGetText = this.valuecountryToSet.country
	         }
	
		 },
	     controlvalidOne () {
			 this.$store.state.indexSet = this.index
			 this.$store.state.citynoRusSendStore = this.citynoRusSend
			 this.$store.state.citynoRusStore = this.citynoRus
			 //форма валидна или нет
			 //console.log('ВАЛИДАЦИЯ',this.options.tarifid)
	         if ((this.valuecountry || this.value.tarifid > 0 ) && (this.valuetoSet.tarifid || this.citynoRus.length > 0) > 0 ) {
	            this.validateOneMut(true)
	         } else {
	             this.validateOneMut(false)
	         }
	     },
	     controlvalid () {
			 this.$store.state.indexGet = this.indexReception
			 this.$store.state.citynoRusSendStore = this.citynoRusSend
			 this.$store.state.citynoRusStore = this.citynoRus
			 //форма валидна или нет
	         if ((this.valuecountry || this.value.tarifid > 0 ) && (this.valuetoSet.tarifid || this.citynoRus.length > 0) > 0  ) {
	            this.validateOneMut(true)
	         } else {
	             this.validateOneMut(false)
	         }
	     },
	     cicl() {
	          for (var i=0; i<cityId.cityid.length; i++) {
	            this.options.push({
	                'city': cityId.cityid[i].city.split('(')[0],
	                'region': cityId.cityid[i].city.split('(')[1],
					'tarifid': cityId.cityid[i].tarifid,
					'time': cityId.cityid[i].time || 5,
					'fullName': cityId.cityid[i].city.split('(')[0] + ' ('+ cityId.cityid[i].city.split('(')[1]
				})


	            //this.options.push({'region': cityId.cityid[i].city.split('(')[1]})
	            //this.options.push(cityId.cityid[i].cityregion = '(' + cityId.cityid[i].city.split('(')[1])
			}

	        //console.log(this.options)
	     },
	     dispatchAction (typeSelectValue) {

	        if (typeSelectValue == 'CitySending') {
				this.toCitysending(this.value.tarifid)
				this.$store.state.citySetText = this.value.city
	        } else if (typeSelectValue == 'CityReception') {
				this.toCityReception(this.valuetoSet.tarifid )
				this.$store.state.cityGetText = this.valuetoSet.city
	        }
	        this.controlvalid ()
			this.tarifZone()
			this.mapDayToShiping({
				"cityOme": this.value.time,
				"cityTwo": this.valuetoSet.time
			})
	         //this.selecttarif()
	     },
	     countrycl() {
	          for (var i=0; i<country.country.length; i++) {
	            this.optionscountry.push({
	                'country': country.country[i].cuuntry,
	                'zone': country.country[i].zone
	            })
	            //this.options.push({'region': cityId.cityid[i].city.split('(')[1]})
	            //this.options.push(cityId.cityid[i].cityregion = '(' + cityId.cityid[i].city.split('(')[1])
	        }
	        //console.log(this.optionscountry)
         },

	  },
	  components: {
	      Multiselect 
	    },
	}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
	.multiselect__option--highlight {
		background: #e9f0f8 !important;
		color: #000 !important;
	}
	.toset .col-form-label {
		text-align: center;
	}
	.multiselect__option--selected.multiselect__option--highlight {
		background: #41b883 !important;
		outline: none;
		color: #fff;
	}

	.multiselect__option--highlight:hover {
		background: #41b883 !important;
		color: #fff;
	}

	.multiselect__element {
		background: #41b883 !important;
	}

	.multiselect__option--selected.multiselect__option--highlight {
		background: #41b883 !important;
		color: #fff;
	}
	.multiselect__option--selected.multiselect__option--highlight:after {
		background: #41b883 !important;
		color: #fff;
	}

	.multiselect__option--selected.multiselect__option--highlight {
		background: #41b883 !important;
		color: #fff;
	}
	.multiselect__option--selected.multiselect__option--highlight{background:#41b883 !important;color:#fff}
	.multiselect__option--selected.multiselect__option--highlight{background:#41b883 !important;color:#fff}
	.multiselect__option--selected.multiselect__option--highlight:after{background:#41b883 !important;content:attr(data-deselect);color:#fff}
	.multiselect__option--group-selected.multiselect__option--highlight{background:#c6cac8 !important;color:#fff}
.multiselect__option--group-selected.multiselect__option--highlight:after{background:#41b883 !important;content:attr(data-deselect);color:#fff}
</style>

