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
                              <multiselect v-model="valuecountry" :hideSelected="true" label="country" placeholder="Страна" :options="optionscountry" :searchable="true" :allow-empty="false">
                                <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.country }}</strong></template>
                             </multiselect>
                        </div>
                        <div class="block-fotter-input">
                            <div class="block-input">
                                <label class="typo__label">Город</label>
                                <multiselect v-model="value" :hideSelected="true" :showLabels="false" :multiple="false"  track-by="region" label="city" placeholder="Город" :options="options" :searchable="true" :allow-empty="false" @input="dispatchAction('CitySending')">
                                    <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.city }}  {{ '(' + option.region }}</strong></template>
                                </multiselect>
                            </div>
                            <div class="block-input">
                                <label>Индекс</label>
                                <input class="standinput" type="text"  placeholder="Индекс">
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
                              <multiselect v-model="valuecountryToSet" :hideSelected="true" label="country" placeholder="Страна" :options="optionscountry" :searchable="true" :allow-empty="false">
                                <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.country }}</strong></template>
                             </multiselect>
                        </div>
                        <div class="block-input">
                            <label class="typo__label">Город</label>
                            <multiselect  v-model="valuetoSet" :hideSelected="true" :showLabels="false" :multiple="false"  track-by="region" label="city" placeholder="Город" :options="options" :searchable="true" :allow-empty="false" @input="dispatchAction('CityReception')">
                                <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.city }}  {{ '(' + option.region }}</strong></template>
                            </multiselect>
                        </div>
                        <div class="block-input">
                            <label>Индекс</label>
                            <input class="standinput" type="text"  placeholder="Индекс">
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
          stepOneflag: true,
          value: 0,
          valuetoSet: 0,
          valuecountry: 15,
          valuecountryToSet: 15,
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
                'toCitysending', 'toCityReception', 'tarifZone', 'selecttarif'
         ]),
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