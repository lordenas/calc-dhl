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
        <div class="typestore-icon" v-if="!this.$store.state.flagBasketContainer">
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

		<div class="radio-btn-group client-urlic" v-show="presoptionStateFace == 1">
			<div class="radio"><input type="radio" name="radio" value="1" checked="checked" v-model="checked" id="one" /><label for="one">Новый клиент</label></div>
			<div class="radio"><input type="radio" name="radio" value="2" v-model="checked" id="two"  /><label for="two">Действующий клиент</label></div>
		</div>
                <b-form @submit="onSubmitValid">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">ФИО</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Телефон</label>
                        <div class="col-sm-9">
                            <input class="form-control" id="us-phone-number-ex" type="text" placeholder="+7 (000)-000-0000"
                            v-mask="'+7(###)-###-####'"
                            v-model="telephone"
                            />
                        </div>
                    </div>
                    
                    <div class="form-group row"
                            id="exampleInputGroup1"
                            label="Email address:"
                            label-for="exampleInput1"
                            description="We'll never share your email with anyone else."
                            >
                        <label for="staticEmail" class="col-sm-3 col-form-label">Email<span class="redstar">*</span></label>
                        <div class="col-sm-9 text-left">
                        
                            <b-form-input id="exampleInput1"
                            type="email"
                            v-model="email"
                            required
                            @input="validmail">
                            </b-form-input>
                            <div v-show="classNoValid" class="classNoValid">Введите почту</div>
                        </div>
                    </div>
                    <div class="col-sm-12 text-left">
                        <b-form-checkbox id="checkbox1"
                            v-model="status"
                            value="accepted"
                            unchecked-value="not_accepted">
                        Я принимаю условия доставки
                        </b-form-checkbox>
                    </div>
            </b-form>
        <template v-if="!this.$store.state.flagBasketContainer">
            <div v-if="checked == 1">
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
                        <label for="staticEmail" class="col-sm-5 col-form-label">Документ, на основании которого, лицо действует от имени юридического лица</label>
                        <div class="col-sm-7">
                            <input type="text"  @input="consoleinput" class="form-control" >
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
        </template>
		<div id="div-registr" v-if="this.$store.state.backetData.length > 0">
			<registration v-show="calcRegistrGet"></registration>
			<a href="#div-sank" v-show="calcRegistrGet" v-smooth-scroll>
				<div style="width: 95%" @click="onSubmitValid()" class="typepost-but-succes button-next">{{ this.presoptionStateBay == 1 ? 'Отправить' : 'Отправить и оплатить'}}</div>
			</a>
		</div>
        <sank id="div-sank" v-if="classNoValid"></sank>

    </div>
</template>
<script>
    import {mapMutations} from 'vuex';
    import {mapGetters} from 'vuex';
	import VueMask from 'v-mask'
    import sank from './sank'
    export default {
        name: 'app',
        data () {
            return {
                telephone: '',
                email: '',
                validemeil: false,
                classNoValid: false,
                status: 'not_accepted',
                checked: 1
            }
        },
        computed: {
            ...mapGetters([
            'presoptionStateFace', 'presoptionStateBay', 'calcRegistrGet'
            ])
        },
        methods: {
            ...mapMutations([
                'presoptionFace', 'presoptionBay', 'onSubmit'
            ]),
            consoleinput (evt) {
                this.$store.state.documentUrlico = evt.target.value
                //console.log(evt.target.value, '-', this.$store.state.documentUrlico)
            },
            validmail() {
                let validMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
                this.validemeil = validMail.test(this.email)
            },
            onSubmitValid() {
                if(this.validemeil) {
                    this.classNoValid = true
                    this.onSubmit(this.validemeil)
                } else {
                    this.classNoValid = false
                    this.onSubmit(this.validemeil)
                }
            }
        },
        components: {
            sank
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
    .classNoValid {
        color: red;
    }
    .client-urlic {
        margin: 50px 0;
    }
</style>
