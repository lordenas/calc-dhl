<template>
    <div id="app">
         <a @click ="stepOne()" v-show="stepOneflag" class="typepost-but-succes button-next">Расчитать стоимость доставки</a> 
        <transition name="fade">
        <div  v-show="!stepOneflag" class="stepOne">
            
            <form-adress></form-adress>
            <form-date></form-date>
             <div id="div2"></div> 
             <a href="#div2" v-smooth-scroll>
                <input class="typepost-but-succes button-next" :disabled="!validate" v-show="!steponeEx" @click="nextstepX" value="Далее">
             </a>
            <transition name="fade">
                <div v-show="steponeEx">
                    <div class="type-postcs">
                      <div class="radio-btn-group">
                          <div class="radio"><input type="radio" name="radio" value="1" checked="checked" v-model="checked" id="click_me" @input="getValueState" /><label for="click_me">Экспресс доставка</label></div>
                          <div class="radio"><input type="radio" name="radio" value="2" v-model="checked" id="or_me"  @input="getValueState" /><label for="or_me">Не срочная доставка</label></div>
                      </div>
                    </div>
                    <div v-show="!stepTreeEx">
                        <type-store></type-store>
                    </div>
                    <bascket></bascket>
                    <div>
                      <input class="typepost-but-succes button-next" v-show="!stepTreeEx" @click="nextstepTreeX" :value="this.$store.state.backetData.length > 0 ? 'Добавить еще' : 'Далее'">
                    
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div v-show="stepTreeEx">
                      <type-post></type-post>
                </div>
            </transition>
            <div v-show="this.$store.state.backetData.length > 0 ? true : false">
                <div id="div-id"></div> 
                <a href="#div-id" v-smooth-scroll><div style="width: 95%" class="typepost-but-succes button-next" @click="clickcalctarif">Расчитать стоимость</div></a> 
            </div>
            <transition name="fade">
                <Finalcalc v-show="finalCalchideState"></Finalcalc>
            </transition>

            <div class="radio-btn-group regulat-post" v-show="finalCalchideState">
               <input class="inp-cbx" id="cbx" v-model="regularcheck" type="checkbox" style="display: none;"/>
               <label class="cbx" for="cbx"><span>
               <svg width="12px" height="10px" viewbox="0 0 12 10">
                 <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
               </svg></span><span>Сделать отправку регулярной?</span></label>
                
            </div>
            <transition name="fade">
                <div v-show="regularcheck">
                    <regular></regular>
                </div>
            </transition>
            <div v-show="finalCalchideState">
                <div style="width: 95%" class="typepost-but-succes button-next">Перейти к оформлению</div>
            </div>
            <div>
              <registration></registration>
            </div>
        </div>
        </transition>
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
    
    Vue.use(Vuex);

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
          stepOneflag: true,
          valueButtonText: 'Добавить еще',
          checked: 1,
          regularcheck: false
        }
      },
      computed: {
        ...mapGetters([
          'steponeEx', 'stepTreeEx', 'basketGet', 'validate', 'finalCalchideState', 'getExpress'
        ]),
        valueButton () {
          this.$store.state.backetData.length > 0 ? 'Добавить еще' : 'Далее'
        }
      },
      methods: {
        ...mapMutations([
            'nextstepX', 'nextstepTreeX', 'selecttarif', 'expressnoexpress', 'importcalc'
        ]),
        clickcalctarif() {
            this.$store.state.import ? this.importcalc() : this.selecttarif()
            //console.log(this.$store.state.import)
        },
        stepOne () {
          this.stepOneflag =  !this.stepOneflag;
        },
        getValueState (e) {
          console.log(e.target.value)
          this.expressnoexpress(e.target.value)
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
</style>