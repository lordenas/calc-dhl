<template>
    <div>
        <div class="title-block-new">
            <div class="div-block-51 _500 w-clearfix">
                <div class="heading-text-block _500">
                <div class="div-line"></div>
                <div class="div-rad"></div>
                <div class="div-block-50"></div>
                <div class="div-rad min"></div>
                <h2 class="heading-13">Информация о Вашем грузе<br></h2>
                </div>
            </div>
        </div>
        <div class="toset">
            <div class="col-sm-12">
                <div class="col-sm-12 form-group row">
                    <div class="col-sm-2 rightalign">
                        <img src="/img/8.png" width="15px" />
                    </div>
                    <div class="col-sm-10 leftalign">
                        Из {{this.$store.state.countrySetText}}, {{this.$store.state.citySetText}}, {{this.$store.state.indexSet}} - в {{this.$store.state.countryGetText}}, {{this.$store.state.cityGetText}}, {{this.$store.state.indexGet}}  
                    </div>
                </div>
                <div class="col-sm-12 form-group row">
                    <div class="col-sm-2 rightalign">
                        <img src="/img/9.png" width="20px" />
                    </div>
                    <div class="col-sm-10 leftalign">
                        {{this.$store.state.selectedDate}} - {{this.$store.state.curentTime == 1 ? 'С 09:00 до 14:00' : this.$store.state.curentTime == 2 ? 'С  14.00 до 18.00' : 'С 9.00 до 18.00'}}
                    </div>
                </div>
            </div>
        </div>
        <div class="backet-block" v-for="(item, index) in backetDataState" :key="index">
            <div class="basket-block-position">
                <div class="basket-block-position-row"><img class="summary__img  summary__img--non-doc" :src="item.title == 1 ? '/img/summary-document.svg' : item.title == 2 ? '/img/summary-nonDocuments.svg' : '/img/container-icon-4.png'"></div>
                <div class="basket-block-position-row-title">{{item.title == 1 ? 'Документы' :  item.title == 2 ? 'Груз' : 'Контейнер'}}</div>
                <div class="basket-block-position-row-parametr">{{item.parametr}} {{item.title == 1 ? '' : item.gabarit}}</div>
                <div class="basket-block-position-row-title price-bask">{{item.price}} {{item.price == 'Расчет в течении 24 часов' ? '' : 'руб.'}}</div>
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

<style>
.leftalign {
    text-align: left;
    padding: 5px;
    color: #0f3b83;
    font-size: 15px;
    font-weight: 600;
}
.rightalign {
    text-align: right;
}
</style>
