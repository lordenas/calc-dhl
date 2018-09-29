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
        <div class="toset">
                <div class="blocktwo">
                    <div class="country">
                        <div class="block-input">
                            <label>Страна</label>
                              <multiselect disabled="" v-model="valuecountry" selectLabel=" " :hideSelected="false" noResult="Ничего не найдено" label="country" placeholder="Страна" :options="optionscountry" :searchable="true" :allow-empty="false">
                                <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.country }}</strong></template>
                             </multiselect>
                        </div>
                        <div class="block-fotter-input">
                            <div class="block-input">
                                <label class="typo__label">Город</label>
                                <multiselect :disabled="valuecountry.country == 'Россия' ? false : true" v-model="value" noResult="Ничего не найдено" selectLabel=" " :hideSelected="false" :showLabels="false" :multiple="false"  track-by="region" label="city" placeholder="Город" :options="options" :searchable="true" :allow-empty="false" @input="dispatchAction('CitySending')">
                                    <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.city }}  {{ '(' + option.region }}</strong></template>
                                    <span slot="noResult">Ничего не найдено.</span>
                                </multiselect>
                            </div>
                            <div class="block-input">
                                <label>Индекс</label>
                                <input class="standinput" v-model="index" type="text"  @input="controlvalid" placeholder="Индекс">
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
                        <div class="block-input">
                            <label>Страна</label>
                              <multiselect v-model="valuecountryToSet" selectLabel=" " noResult="Ничего не найдено" :hideSelected="false" label="country" placeholder="Страна" :options="optionscountry" :searchable="true" :allow-empty="false">
                                <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.country }}</strong></template>
                                 <span slot="noResult">Ничего не найдено.</span>
                             </multiselect>
                        </div>
                        <div class="block-input">
                            <label class="typo__label">Город</label>
                            <multiselect  v-model="valuetoSet" :disabled="valuecountryToSet.country == 'Россия' ? false : true" selectLabel=" " noResult="Ничего не найдено"  :hideSelected="false" :showLabels="false" :multiple="false"  track-by="region" label="city" placeholder="Город" :options="options" :searchable="true" :allow-empty="false" @input="dispatchAction('CityReception')">
                                <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.city }}  {{ '(' + option.region }}</strong></template>
                                 <span slot="noResult">Ничего не найдено.</span>
                            </multiselect>
                        </div>
                        <div class="block-input">
                            <label>Индекс</label>
                            <input class="standinput" v-model="indexReception" type="text" @input="controlvalid" placeholder="Индекс">
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
          index: null,
          indexReception: null,
          stepOneflag: true,
          value: 0,
          valuetoSet: 0,
          valuecountry: {"country": "Россия" },
          valuecountryToSet: {"country": "Россия" },
          options: [],
          optionscountry: [],
        }
      },
      mounted () {
          this.cicl()
          this.countrycl()
      },
      computed: {

      },
      methods: {
        ...mapMutations([
                'toCitysending', 'toCityReception', 'tarifZone', 'selecttarif', 'validateOneMut'
         ]),
         controlvalid () {
             //форма валидна или нет
             if ((this.valuecountry || this.valuecountry || this.value.tarifid > 0 && this.valuetoSet.tarifid > 0 )&& this.indexReception && this.index ) {
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
<style>
.multiselect__option--highlight {
    background: #e9f0f8 !important;
    color: #000 !important;
}
</style>