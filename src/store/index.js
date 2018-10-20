import Vue from 'vue';
import Vuex from 'vuex';
import step from './indexstep'
import regular from './regular-store'
import registrfinal from './registfinal'
import backed from './backed'
import { calctarifOne , calcTariImport } from '../methods/calctarif'

import {
    format
} from 'util';
const tarifzone = require('../json/tarifzone.json')
const pricelist = require('../json/pricelist.json')
const srochtarig = require('../json/srochtarig.json')
const tarifimport = require('../json/tarifimport.json')
const cityzone = require('../json/countrytarif.json')


Vue.use(Vuex);
let newdata = new Date()
export const store = new Vuex.Store({
    modules: {
        step,
        regular,
        registrfinal,
        backed,
    },
    state: {
        curentvalue: 1, //тип документы или груз
        curentTime: 1, //время
        backetData: [],
        selectedDate: (newdata.getDate() < 10 ? '0' : '') + newdata.getDate() + '.' + ((newdata.getMonth() + 1) < 10 ? '0' : '') + (newdata.getMonth() + 1) + '.' + newdata.getUTCFullYear(),
        gabarit: null,
        weight: null, //вес
        gabarits: { //габариты
            height: null,
            width: null,
            depth: null
        },
        valueCitySending: null, //город отправитель код
        valueCityReception: null, // город получатель код
        tarifzonevalue: null, //тарифная зона
        tarifcalc: 0,
        finalCalchide: false,
        express: 1, //экспресс доставка или несрочная
        import: false, //доставка в другие страны
        minweight: 0.5, // минимальный допустимый вес
        countryset: null,
        countrySeter: null, // номер страны римский
        calcEdTarif: 0, //стоимость одной позиции товара
        citySetText: '', //город отправитель текст
        cityGetText: '', //город получатель текст
        countrySetText: 'России', //страна отправитель текст
        countryGetText: 'Россию', //страна получатель текст
        indexSet: '', //индекс отправитель
        indexGet: '', //индекс получатель
        flagConteiner: false, //флаг если выбрали контейнер
        flagBasketContainer: false,
        documentUrlico: '____________________________',
        vliceinput: '____________________________',
        zakazchik: '____________________________',
        inn: '',
        kpp: '',
        ogrn: '',
        rschet: '',
        kschet: '',
        bank: '',
        bik: '',
        tel: '',
        mailPoshta: '',
        
    },
    getters: {
        backetDataState(state) {
            return state.backetData; // корзина
        },
        //есть в корзине котейнер
        conteinerBool (state) {
            return state.flagBasketContainer
        },
        getImport(state) {
            return state.import //доставка в другие страны
        },
        getExpress(state) {
            return state.express //экспресс 
        },
        presoptionState(state) {
            return state.curentvalue; // переключатель докумет или груз
        },
        dateStatePosition(state) {
            return state.curentTime; // переключатель времени 
        },
        dateCalenStatePosition(state) {
            return state.selectedDate.getUTCFullYear() + ' - ' + state.selectedDate.getUTCFullYear(); // выбор даты 
        },
        tarifcalcState(state) {
            return state.tarifcalc
        },
        finalCalchideState(state) {
            return state.finalCalchide
        },
        


    },
    mutations: {
        onSubmit(state, valid) {
            if (valid) {
                //alert('Отправлено')
            } else {
                alert('Укажите почту')
            }
        },
        conteinerBoolMet (state) {
            for (let a = 0; a < state.backetData.length; a++) {

                if(state.backetData[a].title == "3") {
                    state.flagBasketContainer = true
                    console.log('TEST5', JSON.parse(JSON.stringify(state.backetData[a])))
                    console.log(state.flagBasketContainer)
                    break
                } else {
                    console.log('TEST6', JSON.parse(JSON.stringify(state.backetData[a])))
                    state.flagBasketContainer = false
                }
               
            }
        },
        deletepost(state, index) {
            state.backetData.splice(index, 1)
            if(state.backetData.length > 0) {
                for (let a = 0; a < state.backetData.length; a++) {

                    if(state.backetData[a].title == "3") {
                        state.flagBasketContainer = true
                        console.log('TEST5', JSON.parse(JSON.stringify(state.backetData[a])))
                        console.log(state.flagBasketContainer)
                        break
                    } else {
                        console.log('TEST6', JSON.parse(JSON.stringify(state.backetData[a])))
                        state.flagBasketContainer = false
                    }
                
                }
            } else {
                state.flagBasketContainer = false
            }
        },
        backetDataArr(state, gabarit) {
            state.backetData.push({
                title: this.state.curentvalue,
                parametr: gabarit.weightel + ' кг.',
                gabarit: gabarit.gabarit,
                price:  state.import ? 
                calcTariImport(gabarit, state.import, state.valueCitySending, state.valueCityReception, state.countrySeter, gabarit.weightel + ' кг.')
                :
                calctarifOne(gabarit, state.express, state.tarifzonevalue,  gabarit.weightel + ' кг.')
            })
            for (let a = 0; a < state.backetData.length; a++) {

                if(state.backetData[a].title == "3") {
                    state.flagBasketContainer = true
                    console.log('TEST5', JSON.parse(JSON.stringify(state.backetData[a])))
                    console.log(state.flagBasketContainer)
                    break
                } else {
                    console.log('TEST6', JSON.parse(JSON.stringify(state.backetData[a])))
                    state.flagBasketContainer = false
                }

            }
        },
        //расчет тарифа при отправке загранцу
        importcalc(state) {
            
            if (state.import) {

                //сначала находим зону города
                var zonecity = null
                //console.log('ОТПРАВКА ЗА ГРАНИЦУ', state.valueCitySending)
                var citynot = state.valueCitySending == null ? state.valueCityReception :  state.valueCitySending 

                for (let i = 0; i < cityzone.countrytarif.length; i++) {
                    if (citynot == cityzone.countrytarif[i].cityid) {
                        var newarrc = []
                        newarrc.push(cityzone.countrytarif[i])
                        
                        //console.log('newarr', newarrc)
                        for (let j = 0; j < newarrc.length; j++) {
                            zonecity = cityzone.countrytarif[i][state.countrySeter]
                        }
                    }
                }
                //console.log('numbertarif', zonecity)
                let express = state.express == 1 ? tarifimport : tarifimport
                //console.log('прайсссс', express.pricelistdata)
                let parseWeight = parseFloat(state.backetData[0].parametr)
                var summ = 0
                //console.log('basket', JSON.parse(JSON.stringify(state.backetData)))
                //колличество товаров в корзине
                for (var a = 0; a < state.backetData.length; a++) {
                    //onsole.log('ГРАНИЦА - контейнер', state.backetData[a].price)
                    if(state.backetData[a].price == 'Расчет в течении 24 часов') {
                        state.finalCalchide = true
                        state.tarifcalc = 'Расчет в течении 24 часов'
                        break
                    } else {
                    //проходим по всему прайсу
                    for (var i = 0; i < express.pricelistdata.length; i++) {
                        //console.log('json',  JSON.parse(JSON.stringify(state.backetData[a].parametr)))

                        let decimal = 1
                        //округляем вес
                        if (parseFloat(JSON.parse(JSON.stringify(state.backetData[a].parametr))) % 1 == 0) {
                            decimal = 0;
                        } else {
                            decimal = 1;
                        }

                        //расчет объемного веса
                        if (state.backetData[a].gabarit != null) {
                            let aMass = state.backetData[a].gabarit.split('x')
                            aMass[0] = parseFloat(aMass[0])
                            aMass[1] = parseFloat(aMass[1])
                            aMass[2] = parseFloat(aMass[2])
                            //console.log('V MASS', a)
                            var newaMass = aMass[0] * aMass[1] * aMass[2] / 5000
                        }
                        //если вс груза больше 30 тогда округлям с шагом 1 если меньше 30, с шагом 1
                        if (parseFloat(JSON.parse(JSON.stringify(state.backetData[a].parametr))) < 30) {
                            var mass = (Math.ceil(parseFloat(JSON.parse(JSON.stringify(state.backetData[a].parametr))) * 2) / 2).toFixed(decimal)
                        } else {
                            var mass = (Math.ceil(parseFloat(JSON.parse(JSON.stringify(state.backetData[a].parametr))))).toFixed(decimal)
                        }
                        mass = parseFloat(mass) + parseFloat(newaMass || 0)
                        //округляем все + объемные вес
                        let decimal2 = 1
                        if (parseFloat(JSON.parse(JSON.stringify(mass))) % 1 == 0) {
                            decimal2 = 0;
                        } else {
                            decimal2 = 1;
                        }

                        mass = (Math.ceil(parseFloat(mass) * 2) / 2).toFixed(decimal2)



                        //console.log('ОБЪЁМНЫЙ ВЕС', mass)
                        //если элемент прайса равен элементу корзины
                        if (parseFloat(express.pricelistdata[i].kg) == parseFloat(mass)) {
                            //console.log('кг прайс', parseFloat(express.pricelistdata[i].kg), 'кг корзина', parseFloat(JSON.parse(JSON.stringify(state.backetData[a].parametr))))

                            var maslengt = []
                            maslengt.push(express.pricelistdata[i])

                            for (var j = 0; j < maslengt.length; j++) {
                                //console.log(express.pricelistdata[j][zonecity], 'цена', state.countrySeter)
                                summ += parseFloat(express.pricelistdata[i][zonecity])
                                //console.log('itog', summ, 'объемный вес', mass)
                                //if(summ >= 20 && sum <=30) {

                                //}
                                state.tarifcalc = summ * (regular.state.period > 0 ? regular.state.period : 1)
                                //console.log(regular.state.period)
                                state.finalCalchide = true
                            }
                        }
                    }
                }
            }
            }
        },

        //доставка заграницу
        importmut(state, param) {

            state.countrySeter = param
            //console.log('test2 test2', param, state.countrySeter)
            if (param != 0) {
                state.import = true
                if (param != 0 && state.curentvalue == 1) {
                    state.minweight = 0.3
                } else {
                    state.minweight = 0.5
                }
            } else {
                state.import = false
                state.minweight = 0.5
            }
        },
        //срочная не срочная доставка
        expressnoexpress(state, param) {
            state.express = param
            //console.log('express', param)
        },
        //  регулятор груз или документы
        presoption(state, param) {
            state.curentvalue = param
            if (state.import && state.curentvalue == 1) {
                state.minweight = 0.3
            } else if (state.import && state.curentvalue == 2) {
                state.minweight = 0.5
            } else {
                state.minweight = 0.5
            }
            //console.log(state.curentvalue, param)
        },
        //  регулятор времени
        dateState(state, param) {
            state.curentTime = param
            //console.log(state.curentTime, param)
        },
        //  регулятор даты
        calendarState(state, param) {
            state.selectedDate = (param.getDate() < 10 ? '0' : '') + param.getDate() + '.' + ((param.getMonth() + 1) < 10 ? '0' : '') + (param.getMonth() + 1) + '.' + param.getUTCFullYear()
            //console.log(state.selectedDate, param.getUTCFullYear())
        },


        // изменить позицию товара ( вызывается из корзины )
        editpost(state, index) {
            //console.log(index)
            let typePost = state.backetData[index].title
            state.curentvalue = typePost
        },
        // выбор города отправки
        toCitysending(state, citiSet) {
            //Получаем данные о городе отправки и записываем в сторе
            state.valueCitySending = citiSet
            //console.log(state.valueCitySending)
        },
        //страна получатель
        toCountry(state, countryset) {
            state.countryset = countryset
            //console.log(state.countryset)
        },
        toCityReception(state, reception) {
            //Получаем данные о городе получателе и записываем в сторе
            state.valueCityReception = reception
            //console.log(state.valueCityReception)
        },
        tarifZone(state) {
            //console.log('зона отправки', state.valueCitySending)
            let arr = tarifzone;
            //console.log(arr)

            for (var i = 0; i < arr.datatarifzone.length; i++) {
                //console.log(tarifzone.datatarifzone[i][state.valueCitySending])
                if (tarifzone.datatarifzone[i][0] == state.valueCitySending + 'a') {
                    let paramFix = state.valueCitySending + 'a'
                    //console.log(arr.datatarifzone[i])
                    var ilnegh = []
                    ilnegh.push(arr.datatarifzone[i])
                    for (var j = 0; j < ilnegh.length; j++) {
                        //console.log('работает', arr.datatarifzone[i][state.valueCityReception])
                        state.tarifzonevalue = arr.datatarifzone[i][state.valueCityReception]
                    }
                }
            }
        },

        selecttarif(state) {
            let express = state.express == 1 ? pricelist : srochtarig
            //console.log('прайсссс', express.pricelistdata)
            let parseWeight = parseFloat(state.backetData[0].parametr)
            var summ = 0
            //console.log('basket', JSON.parse(JSON.stringify(state.backetData)))
            //колличество товаров в корзине
            for (var a = 0; a < state.backetData.length; a++) {
                console.log('TESTTTT', state.backetData[a].price)
                if(state.backetData[a].price == 'Расчет в течении 24 часов') {
                    state.finalCalchide = true
                    state.tarifcalc = 'Расчет в течении 24 часов'
                    break
                } else {

                
                //проходим по всему прайсу
                for (var i = 0; i < express.pricelistdata.length; i++) {
                    //console.log('json',  JSON.parse(JSON.stringify(state.backetData[a].parametr)))

                    let decimal = 1
                    //округляем вес
                    if (parseFloat(JSON.parse(JSON.stringify(state.backetData[a].parametr))) % 1 == 0) {
                        decimal = 0;
                    } else {
                        decimal = 1;
                    }

                    //расчет объемного веса
                    if (state.backetData[a].gabarit != null) {
                        let aMass = state.backetData[a].gabarit.split('x')
                        aMass[0] = parseFloat(aMass[0])
                        aMass[1] = parseFloat(aMass[1])
                        aMass[2] = parseFloat(aMass[2])
                        //console.log('V MASS', a)
                        var newaMass = aMass[0] * aMass[1] * aMass[2] / 5000
                    }
                    //если вс груза больше 30 тогда округлям с шагом 1 если меньше 30, с шагом 1
                    if (parseFloat(JSON.parse(JSON.stringify(state.backetData[a].parametr))) < 30) {
                        var mass = (Math.ceil(parseFloat(JSON.parse(JSON.stringify(state.backetData[a].parametr))) * 2) / 2).toFixed(decimal)
                    } else {
                        var mass = (Math.ceil(parseFloat(JSON.parse(JSON.stringify(state.backetData[a].parametr))))).toFixed(decimal)
                    }
                    mass = parseFloat(mass) + parseFloat(newaMass || 0)
                    //округляем все + объемные вес
                    let decimal2 = 1
                    if (parseFloat(JSON.parse(JSON.stringify(mass))) % 1 == 0) {
                        decimal2 = 0;
                    } else {
                        decimal2 = 1;
                    }

                    mass = (Math.ceil(parseFloat(mass) * 2) / 2).toFixed(decimal2)



                    //console.log('ОБЪЁМНЫЙ ВЕС', mass)
                    //если элемент прайса равен элементу корзины
                    if (parseFloat(express.pricelistdata[i].kg) == parseFloat(mass)) {
                        //console.log('кг прайс', parseFloat(express.pricelistdata[i].kg), 'кг корзина', parseFloat(JSON.parse(JSON.stringify(state.backetData[a].parametr))))

                        var maslengt = []
                        maslengt.push(express.pricelistdata[i])

                        for (var j = 0; j < maslengt.length; j++) {
                            //console.log(express.pricelistdata[j][state.tarifzonevalue], 'цена', state.tarifzonevalue)
                            let edBasket = parseFloat(express.pricelistdata[i][state.tarifzonevalue])
                            state.calcEdTarif = edBasket
                            summ += parseFloat(express.pricelistdata[i][state.tarifzonevalue])
                            //console.log('itog', summ, 'объемный вес', mass, edBasket)
                            //if(summ >= 20 && sum <=30) {

                            //}
                            state.tarifcalc = summ * (regular.state.period > 0 ? regular.state.period : 1)
                            //console.log(regular.state.period)
                            state.finalCalchide = true
                        }
                    }
                }
            }
            }
        },
    },
    actions: {

    }
});