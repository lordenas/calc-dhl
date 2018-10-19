<template>
    <div>
        <div class="title-block-new">
            <div class="div-block-51 _500 w-clearfix">
                <div class="heading-text-block _500">
                <div class="div-line"></div>
                <div class="div-rad"></div>
                <div class="div-block-50"></div>
                <div class="div-rad min"></div>
                <h2 class="heading-13">Что Вы отправляете?<br></h2>
                </div>
            </div>
        </div>
        <div class="typestore">
            <div class="typestore-icon">
                <div class="typestore-icon-step" :class="this.$store.state.flagBasketContainer ? 'opas' : ''"  @click="statebasket(1)">
                    <div class="typestore-icon-step-radio" v-bind:class="{ active: presoptionState == 1 }"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active">
                            <img src="/img/4.png" />
                        </div>
                        <span>Документы {{this.$store.state.glagState }}</span>
                    </div>
                </div>
                <div class="typestore-icon-step" :class="this.$store.state.flagBasketContainer ? 'opas' : ''" v-on:click="statebasket(2)">
                    <div class="typestore-icon-step-radio" v-bind:class="{ active: presoptionState == 2 }"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active" >
                            <img src="img/5-1.png" />
                        </div>
                        <span>Груз</span>
                    </div>
                </div>
                <div class="typestore-icon-step" :class="this.$store.state.backetData.length > 0  ? 'opas' : ''" v-on:click="statebasket(111)">
                    <div class="typestore-icon-step-radio" v-bind:class="{ active: presoptionState == 3 }"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active" >
                            <img src="img/c5.png" />
                        </div>
                        <span>Контейнер</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Vue from 'vue';
import {mapMutations} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    name: 'app',
    data () {
        return {
            
        }
    },
    computed: {
        ...mapGetters([
        'presoptionState', 'conteinerBool'
        ])
    },
    methods: {
        ...mapMutations([
            'presoption'
        ]),
        statebasket(id) {
            if(id == 111) {
                console.log('test8', this.$store.state.flagBasketContainer)
                if(this.$store.state.backetData.length > 0) {
                    console.log('Очистите корзту')
                } else {
                    this.presoption(3)
                }
            } else {
                 console.log('test9', this.$store.state.flagBasketContainer)
                 if(this.$store.state.flagBasketContainer) {
                     console.log('Очистите корзту')
                 } else {
                      this.presoption(id)
                 }
               
            }
            
        }
    },
}
</script>

<style>
.opas {
    opacity: 0.3;
}
</style>
