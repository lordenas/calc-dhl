<template>
    <div>
        <div class="backet-block" v-for="(item, index) in backetDataState">
            <div class="basket-block-position">
                <div class="basket-block-position-row"><img class="summary__img  summary__img--non-doc" :src="item.title == 1 ? '/img/summary-document.svg' : '/img/summary-nonDocuments.svg'"></div>
                <div class="basket-block-position-row-title">Вы отправляете {{item.title == 1 ? 'документы' : 'груз'}}</div>
                <div class="basket-block-position-row-parametr">{{item.parametr}} {{item.title == 1 ? '' : item.gabarit}}</div>
                <div class="basket-block-position-row">
                    <div class="basket-block-position-row-button">
                        <!-- <button @click="editpost(index)" class="summary__link summary__link_edit" style="background-image:url('https://zakaz.dhl.ru/assets/img/summary-edit.png');">Изменить</button> -->
                        <button @click="deletepost(index)" class="summary__link summary__link_remove" style="background-image:url('/img/summary-remove.png');">Удалить</button>
                    </div>
                </div>
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
            'backetDataState'
        ])
    },
    methods: {
        ...mapMutations([
            'presoption', 'deletepost','editpost'
        ])
    },
}
</script>

