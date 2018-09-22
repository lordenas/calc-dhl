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
            <div class="typestore-icon-step">
                <div class="typestore-icon-step-active" v-bind:class="{ active: presoptionState == 1 }" @click="presoption(1)">
                    <img src="/img/my-documents-png-image-24592.png" />
                </div>
                <p>Документы</p>
            </div>
            <div class="typestore-icon-step">
                <div></div>
                <p>или</p>
            </div>
            <div class="typestore-icon-step">
                <div class="typestore-icon-step-active" v-bind:class="{ active: presoptionState == 2 }" v-on:click="presoption(2)">
                    <img src="img/Open_Cardboard_Box_PNG_Clip_Art_Image-1283.png" />
                </div>
                <p>Груз</p>
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

