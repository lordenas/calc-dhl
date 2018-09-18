<template>
        <div class="typestore">
            <div class="typestore-title">
            Что Вы отправляете?
            </div>
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
</template>


<script>
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

