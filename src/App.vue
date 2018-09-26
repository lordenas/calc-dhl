<template>
    <div id="app">
         <a @click ="stepOne()" v-show="stepOneflag" class="typepost-but-succes button-next">Расчитать стоимость доставки</a> 

        <div  v-show="!stepOneflag" class="stepOne">
            <form-adress></form-adress>
            <form-date></form-date>
            <input class="typepost-but-succes button-next" :disabled="!validate" v-show="!steponeEx" @click="nextstepX" value="Далее">
            <div v-show="steponeEx">
                <bascket></bascket>
                <div v-show="!stepTreeEx">
                    <type-store></type-store>
                </div>
                <div>
                
                {{ this.$store.state.backetData.length  }} 
                 <input class="typepost-but-succes button-next" v-show="!stepTreeEx" @click="nextstepTreeX" :value="valueButton">
                
                 </div>
            </div>
            <div v-show="stepTreeEx">
              <type-post></type-post>
              <div class="typepost-but-succes button-next">Расчитать стоимость</div>
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
    import bascket from './bascket.vue'
    import Multiselect from 'vue-multiselect'
    import {store} from './store/';
    import Vuex from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapGetters } from 'vuex';
    Vue.use(Vuex);

    export default {
      name: 'app',
      store: store,
      data () {
        return {
          stepOneflag: true,
        }
      },
      computed: {
        ...mapGetters([
          'steponeEx', 'stepTreeEx', 'basketGet', 'validate'
        ]),
        valueButton () {
          this.$store.state.backetData.length > 0 ? 'Добавить еще' : 'Далее'
        }
      },
      methods: {
        ...mapMutations([
            'nextstepX', 'nextstepTreeX'
        ]),
        stepOne () {
          this.stepOneflag =  !this.stepOneflag;
        },

      },
      components: {
          TypePost, TypeStore, FormAdress, FormDate, Multiselect, bascket 
        },
    }
</script>

