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
                <div class="typestore-icon-step"  @click="presoption(1)">
                    <div class="typestore-icon-step-radio" v-bind:class="{ active: presoptionState == 1 }" @click="presoption(1)"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active">
                            <img src="/img/4.png" />
                        </div>
                        <span>Документы</span>
                    </div>
                </div>
                <div class="typestore-icon-step" v-on:click="presoption(2)">
                    <div class="typestore-icon-step-radio" v-bind:class="{ active: presoptionState == 2 }" @click="presoption(2)"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active" >
                            <img src="img/5.png" />
                        </div>
                        <span>Груз</span>
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
        'presoptionState'
        ])
    },
    methods: {
        ...mapMutations([
            'presoption'
        ])
    },
}
</script>

