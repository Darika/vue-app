<template>
  <div>
    <h2 class="content-block">Профиль</h2>

    <div class="content-block dx-card responsive-paddings">
      <div class="form-avatar">
        <img :src="imageSrc" />
      </div>
      <span>{{ formData.Notes }}</span>
    </div>

    <div class="content-block dx-card responsive-paddings">
      <dx-form
        id="form"
        label-location="top"
        :form-data="formData"
        :colCountByScreen="colCountByScreen"
      />
    </div>
  </div>
</template>

<script>
import DxForm from "devextreme-vue/form";

export default {
  props: {
    picture: String
  },
  data() {
    const picture = "images/employees/06.png";
    return {
      imageSrc: `https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/${picture}`,
      formData: {
        ID: 7,
        FirstName: "Sandra",
        LastName: "Johnson",
        Prefix: "Mrs.",
        Position: "Controller",
        Picture: picture,
        BirthDate: new Date("1974/11/5"),
        HireDate: new Date("2005/05/11"),
        Notes:
          "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен. ",
        Address: "4600 N Virginia Rd."
      },
      colCountByScreen: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4
      }
    };
  },
  components: {
    DxForm
  }
};
</script>

<style lang="scss">
.form-avatar {
  float: left;
  height: 120px;
  width: 120px;
  margin-right: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff;
  overflow: hidden;

  img {
    height: 120px;
    display: block;
    margin: 0 auto;
  }
}
</style>
