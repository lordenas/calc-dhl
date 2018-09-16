<template>
               <div class="typepost">
                <div class="typepost-title">
                  Информация о Вашем грузе
                </div>
                <div class="typepost-body">
                    <div class="typepost-type">
                        <div class="typepost-type-title">Тип груза</div>
                        <div class="typepost-type-select">
                            <div class="typepost-type-select-selecter">
                              <select class="standinput">
                                  <option>Документы</option>
                                  <option>Груз</option>
                              </select>
                            </div>
                            <div class="typepost-type-select-val">Бумажные листы любого формата</div>
                        </div>
                    </div>
                    <div class="typepost-type">
                        <div class="typepost-type-title">Вес груза</div>
                        <div class="typepost-type-variator">
                          <div class="typepost-type-select-selecter">
                              <input type="text"  class="standinput">
                          </div>
                          <div class="typepost-type-variator-bool">
                              <div class="typepost-type-select-val">Минимальный оплачиваемый вес одного места 0.5кг</div>
                          </div>
                        </div>
                    </div>



                    <div class="ng-untouched ng-valid ng-dirty">
                        <div _ngcontent-c20="" class="box-sizing" style="background-image:url('/img/box-sizing.png');">
                            <div _ngcontent-c20="" class="box-sizing__property-name">Длина</div>
                            <div _ngcontent-c20="" class="box-sizing__property-name" style="top:54%;left:auto;right:578px;">Высота</div>
                            <div _ngcontent-c20="" class="box-sizing__property-name" style="top:185px;left:562px;">Ширина</div>
                            <div _ngcontent-c20="" class="box-sizing__title">Габариты (см)</div>
                            <div _ngcontent-c20="" class="box-sizing__hint">в любой последовательности</div>
                            <div _ngcontent-c20="" class="box-sizing__error"></div>
                            <div _ngcontent-c20="" class="box-sizing__dimensions">
                                <wcc-piece-edit-dimensions-input _ngcontent-c20="" _nghost-c21="" class="ng-untouched ng-valid ng-dirty"><input _ngcontent-c21="" class="box-sizing__field ng-valid ng-dirty ng-touched" type="text"></wcc-piece-edit-dimensions-input>
                                <span _ngcontent-c20="" class="box-sizing__separator">х</span>
                                <wcc-piece-edit-dimensions-input _ngcontent-c20="" _nghost-c21="" class="ng-untouched ng-valid ng-dirty"><input _ngcontent-c21="" class="box-sizing__field ng-valid ng-dirty ng-touched" type="text"></wcc-piece-edit-dimensions-input>
                                <span _ngcontent-c20="" class="box-sizing__separator">х</span>
                                <wcc-piece-edit-dimensions-input _ngcontent-c20="" _nghost-c21="" class="ng-untouched ng-valid ng-dirty"><input _ngcontent-c21="" class="box-sizing__field ng-valid ng-dirty ng-touched" type="text"></wcc-piece-edit-dimensions-input>
                            </div>
                        </div>
                    </div>





                    <div class="typepost-but">
                        <div class="typepost-but-cancel">Отмена</div>
                        <div class="typepost-but-succes">Готово</div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  methods: {
    stepOne () {
      this.stepOneflag =  !this.stepOneflag;
    }
  }
}
</script>

