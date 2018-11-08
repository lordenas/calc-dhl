const tarifzone = require('../json/tarifzone.json')
const pricelist = require('../json/pricelist.json')
const srochtarig = require('../json/srochtarig.json')
const tarifimport = require('../json/tarifimport.json')
const cityzone = require('../json/countrytarif.json')


export function calctarifOne (basket, expressf, tarifzonevalue, parametr) {
    let express = expressf == 1 ? pricelist : srochtarig
    var summ = 0
    let bask = []
    bask.push(basket)
    console.log(parametr)
    if(parametr == '- кг.') {
        return 'Расчет в течении 24 часов'
    } else {
    for (var a = 0; a < bask.length; a++) {
        //проходим по всему прайсу
        for (var i = 0; i < express.pricelistdata.length; i++) {
            //console.log('json',  JSON.parse(JSON.stringify(state.backetData[a].parametr)))
            let decimal = 1
            //округляем вес
            if (parseFloat(JSON.parse(JSON.stringify(parametr))) % 1 == 0) {
                decimal = 0;
            } else {
                decimal = 1;
            }

            //расчет объемного веса
            if (basket.gabarit != null) {
                let aMass = basket.gabarit.split('x')
                aMass[0] = parseFloat(aMass[0])
                aMass[1] = parseFloat(aMass[1])
                aMass[2] = parseFloat(aMass[2])
                //console.log('V MASS', a)
                var newaMass = aMass[0] * aMass[1] * aMass[2] / 5000
            }
            //если вс груза больше 30 тогда округлям с шагом 1 если меньше 30, с шагом 1
            if (parseFloat(JSON.parse(JSON.stringify(parametr))) < 30) {
                var mass = (Math.ceil(parseFloat(JSON.parse(JSON.stringify(parametr))) * 2) / 2).toFixed(decimal)
            } else {
                var mass = (Math.ceil(parseFloat(JSON.parse(JSON.stringify(parametr))))).toFixed(decimal)
            }
            mass = parseFloat(mass) + parseFloat(newaMass || 0)
            //округляем все + объемные вес
            let decimal2 = 1
            if (parseFloat(JSON.parse(JSON.stringify(mass))) % 1 == 0) {
                decimal2 = 1;
            } else {
                decimal2 = 0;
            }

            mass = (Math.ceil(parseFloat(mass) * 2) / 2).toFixed(decimal2)



            //console.log('ОБЪЁМНЫЙ ВЕС', mass)
            //если элемент прайса равен элементу корзины
            if (parseFloat(express.pricelistdata[i].kg) == parseFloat(mass)) {
                //console.log('кг прайс', parseFloat(express.pricelistdata[i].kg), 'кг корзина', parseFloat(JSON.parse(JSON.stringify(basket.parametr))))

                var maslengt = []
                maslengt.push(express.pricelistdata[i])

                for (var j = 0; j < maslengt.length; j++) {
                    console.log(express.pricelistdata[j][tarifzonevalue], 'цена', tarifzonevalue)
                    let edBasket = parseFloat(express.pricelistdata[i][tarifzonevalue])
                    //state.calcEdTarif = edBasket
                    summ = parseFloat(express.pricelistdata[i][tarifzonevalue])
                    console.log('itog NEWWW', summ, 'объемный вес NEEWW', mass, edBasket)
                    return summ
                    //if(summ >= 20 && sum <=30) {

                    //}
                    //state.tarifcalc = summ * (regular.state.period > 0 ? regular.state.period : 1)
                    ///console.log(regular.state.period)
                    //state.finalCalchide = true
                }
            }
        }
    }
}
}


export function calcTariImport (backed, importValue, valueCitySending, valueCityReception, countrySeter, parametr) {
    if (importValue) {
        //console.log(backed)
        let bask = []
        bask.push(backed)
        //сначала находим зону города
        var zonecity = null
        var citynot = valueCitySending == null ? valueCityReception :  valueCitySending
        if(parametr == '- кг.') {
            return 'Расчет в течении 24 часов'
        } else { 
            for (let i = 0; i < cityzone.countrytarif.length; i++) {
                if (citynot == cityzone.countrytarif[i].cityid) {
                    var newarrc = []
                    newarrc.push(cityzone.countrytarif[i])
                    console.log('newarr', newarrc)
                    for (let j = 0; j < newarrc.length; j++) {
                        zonecity = cityzone.countrytarif[i][countrySeter]
                    }
                }
            }
            //console.log('numbertarif', zonecity)
            //let express = state.express == 1 ? tarifimport : tarifimport
            let express = tarifimport
            //console.log('прайсссс', express.pricelistdata)
            //let parseWeight = parseFloat(backed.state.backetData[0].parametr)
            var summ = 0
            //console.log('basket', JSON.parse(JSON.stringify(backed.state.backetData)))
            //колличество товаров в корзине
            for (var a = 0; a < bask.length; a++) {
                //проходим по всему прайсу
                for (var i = 0; i < express.pricelistdata.length; i++) {
                    //console.log('json',  JSON.parse(JSON.stringify(state.backetData[a].parametr)))

                    let decimal = 1
                    //округляем вес
                    if (parseFloat(JSON.parse(JSON.stringify(parametr))) % 1 == 0) {
                        decimal = 1;
                    } else {
                        decimal = 0;
                    }

                    //расчет объемного веса
                    if (backed.gabarit != null) {
                        let aMass = backed.gabarit.split('x')
                        aMass[0] = parseFloat(aMass[0])
                        aMass[1] = parseFloat(aMass[1])
                        aMass[2] = parseFloat(aMass[2])
                        //console.log('V MASS', a)
                        var newaMass = aMass[0] * aMass[1] * aMass[2] / 5000
                    }
                    //если вс груза больше 30 тогда округлям с шагом 1 если меньше 30, с шагом 1
                    if (parseFloat(JSON.parse(JSON.stringify(parametr))) < 30) {
                        var mass = (Math.ceil(parseFloat(JSON.parse(JSON.stringify(parametr))) * 2) / 2).toFixed(decimal)
                    } else {
                        var mass = (Math.ceil(parseFloat(JSON.parse(JSON.stringify(parametr))))).toFixed(decimal)
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
                        //console.log('кг прайс', parseFloat(express.pricelistdata[i].kg), 'кг корзина', parseFloat(JSON.parse(JSON.stringify(parametr))))

                        var maslengt = []
                        maslengt.push(express.pricelistdata[i])

                        for (var j = 0; j < maslengt.length; j++) {
                            //console.log(express.pricelistdata[j][zonecity], 'цена', countrySeter)
                            summ = parseFloat(express.pricelistdata[i][zonecity])
                            //console.log('itog', summ, 'объемный вес', mass)
                            //if(summ >= 20 && sum <=30) {

                            //}
                            //state.tarifcalc = summ * (regular.state.period > 0 ? regular.state.period : 1)
                            //console.log(regular.state.period)
                            //state.finalCalchide = true
                            return summ
                        }
                    }
                }
            }
        }
    }
}