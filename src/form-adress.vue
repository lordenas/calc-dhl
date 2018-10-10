<template>
<div>
        <div class="title-block-new">
            <div class="div-block-51 _500 w-clearfix">
                <div class="heading-text-block _500">
                <div class="div-line"></div>
                <div class="div-rad"></div>
                <div class="div-block-50"></div>
                <div class="div-rad min"></div>
                <h2 class="heading-13">Откуда отправляете груз?<br></h2>
                </div>
            </div>
        </div>
        <div class="toset col-sm-12">
                <div class="blocktwo">
                    <div class="country">
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Страна</label>
                            <div class="col-sm-10">
                                <multiselect :disabled="disabledcountrySet" v-model="valuecountry" selectLabel=" " :hideSelected="false" noResult="Ничего не найдено" label="country" placeholder="Страна" :options="optionscountry" :searchable="true" :allow-empty="false" @input="countrydesebl">
                                    <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.country }}</strong></template>
                                </multiselect>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Город</label>
                            <div class="col-sm-10">
                                <multiselect :disabled="valuecountry.country == 'Россия' ? false : true" v-model="value" noResult="Ничего не найдено" selectLabel=" " :hideSelected="false" :showLabels="false" :multiple="false"  track-by="region" label="city" placeholder="Город" :options="options" :searchable="true" :allow-empty="false" @input="dispatchAction('CitySending')">
                                    <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.city }}  {{ '(' + option.region }}</strong></template>
                                    <span slot="noResult">Ничего не найдено.</span>
                                </multiselect>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Индекс</label>
                            <div class="col-sm-10">
                                <input class="form-control" :maxlength="6"  v-model="index" type="text"  @input="indextel" placeholder="Индекс">
                            </div>
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
                    <h2 class="heading-13">Куда доставить груз?<br></h2>
                    </div>
                </div>
            </div>
            <div class="toset">
                <div class="blocktwo">
                    <div class="country">
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Страна</label>
                            <div class="col-sm-10">
                                <multiselect :disabled="disabledcountryGet"  v-model="valuecountryToSet" selectLabel=" " noResult="Ничего не найдено" :hideSelected="false" label="country" placeholder="Страна" :options="optionscountry" :searchable="true" :allow-empty="false" @input="selectCountry">
                                    <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.country }}</strong></template>
                                    <span slot="noResult">Ничего не найдено.</span>
                                </multiselect>                            
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Город</label>
                            <div class="col-sm-10">
                                <multiselect  v-model="valuetoSet" :disabled="valuecountryToSet.country == 'Россия' ? false : true" selectLabel=" " noResult="Ничего не найдено"  :hideSelected="false" :showLabels="false" :multiple="false"  track-by="region" label="city" placeholder="Город" :options="options" :searchable="true" :allow-empty="false" @input="dispatchAction('CityReception')">
                                    <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.city }}  {{ '(' + option.region }}</strong></template>
                                    <span slot="noResult">Ничего не найдено.</span>
                                </multiselect>                         
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Индекс</label>
                            <div class="col-sm-10">
                                <input class="form-control" :maxlength="6" v-model="indexReception" type="text" @input="controlvalid" placeholder="Индекс">
                            </div>
                        </div>

                    </div>

                </div>
            </div>
</div>
</template>

<script>
    import {mapMutations} from 'vuex';
    import {mapGetters} from 'vuex';
    const cityId = require('./json/cityid.json') 
    const country = require('./json/country.json')
    import Multiselect from 'vue-multiselect'

    export default {
      name: 'app',
      data () {
        return {
          index: '',
          indexReception: '',
          stepOneflag: true,
          value: 0,
          valuetoSet: 0,
          valuecountry: {"country": "Россия" },
          valuecountryToSet: {"country": "Россия" },
          options: [],
          optionscountry: [],
          disabledcountrySet: false,
          disabledcountryGet: false
        }
      },
      mounted () {
          this.cicl()
          this.countrycl()
      },
      computed: {
        indextel() {
            console.log( this.index.replace(',','.').replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, ''))
            this.index = this.index.replace(',','.').replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, '');
            this.controlvalid ()
        },
      },
      methods: {
        ...mapMutations([
                'toCitysending', 'toCityReception', 'tarifZone', 'selecttarif', 'validateOneMut', 'importmut', 'importcalc'
         ]),
         //если страна отправки не Россия тогда блокируем поле страна получения, и ставим страну Россия
         countrydesebl () {
             if ( JSON.stringify(this.valuecountry) !=  JSON.stringify({"country":"Россия","zone":"0"})) {
                 console.log(JSON.stringify(this.valuecountry))
                 this.disabledcountryGet = true
                 this.valuecountryToSet = {"country":"Россия","zone":"0"}
                this.importmut(this.valuecountry.zone)
                this.importcalc(this.valuecountry.zone)
             } else {
                  this.disabledcountryGet = false
             } 
         },

         selectCountry () {
             console.log('TEST TEST TEST', JSON.parse(JSON.stringify(this.valuecountryToSet.zone)))

            console.log('sdfdff', JSON.stringify(this.valuecountryToSet))
             //проверкаа на страну
             if ( JSON.stringify(this.valuecountryToSet) !=  JSON.stringify({"country":"Россия","zone":"0"})) {
                this.disabledcountrySet = true
                this.valuecountry = {"country":"Россия","zone":"0"}
                 this.importmut(this.valuecountryToSet.zone)
                this.importcalc(this.valuecountryToSet.zone)
             } else {
                this.disabledcountrySet = false
             }

         },
         controlvalid () {
             //форма валидна или нет
             if ((this.valuecountry || this.valuecountry || this.value.tarifid > 0 && this.valuetoSet.tarifid > 0 ) && this.indexReception.length == 6 && this.index.length == 6 ) {
                this.validateOneMut(true)
             } else { 
                 this.validateOneMut(false)
             }
         },
         disabledinput () {
              if (this.valuecountry ==  {"country": "Россия" }) {
                  return false
              } else {
                  return true
              }
        },
         cicl() {
              for (var i=0; i<cityId.cityid.length; i++) {
                this.options.push({
                    'city': cityId.cityid[i].city.split('(')[0],
                    'region': cityId.cityid[i].city.split('(')[1],
                    'tarifid': cityId.cityid[i].tarifid
                })
                //this.options.push({'region': cityId.cityid[i].city.split('(')[1]})
                //this.options.push(cityId.cityid[i].cityregion = '(' + cityId.cityid[i].city.split('(')[1])
            }
            console.log(this.options)
         },
         dispatchAction (typeSelectValue) {
             if (typeSelectValue == 'CitySending') {
                this.toCitysending(this.value.tarifid)
             } else if (typeSelectValue == 'CityReception') {
                this.toCityReception(this.valuetoSet.tarifid )
             }
             this.controlvalid ()
             this.tarifZone()
             this.selecttarif()
         },
         countrycl() {
              for (var i=0; i<country.country.length; i++) {
                this.optionscountry.push({
                    'country': country.country[i].cuuntry,
                    'zone': country.country[i].zone
                })
                //this.options.push({'region': cityId.cityid[i].city.split('(')[1]})
                //this.options.push(cityId.cityid[i].cityregion = '(' + cityId.cityid[i].city.split('(')[1])
            }
            console.log(this.optionscountry)
         }
      },
      components: {
          Multiselect 
        },
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.multiselect__option--highlight {
    background: #e9f0f8 !important;
    color: #000 !important;
}

.toset .col-form-label {
    text-align: center;
}
</style>
