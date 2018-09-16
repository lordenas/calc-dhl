<template>
<div>
        <div class="toset">
                <div class="toset-title">
                  <span>Откуда забрать груз?</span>
                </div>
                <div class="blocktwo">
                    <div class="country">
                        <div class="block-input">
                            <label>Страна</label>
                              <multiselect v-model="value" :hideSelected="true"  track-by="region" label="city" placeholder="Select one" :options="options" :searchable="true" :allow-empty="false">
                                <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.city }}  {{ '(' + option.region }}</strong></template>
                             </multiselect>
                             <pre>{{ value.tarifid  }}</pre>
                        </div>
                        <div class="block-input">

                        <label class="typo__label">Город</label>
                        <multiselect v-model="value" :hideSelected="true" :showLabels="false" :multiple="false"  track-by="region" label="city" placeholder="Select one" :options="options" :searchable="true" :allow-empty="false">
                            <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.city }}  {{ '(' + option.region }}</strong></template>
                        </multiselect>


                        <pre>{{ value.tarifid  }}</pre>

                        </div>
                        <div class="block-input">
                            <label>Индекс</label>
                            <input class="standinput" type="text"  placeholder="Индекс">
                        </div>
                    </div>

                </div>
            </div>

            <div class="toset">
                <div class="toset-title">
                  <span>Куда доставить груз?</span>
                </div>
                <div class="blocktwo">
                    <div class="country">
                        <div class="block-input">
                            <label>Страна</label>
                            <input class="standinput" type="text" placeholder="Страна">
                        </div>
                        <div class="block-input">
                            <label>Город</label>
                            <input class="standinput" type="text" placeholder="Город">
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
    const cityId = require('./json/cityid.json') 
    import Multiselect from 'vue-multiselect'

    export default {
      name: 'app',
      data () {
        return {
          stepOneflag: true,
          selected: null,
            value: 0,
            options: []
        }
      },
      mounted () {
          this.cicl()
      },
      methods: {
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
         onSelect(index) {
            // console.log(index)
         }
      },
      components: {
          Multiselect 
        },
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>