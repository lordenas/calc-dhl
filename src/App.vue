<template>
    <div id="app">
         <a @click ="stepOne()" v-show="stepOneflag" class="button-start">Расчитать стоимость доставки</a> 

        <div  v-show="!stepOneflag" class="stepOne">
            <form-adress></form-adress>
            <form-date></form-date>
            <bascket></bascket>
            <type-store></type-store>
            <type-post></type-post>
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
      methods: {
        stepOne () {
          this.stepOneflag =  !this.stepOneflag;
        }
      },
      components: {
          TypePost, TypeStore, FormAdress, FormDate, Multiselect, bascket 
        },
    }
</script>

