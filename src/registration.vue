<template>
   <div>
        <div class="title-block-new">
            <div class="div-block-51 _500 w-clearfix">
                <div class="heading-text-block _500">
                <div class="div-line"></div>
                <div class="div-rad"></div>
                <div class="div-block-50"></div>
                <div class="div-rad min"></div>
                <h2 class="heading-13">Укажите данные о себе<br></h2>
                </div>
            </div>
        </div>

        <div class="form-group row">
			<label for="staticEmail" class="col-sm-3 col-form-label">ФИО</label>
			<div class="col-sm-9">
				<input type="text" class="form-control" >
			</div>
		</div>
        <div class="form-group row">
			<label for="staticEmail" class="col-sm-3 col-form-label">Телефон</label>
			<div class="col-sm-9">
				<input type="text" class="form-control" >
			</div>
		</div>
        <div class="form-group row">
			<label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
			<div class="col-sm-9">
				<input type="text" class="form-control" >
			</div>
		</div>
        <div class="typestore-icon">
                <div class="typestore-icon-step" v-on:click="presoptionFace(1)">
                    <div class="typestore-icon-step-radio" v-bind:class="{ active: presoptionStateFace == 1 }" @click="presoptionFace(1)"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active" >
                            <img src="img/yr1.png" />
                        </div>
                        <span>Юр. лицо или ИП</span>
                    </div>
                </div>
                <div class="typestore-icon-step" v-on:click="presoptionFace(2)">
                    <div class="typestore-icon-step-radio" v-bind:class="{ active: presoptionStateFace == 2 }" @click="presoptionFace(2)"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active" >
                            <img src="img/fiz1.png" />
                        </div>
                        <span>Физ. лицо</span>
                    </div>
                </div>
        </div>

        <div class="typepost" v-show="presoptionStateFace == 1">
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Наименование Вашей компании</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" >
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">Юридический адрес Вашей компании</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" >
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-5 col-form-label">ФИО генерального директора</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" >
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-1 col-form-label">ИНН</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" >
                </div>
                <label for="staticEmail" class="col-sm-1 col-form-label">КПП</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" >
                </div>
            </div>
            <br>
            <h5>Банковские реквизиты</h5>
            <br>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-1 col-form-label">Банк</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" >
                </div>
                <label for="staticEmail" class="col-sm-1 col-form-label">БИК</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" >
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-1 col-form-label">К/С</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" >
                </div>
                <label for="staticEmail" class="col-sm-1 col-form-label">Р/С</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" >
                </div>
            </div>
        </div>
         
        <div class="title-block-new" v-show="presoptionStateFace == 1">
            <div class="div-block-51 _500 w-clearfix">
                <div class="heading-text-block _500">
                <div class="div-line"></div>
                <div class="div-rad"></div>
                <div class="div-block-50"></div>
                <div class="div-rad min"></div>
                <h2 class="heading-13">Куда доставить оригиналы документов?<br></h2>
                </div>
            </div>
        </div>

        <div class="typepost" v-show="presoptionStateFace == 1">
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-1 col-form-label">Страна</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" >
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-1 col-form-label">Город</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" >
                </div>
                <label for="staticEmail" class="col-sm-1 col-form-label">Индекс</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" >
                </div>
            </div>

        </div>


        <div class="title-block-new">
            <div class="div-block-51 _500 w-clearfix">
                <div class="heading-text-block _500">
                <div class="div-line"></div>
                <div class="div-rad"></div>
                <div class="div-block-50"></div>
                <div class="div-rad min"></div>
                <h2 class="heading-13">Выберите способ оплаты<br></h2>
                </div>
            </div>
        </div>

        <div class="typestore-icon">
                <div class="typestore-icon-step" v-on:click="presoptionBay(1)">
                    <div class="typestore-icon-step-radio" v-bind:class="{ active: presoptionStateBay == 1 }" @click="presoptionBay(1)"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active" >
                            <img src="img/nal.png" />
                        </div>
                        <span>Наличными курьеру</span>
                    </div>
                </div>
                <div class="typestore-icon-step" v-on:click="presoptionBay(2)">
                    <div class="typestore-icon-step-radio" v-bind:class="{ active: presoptionStateBay == 2 }" @click="presoptionBay(2)"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active" >
                            <img src="img/kart.png" />
                        </div>
                        <span>Картой онлайн</span>
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
        'presoptionStateFace', 'presoptionStateBay'
        ])
    },
    methods: {
        ...mapMutations([
            'presoptionFace', 'presoptionBay'
        ])
    },
    components: {
    },
}
</script>

<style scoped>
    .col-form-label {
        text-align: left;
    }
    .typestore-icon-step {
        width: 45%;
    }
</style>
