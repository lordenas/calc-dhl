<template>
        <div class="typestore">
            <div class="typestore-title">
            Что Вы отправляете?
            </div>
            <div class="typestore-icon">
            <div class="typestore-icon-step">
                <img src="/img/my-documents-png-image-24592.png" width="150px"/>
                <p>Документы</p>
            </div>
            <div class="typestore-icon-step">
                <div></div>
                <p>или</p>
            </div>
            <div class="typestore-icon-step">
                <img src="img/Open_Cardboard_Box_PNG_Clip_Art_Image-1283.png"  width="150px" />
                <p>Груз</p>
            </div>
            </div>
        </div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      stepOneflag: true
    }
  },
  methods: {
    stepOne () {
      this.stepOneflag =  !this.stepOneflag;
    }
  }
}
</script>

