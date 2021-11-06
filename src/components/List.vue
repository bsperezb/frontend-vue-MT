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
                    <tr>
                    <th scope="row">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahkFNyy-omUBhH_y4iKxG5KRWwRVvmKSw6A&usqp=CAU"
                            width="130"
                            height="85">
                    </th>
                    <td>Aretes</td>
                    <td>30.000</td>
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
                    <tr>
                    <th scope="row">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0m65fhhPZqBEzSfWoZwEVBRAICfizeiVgA&usqp=CAU"
                            width="150"
                            height="85">
                    </th>
                    <td>Sombrero</td>
                    <td>60.000</td>
                    <td>No Disponible</td>
                    <td>
                        <div class="Butt_Delete">
                            <button type="submit">Eliminar</button>
                        </div>
                        <div class="Butt_Edit">
                            <button type="submit">Editar</button>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9oBZaHTdjLw0y8EM4dDxPvQb0zJ7US9XBkQ&usqp=CAU"
                            width="85"
                            height="85">
                    </th>
                    <td>Collar</td>
                    <td>30.000</td>
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
                </tbody>
            </table>  
         </div>
    <!--</div>-->
  
</template>

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
