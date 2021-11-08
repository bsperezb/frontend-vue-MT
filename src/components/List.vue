<template>


    <div class="container-fluid my-5">
         <!--<div class="row  justify-content-center " >-->
           <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Disponibilidad</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52_WTlxEnetENeWbYMg3ZwI_HpW12JMCqHw&usqp=CAU"
                            width="100"
                            height="85">
                    </th>
                    <td>Bolso</td>
                    <td>50.000</td>
                    <td>Disponible</td>
                    <td>
                        <div class="Butt_Delete">
                            <button type="submit">Eliminar</button>
                        </div>
                        <div class="Butt_Edit">
                            <button type="submit">Editar</button>
                        </div>
                    </td>
                    </tr>


                    <tr class="items" v-for="arte in items" :key="arte.id">
                    <th scope="row">
                        <img :src="arte.image"
                            width="100"
                            height="85">
                    </th>
                    <td>{{ arte.name }}</td>
                    <td>{{ arte.price }}</td>
                    <td>{{ arte.state }}</td>

                    <td>
                        <div class="Butt_Delete">
                            <button v-on:click="eliminar_item( arte )">Eliminar</button>
                        </div>
                        <div class="Butt_Edit">
                            <button type="submit">Editar</button>
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>  
         </div>
    <!--</div>-->
  
</template>

<script>
import axios from "axios";
export default {
  name: "Form",
  data: function() {
    return {
      items:[],
    };
  },
  methods: {
    traer_items: function() {
      let vue = this;
    //   var data = this.item;
      var config = {
        method: 'get',
        url: 'https://bcend.herokuapp.com/products/products/',
        headers: {'Content-Type': 'application/json'},
      };
      axios(config)
        .then(function (response){
          vue.items = response.data;
          // console.log(vue.items)
        })
        .catch(function(error){
          console.log(error);
        });
    },
    // eliminar_items: ()=>{

    // },
    eliminar_item: function(item){
      console.log( item.id)
      var url = 'https://bcend.herokuapp.com/products/products/'+item.id+'/'
      console.log("esta es la url" +" "+ url)
      var config = {
        method: 'delete',
        url: url,
        headers: {'Content-Type': 'application/json'},
      };
      axios(config)
      .then(function(response){
        console.log(response)
        alert(item.name + " " +"eliminada")
      })
        .catch(function(error){
          console.log(error);
        });
    },
  },
  mounted(){
    this.traer_items();
  },
}
</script>


<style>
.Butt_Delete button {
  width: 35%;
  height: 25px;
  color: #e5e7e9;
  background: red;
  border: 1px solid #d1e1ec;
  border-radius: 5px;
  padding: 0px 0px;
  margin: 5px 0;
}
.Butt_Delete button:hover {
  color: #e5e7e9;
  background: #a30626;
  border: 1px solid #141616;
}
.Butt_Edit button {
  width: 35%;
  height: 25px;
  color: #e5e7e9;
  background: green;
  border: 1px solid rgb(242, 242, 242);
  border-radius: 5px;
  padding: 0px 0px;
  margin: 5px 0;
}
.Butt_Edit button:hover {
  color: #e5e7e9;
  background: #53b664;
  border: 1px solid #141616;
}

</style>

