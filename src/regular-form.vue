<template>
   <div>
        <div class="title-block-new">
            <div class="div-block-51 _500 w-clearfix">
                <div class="heading-text-block _500">
                <div class="div-line"></div>
                <div class="div-rad"></div>
                <div class="div-block-50"></div>
                <div class="div-rad min"></div>
                <h2 class="heading-13">Регулярная доставка<br></h2>
                </div>
            </div>
        </div>
         <div class="typepost">
                <div class="typepost-body">
                    <template>
                        <div class="flex-blockdariodreg">
                            <div class="label-radio">Выбирете время забора документов</div>
                            <div class="radio-btn-group">
                                <div class="radio"><input type="radio" name="radior" value="1" checked="checked" v-model="checkedtwo" id="click_met"  /><label for="click_met">09:00 - 18:00</label></div>
                                <div class="radio"><input type="radio" name="radior" value="2" v-model="checkedtwo" id="or_mea"  /><label for="or_mea">09:00-14:00</label></div>
                                <div class="radio"><input type="radio" name="radior" value="3" v-model="checkedtwo" id="or_met"  /><label for="or_met">14:00-18:00</label></div>
                            </div>
                            <div class="label-radio marginradio">
                                <label>Выбирите диапозон отправки</label>
                                <div class="flex-dir">
                                    <VueHotelDatepicker :ref="datepickerId" :datepickerId="datepickerId" :placeholder="placeholder" startOfWeek="monday" :i18n="ptBr" />
                                    <div class="calendar-diaposit">
                                        <img src="/img/Simpleicons_Business_weekly-calendar.svg" width="20px" />
                                    </div>
                                </div>
                            </div>
                            <div class="label-radio">Как часто отправлять?</div>
                            <div class="radio-btn-group">
                                <div class="radio"><input type="radio" name="radiortype" value="1" checked="checked" v-model="checkedtwotype" id="everyday"  /><label for="everyday">Каждый день</label></div>
                                <div class="radio"><input type="radio" name="radiortype" value="2" v-model="checkedtwotype" id="evertyweek"  /><label for="evertyweek">Неделю</label></div>
                                <div class="radio"><input type="radio" name="radiortype" value="3" v-model="checkedtwotype" id="everymoth"  /><label for="everymoth">Месяц</label></div>
                                <div class="radio"><input type="radio" name="radiortype" value="4" v-model="checkedtwotype" id="everyear"  /><label for="everyear">Год</label></div>
                            </div>
                        </div>
                    </template>

                </div>
         </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
import {mapGetters} from 'vuex';
import VueHotelDatepicker from 'vue-hotel-datepicker'

export default {
    name: 'app',
    data () {
        return {
            datepickerId: 'datepicker-demo-id-01',
            placeholder: 'Выберите интерал',
            checkedtwo: 1,
            checkedtwotype: 1,
            ptBr: {
                night: 'Noite',
                nights: 'Noites',
                'day-names': ['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.'],
                'check-in': 'С',
                'check-out': 'По',
                 button: 'Закрыть',
                 startOfWeek: 'monday',
                 selected: 'Your stay:',
                'month-names': ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                },
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
    components: {
        VueHotelDatepicker,
    },
}
</script>
