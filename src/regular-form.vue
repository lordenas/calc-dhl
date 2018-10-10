<template>
	<div>
		<div v-show="showModalregS">
			<div class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">
						<button class="calendar__close" @click="[showModalregS = false]">
						OK
						</button>
						<div class="modal-header">
							<slot name="header">
								<h6 slot="header">Укажите дату началаповтоения</h6>
							</slot>
						</div>
						<div class="modal-body">
							<slot name="body">
							</slot>
							<v-date-picker
								:available-dates='{ start: new Date(), end: null }'
								tint-color='#30507e'
								v-model='selectedDate'
								is-inline>
							</v-date-picker>
						</div>
						<slot name="footer">
								<div class="calendar__time-block">
									<div class="calendar__time-radio-block">
										<button class="calendar__time-radio-confirm" @click="selectedDateMeth">Подтвердить</button>
									</div>
								</div>
						</slot>
					</div>
				</div>
			</div>
		</div>
		<div v-show="showModalregD">
			<div class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">
						<button class="calendar__close" @click="[showModalregD = false]">
						OK
						</button>
						<div class="modal-header">
							<slot name="header">
								<h6 slot="header">Укажите дату начала повтоения</h6>
							</slot>
						</div>
						<div class="modal-body">
							<slot name="body">
							</slot>
							<v-date-picker
								:available-dates='{ start: new Date(), end: null }'
								tint-color='#30507e'
								v-model='selectedDate'
								is-inline>
							</v-date-picker>
						</div>
                        <slot name="footer">
								<div class="calendar__time-block">
									<div class="calendar__time-radio-block">
										<button class="calendar__time-radio-confirm" @click="selectedDateMethD">Подтвердить</button>
									</div>
								</div>
						</slot>
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
					<h2 class="heading-13">Регулярная доставка<br></h2>
				</div>
			</div>
		</div>
		<div class="typepost">
			<div class="typepost-body">
				<template>
					<div class="input-group mb-3">
						<label class="regulat-lab">Как часто отправлять?</label>
						<select v-model="periodselect" class="custom-select" id="inputGroupSelect01" @input="periodToStore">
							<option selected :value="30">Каждый день</option>
							<option :value="4">Раз в неделю</option>
							<option :value="1">Раз в месяц</option>
						</select>
					</div>
					<div class="input-group mb-3">
						<label class="regulat-lab">Время забора документов</label>
						<select class="custom-select" id="inputGroupSelect01">
							<option selected>Выберите значение</option>
							<option value="1">09:00 - 18:00</option>
							<option value="2">09:00-14:00</option>
							<option value="3">14:00-18:00</option>
						</select>
					</div>
					<div class="input-group mb-3">
						<label class="regulat-lab">Начинать повторение с:</label>
                        <div class="options__field-wrap todate-activedate">
                            <div>
                                <button id="show-modal" @click="showModalregS = true" class="datepicker-button" style="background-image:url('/img/9.png'); background-size: 20px;">
                                <span  class="datepicker-button__text">{{dateCalenStatePositionRS}}</span>
                                </button>
                            </div>
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
	import Vue from 'vue';
    import VCalendar from 'v-calendar'
	import 'v-calendar/lib/v-calendar.min.css'
	
	Vue.use(VCalendar);
	Vue.component('modalS', {template: '#modal-templateS'})
	export default {
	    name: 'app',
	    data () {
	        return {
                showModalregS: false,
                showModalregD: false,
                selectedDate: new Date(),
	            themeStyles: {
	                wrapper: {
	                border: '1',
	                },
	                header: {
	                color: '#fafafa',
	                backgroundColor: '#636363',
	                borderColor: '#006cd8',
	                borderWidth: '1px 1px 0 1px',
	                },
	                headerVerticalDivider: {
	                borderLeft: '1px solid #006cd8',
	                },
	                weekdays: {
	                color: '#ffffff',
	                backgroundColor: '#434343',
	                borderColor: '#ff0098',
	                borderWidth: '0 1px',
	                padding: '5px 0 10px 0',
	                },
	                weekdaysVerticalDivider: {
	                borderLeft: '1px solid #636363',
	                },
	                weeks: {
	                border: '1px solid #dadada',
	                },
				},
				periodselect: 1
	        }
	    },
	    computed: {
	        ...mapGetters([
                'dateCalenStatePositionRS', 'dateCalenStatePositionRD', 'periodGetState'
	        ])
	    },
	    methods: {
	        ...mapMutations([
                'calendarStateRegS',   'calendarStateRegD', 'periodMut'
            ]),
            selectedDateMeth () {
                this.showModalregS = false
                this.calendarStateRegS(this.selectedDate)
            },
            selectedDateMethD () {
                this.showModalregD = false
                this.calendarStateRegD(this.selectedDate)
			},
			periodToStore(e) {
				//this.periodMut(this.periodselect)
				this.periodMut(e.target.value)
				//this.$store.state.period = this.periodselect
			}
	    },
	    components: {
	        
	    },
	}
</script>

<style scoped>
.options__field-wrap {
    width: 300px;
}
</style>
