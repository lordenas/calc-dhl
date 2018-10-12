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
				<div class="form-group row">
					<label for="staticEmail" class="col-sm-3 col-form-label" v-bind:class="[presoptionState == 3 ? 'col-sm-5' : 'col-sm-3']">Тип груза</label>
					<div class="col-sm-5">
						<select class="custom-select" id="inputGroupSelect01" v-model="presoptionState"  @input="getCategoryChanges">
							<option :value="1">Документы</option>
							<option :value="2">Груз</option>
							<option :value="3">Контейнер</option>
						</select>
					</div>
					<div  v-bind:class="[presoptionState == 3 ? 'col-sm-7' : 'col-sm5-']">
						<div v-show="presoptionState == 1" class="typepost-type-select-val col-form-label">Бумажные листы любого формата</div>
					</div>
				</div>
			</div>
			<div class="form-group row" v-show="presoptionState != 3">
				<label for="staticEmail" class="col-sm-3 col-form-label">Вес груза</label>
				<div class="col-sm-2">
					<input type="text" v-model="weightel" v-bind:class="[ weightel < this.$store.state.minweight || weightel > 50  ? 'redinput' : false ]" class="form-control" @input="weight">
				</div>
				<div class="col-sm-7">
					<div class="typepost-type-select-valRed col-form-label" v-show="weightel < this.$store.state.minweight">Минимальный оплачиваемый вес одного места {{this.$store.state.minweight}}кг</div>
					<div class="typepost-type-select-valRed col-form-label" v-show="weightel > 50">Максимальный вес одного места 50кг</div>
				</div>
			</div>
			<div class="ng-untouched ng-valid ng-dirty"  v-show="presoptionState == 2">
				<div class="box-sizing" style="background-image:url('/img/7.png'); background-size: 575px; margin: 0 0 15px 0;">
					<div class="box-sizing__property-name">Длина</div>
					<div class="box-sizing__property-name" style="top:60%;left:auto;right:650px;">Высота</div>
					<div class="box-sizing__property-name" style="top:190px;left:635px;">Ширина</div>
					<div class="box-sizing__title">Габариты (см)</div>
					<div class="box-sizing__hint"> </div>
					<div v-show="validblock" class="box-sizing__error">{{validblock}}</div>
					<div class="box-sizing__dimensions" v-bind:class="{ valid: validblock}">
						<span class="ng-untouched ng-valid ng-dirty">
							<input type="text" v-model="height"  class="box-sizing__field ng-valid ng-dirty ng-touched" @input="heighttel">
						</span>
						<span class="box-sizing__separator">х</span>
						<span  class="ng-untouched ng-valid ng-dirty">
							<input v-model="width" class="box-sizing__field ng-valid ng-dirty ng-touched" type="text" @input="widthtel">
						</span>
						<span class="box-sizing__separator">х</span>
						<span  class="ng-untouched ng-valid ng-dirty">
							<input v-model="depth" class="box-sizing__field ng-valid ng-dirty ng-touched" type="text" @input="depthtel">
						</span>
					</div>
				</div>
				<div  style=" margin: 0 0 35px 0;">Максимально допустимые размеры - 120x80x80см</div>
			</div>
			<div v-show="presoptionState == 3">
				<container></container>
			</div>
			<div v-show="presoptionState != 3">
				<div class="textareainfo">
					<textarea class="standinput" placeholder="Описание вложения"></textarea>
				</div>
			</div>
		</div>
		<div class="typepost-but">
			<div class="typepost-but-cancel" @click="cancelInfo">Отмена</div>
			<div class="typepost-but-succes"  @click="getToBacket">Подтвердить</div>
		</div>
	</div>
</template>
<script>
	import {mapMutations} from 'vuex';
	import {mapGetters} from 'vuex';
	import container from './container.vue'
	
	export default {
	    name: 'app',
	    data () {
	        return {
	            selecteded: 1,
	            weightel: '',
	            height: '',
	            width: '',
	            depth: '',
	            flagGabatir: false,
	            flagWeight: false
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
	        },
	
	        validWiight () {
	            if ( this.weightel < 0.5 || this.weightel > 50) {
	                this.flagWeight = false
	            } else {
	                this.flagWeight = true
	            }
	        }
	    },
	    methods: {
	        ...mapMutations([
	            'presoption', 'backetDataArr', 'selecttarif', 'addTobasketHide', 
	        ]),
	        cancelInfo () {
	            this.addTobasketHide()
	        },
	        getCategoryChanges (e) {
	            //console.log(e.target.value)
	            this.presoption(e.target.value)
	        },
	        getToBacket() {
	            if (this.presoptionState == 1) {
	                let gabarit = {gabarit: null, weightel: this.weightel}
	
	                if(this.weightel < 0.5 || this.weightel > 50) {
	                    return false 
	                } else {
						 this.backetDataArr(gabarit); 
	                    this.addTobasketHide()
	                    
	                }
	                
	            } else if (this.presoptionState == 2) {
	                let gabarit = {gabarit: this.height + 'x' + this.width + 'x' + this.depth + ' см', weightel: this.weightel}
	
	                this.weightel < 0.5 || !this.flagGabatir
	                ? false
	                : this.backetDataArr(gabarit); 
	            } if (this.presoptionState == 3) {
					console.log('dddddddd')
					 let gabarit = {gabarit: null, weightel: '-'}
					 this.backetDataArr(gabarit); 
				}
	           //this.selecttarif()
	           //скрываем блок после добавление товара в корзину
	
	
	            if(this.flagGabatir) {
	                this.addTobasketHide()
	            } else {
	                return false
	            }
	        }
	    },
	    components: {
	        container
	    }
	}
</script>
<style scop>
	.col-form-label {
	text-align: right;
	}
</style>

