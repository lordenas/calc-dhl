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
                <div class="typestore-icon-step" >
                    <div class="typestore-icon-step-radio"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active" >
                            <img src="img/yr1.png" />
                        </div>
                        <span>Юр. лицо или ИП</span>
                    </div>
                </div>
                <div class="typestore-icon-step" >
                    <div class="typestore-icon-step-radio"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active" >
                            <img src="img/fiz1.png" />
                        </div>
                        <span>Физ. лицо</span>
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
                <div class="typestore-icon-step" >
                    <div class="typestore-icon-step-radio"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active" >
                            <img src="img/nal.png" />
                        </div>
                        <span>Наличными курьеру</span>
                    </div>
                </div>
                <div class="typestore-icon-step" >
                    <div class="typestore-icon-step-radio"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active" >
                            <img src="img/kart.png" />
                        </div>
                        <span>Картой онлайн</span>
                    </div>
                </div>
        </div>



         <div class="typepost">
             
                <div class="typepost-body">
                    
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

    },
    methods: {

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
