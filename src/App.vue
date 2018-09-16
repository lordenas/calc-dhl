<template>
    <div id="app">
        <a @click ="stepOne()" v-show="stepOneflag" class="button-start">Расчитать стоимость доставки</a>
        <div class="stepOne" v-show="!stepOneflag" >
            <form-adress></form-adress>
            <form-date></form-date>
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
    import Multiselect from 'vue-multiselect'

    export default {
      name: 'app',
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
          TypePost, TypeStore, FormAdress, FormDate, Multiselect 
        },
    }
</script>

