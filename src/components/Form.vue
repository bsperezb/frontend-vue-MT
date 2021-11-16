
<template>
  <div  class="container_reg_prod">
    <div class="signUp__reg_prod" >

        <h2>Registrar producto</h2>
          <!-- </div> -->
        <form v-on:submit.prevent="create_item">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Nombre</label>
            <input type="text" v-model="item.name" class="form-control" id="name" placeholder="Nombre">
          </div>
          <div class="form-group col-md-6">
            <label for="inputAddress">Precio</label>
            <input type="text" v-model="item.price" class="form-control" id="inputAddress" placeholder="precio">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="inputAddress2">Descripción</label>
            <textarea type="text" v-model="item.description" class="form-control" id="description" rows="4" >  
            Descripción del producto
           </textarea>
          </div>
          <div class="form-group col-md-12">
            <label for="inputAddress">Url de la Imagen</label>
            <input type="url" v-model="item.image" class="form-control" id="imagen del producto" placeholder="Price">
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" v-model="item.state" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck" id="state">
              Activado
            </label>
          </div>
        </div>
        <div class="row justify-content-center">
          <button type="submit" class="btn btn-primary font-weight-bold" style="background-color: #057d81; color: #e5e7e9; border: 1px solid #e5e7e9">Enviar</button>
        </div>
        </form>
  <!-- end boostrap -->
    </div>
   </div>
</template>
<script>
import axios from "axios";
// import { response } from 'express';
export default {
  name: "Form",
  data: function() {
    return {
      item: {
        name: "",
        state: "",
        price: "",
        description: "",
        image: "",
      },
    };
  },
  methods: {
    success: function() {
      alert('success');
    },
    error: function() {
      alert('Please verify the item data');
    },
    create_item: function() {
      let vue = this;
      var data = vue.item;
      var config = {
        method: 'post',
        url: 'https://bcend.herokuapp.com/products/products/',
        headers: {'Content-Type': 'application/json'},
        data : data
      };
      console.log(vue.item)
      axios(config)
        .then(function (response){
          console.log(JSON.stringify(response.data));
          console.log('enviado')
        vue.success()
          vue.item =  {
          name: "",
          state: "",
          price: "",
          description: "",
          image: "",
        };
        })
        .catch(function(error){
          console.log(error);
          vue.error()
        });
    },
  },
};
</script>
<style >
.signUp_reg_prod{
height: 50%;
width: 80%;
display: flex;
justify-content: center;
align-items: center;
}
.container_reg_prod {
padding-top: 2%;
padding-bottom: 2%;
border: 1px solid #057d81;
border-radius: 10px;
width: 45%;
height: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 0 1px 30px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
margin: 1rem 0 3rem 0;
}
</style>