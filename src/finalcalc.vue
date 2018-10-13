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
         <div class="typepost col-sm-12">
                <div class="typepost-body row">
                    <div class="col-sm-6">
                        <img src="/img/13.png" width="30px" />
                        <div class="calcstr">Срок доставки: 5 рабочих дней</div>
                    </div>
                    <div class="col-sm-6">
                        <img src="/img/12.png" width="30px" />
                        <div class="calcstr">{{tarifcalcState == 'Расчет в течении 24 часов' ? 'Расчет в течении 24 часов' : 'Стоимость: ' + tarifcalcState + ' руб.' }} </div>
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
            'backetDataState', 'tarifcalcState'
        ])
    },
    methods: {
        ...mapMutations([
            'presoption', 'deletepost','editpost'
        ])
    },
}
</script>

