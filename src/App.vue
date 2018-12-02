

<template>
	<div>
		<div v-show="!stepOneflag" class="video-hero jquery-background-video-wrapper demo-video-wrapper">
			<video class="jquery-background-video" autoplay muted loop poster="/541.jpg">
				<source src="/fon-transcode.webm" type="video/webm">
			</video>
			<div class="video-cloud">
				<div class="video-overlay"></div>
				<div class="page-width">
					<div class="video-hero--content">
						<div class="wrapper">
							<div class="flex-wrap">
								<div class="left-block">
									<h2 style="color: #FFF">Экспресс-доставка грузов, в том числе документов </h2>
									<p style="color: #FFF"> </p>
								</div>
								<div class="right-block">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
            <video v-show="stepOneflag" poster="/541.jpg" id="bgvid" playsinline autoplay muted loop>
            <!-- 
            - Video needs to be muted, since Chrome 66+ will not autoplay video with sound.
            WCAG general accessibility recommendation is that media such as background video play through only once. Loop turned on for the purposes of illustration; if removed, the end of the video will fade in the same way created by pressing the "Pause" button  -->
            <source src="/fon-transcode.webm" type="video/webm">

            </video>
            <div id="polina" v-show="stepOneflag">
                <div>
                    <a @click ="stepOne()" v-show="stepOneflag" style="margin: 0px; box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.64);" class="typepost-but-succes button-next">Расчитать стоимость доставки</a> 
                </div>
            </div>
        
<!--         <div v-show="stepOneflag" class="video-hero jquery-background-video-wrapperOne demo-video-wrapper">
			<video class="jquery-background-video" autoplay muted loop poster="https://d2ezlykacdqcnj.cloudfront.net/_assets/home-video/beach-waves-loop.jpg">
				<source src="/fon-transcode.webm" type="video/webm">
			</video>
			<div class="video-cloud">
				<div class="video-overlay"></div>
				<div class="page-width">
					<div class="video-hero--content">
						<div class="wrapper">
                            <a @click ="stepOne()" v-show="stepOneflag" class="typepost-but-succes button-next">Расчитать стоимость доставки</a> 
						</div>
					</div>
				</div>
			</div>
		</div> -->
        
		<div id="app">
			<transition name="fade">
				<div  v-show="!stepOneflag" class="stepOne">
					
					<form-adress v-show="!this.$store.state.backetData.length > 0"></form-adress>

					<form-date></form-date>

					<div id="div2"></div>
					<a href="#div2" v-smooth-scroll>
					<input class="typepost-but-succes button-next" :disabled="!validate" v-show="!steponeEx" @click="nextstepX" value="Далее">
					</a>
					<transition  name="fade">
						<div v-show="steponeEx">
							<div class="type-postcs">
								
								<div v-if="this.$store.state.curentvalue != 3" class="radio-btn-group">
									<div class="radio"><input type="radio" name="radio" value="1" checked="checked" v-model="checked" id="click_me" @input="getValueState" /><label for="click_me">Экспресс доставка</label></div>
									<div class="radio"><input type="radio" name="radio" value="2" v-model="checked" id="or_me"  @input="getValueState" /><label for="or_me">Не срочная доставка</label></div>
								</div>
							</div>
							<div v-show="!stepTreeEx">
								<type-store></type-store>
							</div>
							<bascket v-show="this.$store.state.backetData.length > 0 ? true : false "></bascket>

							<div v-if="this.$store.state.curentvalue != 3">
								<input class="typepost-but-succes button-next" v-show="!stepTreeEx" @click="nextCalcBacket" :value="this.$store.state.backetData.length > 0 ? 'Добавить еще' : 'Далее'">
							</div>


							<div v-if="this.$store.state.curentvalue == 3 && this.$store.state.backetData.length == 0">
								<input class="typepost-but-succes button-next" v-show="!stepTreeEx" @click="nextCalcBacket" value="Далее">
							</div>

						</div>
					</transition>
					<transition name="fade">
						<div v-show="stepTreeEx">
							<type-post></type-post>
						</div>
					</transition>
					<transition id="div-regialt" name="fade">
						<div v-show="regularcheck">
							<regular></regular>
						</div>
					</transition>
					<div v-show="this.$store.state.backetData.length > 0 ? true : false" style="display: flex; justify-content: space-around; width: 100%;">
						<div v-show="this.$store.state.curentvalue != 3">
							<input class="inp-cbx" id="cbx" v-model="regularcheck" type="checkbox" style="display: none;"/>
							<label class="cbx" for="cbx">
								<a href="#div-regialt" v-smooth-scroll>
									<div style="width: 100%" class="typepost-but-succes button-next" @click="openRegulat">{{regularcheck ? 'Отменить' : 'Сделать доставку регулярной?'}}</div>
								</a>
							</label>
						</div>
						<div v-show="this.$store.state.curentvalue != 3">
							<div id="div-id"></div>
							<a href="#div-id" v-smooth-scroll>
								<div style="width: 100%" class="typepost-but-succes button-next" @click="clickcalctarif">Расчитать стоимость</div>
							</a>
						</div>
					</div>
					<transition name="fade" v-if="this.$store.state.curentvalue != 3 && this.$store.state.backetData.length > 0">
						<Finalcalc v-show="finalCalchideState"></Finalcalc>
					</transition>
					<div style="display: flex; justify-content: space-around;">
						<div @click="restartcalcAPP" v-if="finalCalchideState || (this.$store.state.curentvalue == 3 && this.$store.state.backetData.length > 0)">
							<a href="#app" v-smooth-scroll >
								<div style="width: 95%" class="typepost-but-succes button-next" >Изменить адрес</div>
							</a>
						</div>
						
						<div @click="registrStateShow" v-if="finalCalchideState || (this.$store.state.curentvalue == 3 && this.$store.state.backetData.length > 0)">
							<a href="#div-registr" v-smooth-scroll >
								<div style="width: 95%" class="typepost-but-succes button-next" >Перейти к оформлению</div>
							</a>
						</div>
					</div>
					
					<div id="div-registr" v-if="this.$store.state.backetData.length > 0">
						<registration v-show="calcRegistrGet"></registration>
						
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import FormAdress from './form-adress.vue'
	import FormDate from './form-date.vue'
	import TypePost from './type-post.vue'
	import TypeStore from './type-store.vue'
	import Finalcalc from './finalcalc.vue'
	import bascket from './bascket.vue'
	import regular from './regular-form'
	import Multiselect from 'vue-multiselect'
	import registration from './registration'
	import {store} from './store/';
	import Vuex from 'vuex';
	import { mapMutations } from 'vuex';
	import { mapGetters } from 'vuex';
	import VueMask from 'v-mask'
	Vue.use(Vuex);
	Vue.use(VueMask);
 	Vue.use(BootstrapVue);
  	import BootstrapVue from 'bootstrap-vue'
    Vue.config.productionTip = false    
	import axios from 'axios'
	import VueAxios from 'vue-axios'
	import vueSmoothScroll from 'vue-smooth-scroll'
	Vue.use(vueSmoothScroll)
	Vue.use(VueAxios, axios)
	
	export default {
	  name: 'app',
	  store: store,
	  data () {
	    return {
          mask: '##.#',
          placeholder: '00.0',
          inputVal: '',
	      stepOneflag: true,
	      valueButtonText: 'Добавить еще',
	      checked: 1,
	      regularcheck: false
	    }
	  },
	  computed: {
	    ...mapGetters([
	      'steponeEx', 'stepTreeEx', 'basketGet', 'validate', 'finalCalchideState', 'getExpress', 'calcRegistrGet', 'presoptionStateBay'
	    ]),
	    valueButton () {
	      this.$store.state.backetData.length > 0 ? 'Добавить еще' : 'Далее'
	    }
	  },
	  methods: {
	    ...mapMutations([
	        'nextstepX', 'periodMut', 'nextstepTreeX', 'selecttarif', 'expressnoexpress', 'importcalc', 'registrStateShow', 'onSubmit', 'restartcalc', 'registrStateShowFalse'
	    ]),
	    clickcalctarif() {
	        this.$store.state.import ? this.importcalc() : this.selecttarif()
	        //console.log(this.$store.state.import)
	    },
	    stepOne () {
	      this.stepOneflag =  !this.stepOneflag;
	    },
	    getValueState (e) {
	      //console.log(e.target.value)
	      this.expressnoexpress(e.target.value)
	    },
	    openRegulat() {
            this.regularcheck = !this.regularcheck
            this.periodMut(1)
            //console.log(this.$store.state.periodselect)
	    },
	    nextCalcBacket() {
	        this.nextstepTreeX()
	        this.$store.state.import ? this.importcalc() : this.selecttarif()
		},
        restartcalcAPP() {
			this.nextstepX()
			this.addTobasketHide
			this.$store.state.flagBasketContainer = false
			this.$store.state.backetData = []
			this.$store.state.finalCalchide = false
			this.regularcheck = false
			this.registrStateShowFalse()
		}
	  },
	  components: {
	      TypePost, TypeStore, FormAdress, FormDate, Multiselect, bascket, Finalcalc, regular, registration
	    },
	}
</script>
<style>
	.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
	opacity: 0;
	}
	.col-form-label {
	font-size: 15px;
	font-weight: 600;
	}
</style>

