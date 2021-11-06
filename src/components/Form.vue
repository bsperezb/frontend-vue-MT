
<template>
  <div class="container-fluid my-5">
    <div class="row  justify-content-center " >
    <div class=" row col-md-6 justify-content-center">
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
    <textarea type="text" v-model="item.description" class="form-control" id="description" rows="6" >  
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
      alert('Please verufy the item data');
    },
    create_item: function() {
      let vue = this;
      var data = this.item;
      var config = {
        method: 'post',
        url: 'https://bcend.herokuapp.com/products/products/',
        headers: {'Content-Type': 'application/json'},
        data : data
      };
      console.log(this.item)
      axios(config)
        .then(function (response){
          console.log(JSON.stringify(response.data));
          console.log('enviado')
        this.success()
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
        this.error()
        });
    },
  },
};
</script>