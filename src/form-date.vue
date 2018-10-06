

<template>
	<div class="boxdates">
		<div class="todate">
			<div class="todate-title">Когда отправить груз?</div>

			<div v-show="showModal">
				<div class="modal-mask">
					<div class="modal-wrapper">
						<div class="modal-container">
							<button class="calendar__close" @click="[showModal = false]">
							OK
							</button>
							<div class="modal-header">
								<slot name="header">
									<h6 slot="header">Когда вы готовы передать груз?</h6>
								</slot>
							</div>
							<div class="modal-body">
								<slot name="body">
								</slot>
								<template>
									<div id="app">
										<v-date-picker
											mode='single'
											tint-color='#404040'
											show-caps
											:min-date='new Date()'
											v-model='selectedDate'
											:theme-styles='themeStyles'
											is-inline>
										</v-date-picker>
									</div>
								</template>
							</div>
							<div class="modal-footer">
								<slot name="footer">
									<div class="calendar__time-block">
										<div class="calendar__time-title">Удобный временной диапазон</div>
										<div class="calendar__time-radio-block">
											<button class="calendar__time-radio-item" v-bind:class="{ active: dateStatePosition == 1 }" v-on:click="dateState(1)">
												<div class="calendar__time-radio-item-img"></div>
												<span>С 09:00 до 14:00</span>
											</button>
											<button class="calendar__time-radio-item" v-bind:class="{ active: dateStatePosition == 2 }"  v-on:click="dateState(2)">
												<div class="calendar__time-radio-item-img"></div>
												<span>С 12:00 до 19:00</span>
											</button>
											<button class="calendar__time-radio-confirm" @click="selectedDateMeth">Подтвердить</button>
										</div>
									</div>
								</slot>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="options__field-wrap todate-activedate">
				<div>
					<button id="show-modal" @click="showModal = true" class="datepicker-button" style="background-image:url('/img/9.png'); background-size: 20px;">
					<span  class="datepicker-button__text">{{this.$store.state.selectedDate}} - {{this.$store.state.curentTime == 1 ? 'С 09:00 до 14:00' : 'С 12:00 до 19:00'}}</span>
					</button>
				</div>
			</div>
			<!-- use the modal component, pass in the prop -->
		</div>
		<div class="textareainfo">
			<div class="todate-title">Комментарий к заказу</div>
			<textarea class="standinput" placeholder="Комментарий"></textarea>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	
	import {mapMutations} from 'vuex';
	import {mapGetters} from 'vuex';
	
	import VCalendar from 'v-calendar'
	import 'v-calendar/lib/v-calendar.min.css'
	
	Vue.use(VCalendar);
	Vue.component('modal', {template: '#modal-template'})
	
	export default {
	    data() {
	        return {
	            showModal: false,
	            selectedDate: new Date(),
	            dates: Date(),
	            key: 'today',
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
	        }
	    },
	    computed: {
	        ...mapGetters([
	            'dateStatePosition', 'dateCalenStatePosition'
	        ])
	    },
	    methods: {
	        ...mapMutations([
	            'dateState', 'calendarState'
	    ]),
	    selectedDateMeth () {
	        this.showModal = false
	        this.calendarState(this.selectedDate)
	    }
	},
	}
</script>
<style>
	.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5);
	display: table;
	transition: opacity .3s ease;
	}
	.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
	}
	.modal-container {
	width: 340px;
	margin: 0px auto;
	padding: 0px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	transition: all .3s ease;
	font-family: Helvetica, Arial, sans-serif;
	}
	.modal-header {
	padding: 10px 20px;
	}
	.modal-header h3 {
	margin-top: 0;
	color: #42b983;
	}
	.modal-body {
	margin: 0px 0;
	}
	.modal-default-button {
	float: right;
	}
	.modal-footer {
	margin: 10px 0;
	}
	/*
	* The following styles are auto-applied to elements with
	* transition="modal" when their visibility is toggled
	* by Vue.js.
	*
	* You can easily play with the modal transition by editing
	* these styles.
	*/
	.modal-enter {
	opacity: 0;
	}
	.modal-leave-active {
	opacity: 0;
	}
	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
	}
	.h6, h6 {
	font-size: 1.1rem;
	color: #42b983;
	}
</style>

