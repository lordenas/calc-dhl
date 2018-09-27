<template>
    <div id="app">
         <a @click ="stepOne()" v-show="stepOneflag" class="typepost-but-succes button-next">Расчитать стоимость доставки</a> 

        <div  v-show="!stepOneflag" class="stepOne">
            <form-adress></form-adress>
            <form-date></form-date>
            <input class="typepost-but-succes button-next" :disabled="!validate" v-show="!steponeEx" @click="nextstepX" value="Далее">
            <div v-show="steponeEx">
                
                <div v-show="!stepTreeEx">
                    <type-store></type-store>
                </div>
                <bascket></bascket>
                <div>
                 <input class="typepost-but-succes button-next" v-show="!stepTreeEx" @click="nextstepTreeX" :value="this.$store.state.backetData.length > 0 ? 'Добавить еще' : 'Далее'">
                
                 </div>
            </div>
            <div v-show="stepTreeEx">
                <type-post></type-post>
            </div>

            <Finalcalc v-show="finalCalchideState"></Finalcalc>
            <div v-show="this.$store.state.backetData.length > 0 ? true : false">
                <div style="width: 100%" class="typepost-but-succes button-next" @click="selecttarif">Расчитать стоимость</div>
            </div>
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
    import Multiselect from 'vue-multiselect'
    import {store} from './store/';
    import Vuex from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapGetters } from 'vuex';
    Vue.use(Vuex);

    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios)
    export default {
      name: 'app',
      store: store,
      data () {
        return {
          stepOneflag: true,
          valueButtonText: 'Добавить еще'
        }
      },
      computed: {
        ...mapGetters([
          'steponeEx', 'stepTreeEx', 'basketGet', 'validate', 'finalCalchideState'
        ]),
        valueButton () {
          this.$store.state.backetData.length > 0 ? 'Добавить еще' : 'Далее'
        }
      },
      methods: {
        ...mapMutations([
            'nextstepX', 'nextstepTreeX', 'selecttarif'
        ]),
        stepOne () {
          this.stepOneflag =  !this.stepOneflag;
        },

      },
      components: {
          TypePost, TypeStore, FormAdress, FormDate, Multiselect, bascket, Finalcalc
        },
    }
</script>

