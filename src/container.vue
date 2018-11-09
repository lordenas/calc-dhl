

<template>
	<form class="needs-validation" novalidate>
		<div class="form-group row">
			<label for="staticEmail" class="col-sm-5 col-form-label">Контакт<span class="redstar">*</span></label>
			<div class="col-sm-7">
				<select class="custom-select" id="inputGroupSelect01">
					<option selected>Выберите значение</option>
					<option value="1">Брокер</option>
				</select>
			</div>
		</div>
		<b-form @submit="onSubmitValid">
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Название фабрики / место загрузки<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder="Введите данные"
                        required
						@input="Update($event, 'nazfabric')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Контактное лицо на месте загрузки<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'contactlico')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Имя, под которым Вы известны поставщику<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'imapostizv')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Маркировка груза (№ заказа, инвойса, имя заказчиа)<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'markgruznomer')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Общий объём груза<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'obshobg')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Общий вес груза<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'obshves')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Общая стоимость груза<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'obshstoimgruz')"
						>
                        </b-form-input>
                </div>
            </div>
			<br>
				<h5>Расчет таможенного оформления</h5>
			<br>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Код товара по ТНВЭД<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'kodtovaratnved')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Полное наименование товара, технические характеристики, материал, размеры, назначение (ГРАФА 31)<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'kodtovaratnved')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Модель или Артикул</label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'modelartic')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Торговая марка<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'torgmark')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Фирма-производитель (на английском языке) полное написание<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'firmaproz')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Страна и адрес производителя</label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'stranaiadresproz')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Грузовые места</label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'gruzmest')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Количество единиц<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'koledinic')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Количество шт. м, м2, и т.д.<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'kolshtuk')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Вес брутто<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'vesbruto')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Вес нетто</label>
                <div class="col-sm-7">
                    <b-form-input 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						@input="Update($event, 'vesneto')"
						>
                        </b-form-input>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Указать наличие разрешительной документаци (сертификат, СЭЗ, пожарный)<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-textarea 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						:value="this.$store.state.conteiner.nalradov"
						@input="Update($event, 'nalradov')"
						>
                        </b-form-textarea>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Как упаковано<span class="redstar">*</span></label>
                <div class="col-sm-7">
                    <b-form-textarea 
                        id="exampleInput3"
                        type="text"
                        placeholder=""
                        required
						:value="this.$store.state.conteiner.kakupak"
						@input="Update($event, 'kakupak')"
						>
                        </b-form-textarea>
                </div>
            </div>
			<div class="row">
				<div class="col-sm-6">
					<b-button @click="cancelInfo" class="btn typepost-but-cancel button-next" variant="primary">Отмена</b-button>
				</div>
				<div class="col-sm-6">
					<b-button type="submit" class="typepost-but-succes button-next" variant="primary">Подтвердить</b-button>
				</div>
			</div>
		</b-form>



	


		<!-- <div class="form-group row">
			<div class="col-auto my-1">
				<div class="custom-control custom-checkbox mr-sm-3">
					<input type="checkbox" class="custom-control-input" id="hrup">
					<label   class="custom-control-label" for="hrup"><img src="/img/grup.png" style="margin: 0 5px" width="20px"/>Хрупкое</label>
				</div>
			</div>
			<div class="col-auto my-1">
				<div class="custom-control custom-checkbox mr-sm-3">
					<input type="checkbox" class="custom-control-input" id="oblic">
					<label   class="custom-control-label" for="oblic"><img src="/img/plus-big-512.png" style="margin: 0 5px" width="20px"/>Добавить облицовку упаковки</label>
				</div>
			</div>
			<div class="col-auto my-1">
				<span style="color: red;">* Поля обязательные для заполнения</span>
			</div>
		</div> -->
	</form>
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
	        flagGabatir: false,
			flagWeight: false,
			nazfabric: ''
	    }
	},
	computed: {
		
	},
	methods: {
	    ...mapMutations([
	        'presoption', 'backetDataArr', 'selecttarif', 'addTobasketHide', 
		]),
		Update(evt,item) {
			//console.log(ind)
			//console.log(evt)
			this.$store.state.conteiner[item] = evt
			console.log(this.$store.state.conteiner[item])
		},
		onSubmitValid() {
			console.log('fff')
			this.$store.state.conteiner.returnvalid()
			let gabarit = {gabarit: null, weightel: '-'}
			this.backetDataArr(gabarit); 
			this.addTobasketHide()
		},
	    cancelInfo () {
	        this.addTobasketHide()
	    },
	}
	}
</script>

<style>
	.btn-primary{
		color: #333 !important;
		border: 1px solid #e2e2e2 !important;
		box-shadow: 0 2px 0 0 rgba(188, 194, 189, 0.2) !important;
	}
</style>
