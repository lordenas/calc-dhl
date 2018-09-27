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
               <div class="typepost">
                <div class="typepost-body">
                    <div class="typepost-type">
                        <div class="typepost-type-title">Тип груза</div>
                        <div class="typepost-type-select">
                            <div class="typepost-type-select-selecter">
                              <select class="standinput" v-model="presoptionState"  @input="getCategoryChanges">
                                  <option :value="1">Документы</option>
                                  <option :value="2">Груз</option>
                              </select>
                            </div>
                            <div class="typepost-type-select-val">Бумажные листы любого формата</div>
                        </div>
                    </div>
                    <div class="typepost-type">
                        <div class="typepost-type-title">Вес груза (кг.)</div>
                        <div class="typepost-type-variator">
                          <div class="typepost-type-select-selecter">
                              <input type="text" v-model="weightel"  v-bind:class="[ weightel < 0.5 ? 'redinput' : false ]" class="standinput" @input="weight">
                          </div>
                          <div class="typepost-type-variator-bool">
                              <div class="typepost-type-select-valRed" v-show="weightel < 0.5">Минимальный оплачиваемый вес одного места 0.5кг</div>
                          </div>
                        </div>
                    </div>



                    <div class="ng-untouched ng-valid ng-dirty"  v-show="presoptionState == 2">
                        <div class="box-sizing" style="background-image:url('/img/7.png'); background-size: 575px; margin: 0 0 45px 0;">
                            <div class="box-sizing__property-name">Длина</div>
                            <div class="box-sizing__property-name" style="top:60%;left:auto;right:610px;">Высота</div>
                            <div class="box-sizing__property-name" style="top:190px;left:595px;">Ширина</div>
                            <div class="box-sizing__title">Габариты (см)</div>
                            <div class="box-sizing__hint"> </div>
                            <div v-show="validblock" class="box-sizing__error">{{validblock}}</div>
                            <div class="box-sizing__dimensions" v-bind:class="{ valid: validblock}">
                                <wcc-piece-edit-dimensions-input class="ng-untouched ng-valid ng-dirty">
                              <input type="text" v-model="height"  class="box-sizing__field ng-valid ng-dirty ng-touched" @input="heighttel">
                                </wcc-piece-edit-dimensions-input>
                                <span class="box-sizing__separator">х</span>
                                <wcc-piece-edit-dimensions-input  class="ng-untouched ng-valid ng-dirty">
                                    <input v-model="width" class="box-sizing__field ng-valid ng-dirty ng-touched" type="text" @input="widthtel">
                                </wcc-piece-edit-dimensions-input>
                                <span class="box-sizing__separator">х</span>
                                <wcc-piece-edit-dimensions-input  class="ng-untouched ng-valid ng-dirty">
                                    <input v-model="depth" class="box-sizing__field ng-valid ng-dirty ng-touched" type="text" @input="depthtel">
                                </wcc-piece-edit-dimensions-input>
                            </div>
                        </div>
                    </div>

                    <div class="typepost-but">
                        <div class="typepost-but-cancel">Отмена</div>
                        <div class="typepost-but-succes"  @click="getToBacket">Готово</div>
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
            selecteded: 1,
            weightel: '',
            height: '',
            width: '',
            depth: '',
            flagGabatir: false
        }
    },
    computed: {
        ...mapGetters([
        'presoptionState'
        ]),
        weight() {
            //console.log( this.weightel.replace(',','.').replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, ''))
            this.weightel = this.weightel.replace(',','.').replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, '');
        },
        heighttel() {
            console.log( this.height.replace(',','.').replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, ''))
            this.height = this.height.replace(',','.').replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, '');
        },
        widthtel() {
            //console.log( this.weightel.replace(',','.').replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, ''))
            this.width = this.width.replace(',','.').replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, '');
        },
        depthtel() {
            //console.log( this.weightel.replace(',','.').replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, ''))
            this.depth = this.depth.replace(',','.').replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, '');
        },
        validblock () {
            if(this.height > 120 || this.width > 80 || this.depth > 80) {
                this.flagGabatir = false
                return 'Максимально допустимые размеры - 120x80x80см'
            } else if (this.height == 0 || this.width == 0 || this.depth == 0) {
                this.flagGabatir = false
                return 'Минимально допустимый размер - 1см'
            } else if ( this.height == '' || this.width == '' || this.depth == '') { 
                this.flagGabatir = false
                 return 'Минимально допустимый размер - 1см'
            } else {
                this.flagGabatir = true
                return false
            }
        }
    },
    methods: {
        ...mapMutations([
            'presoption', 'backetDataArr', 'selecttarif', 'addTobasketHide', 
        ]),
        getCategoryChanges (e) {
            //console.log(e.target.value)
            this.presoption(e.target.value)
        },
        getToBacket() {
            if (this.presoptionState == 1) {
                let gabarit = {gabarit: null, weightel: this.weightel}

                this.weightel < 0.5
                ? false
                : this.backetDataArr(gabarit)
            } else {
                let gabarit = {gabarit: this.height + 'x' + this.width + 'x' + this.depth + ' см', weightel: this.weightel}

                this.weightel < 0.5 || !this.flagGabatir
                ? false
                : this.backetDataArr(gabarit)
            }
           //this.selecttarif()
           //скрываем блок после добавление товара в корзину
           this.addTobasketHide()
        }
    },
}
</script>

