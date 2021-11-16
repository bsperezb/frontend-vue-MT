<template>
  <div class="signUp_user">
    <div class="container_signUp_user py-3">
      <h2>Registrarse</h2>
      <form v-on:submit.prevent="processSignUp">
    <div class = "form-row">
      <div class = "form-group col-md-6">    
        <label for = "inputEmail4">Usuario</label>
        <input type="text" v-model="user.username" placeholder="Username" />
      </div>
      <div class = "form-group col-md-6">
        <label for = "inputAddress">Password</label>
        <input type="password" v-model="user.password" placeholder="Password" />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Nombre</label>
          <input type="text" v-model="user.name" placeholder="Name" />
        </div>
        <div class = "form-group col-md-6">    
          <label for = "inputEmail4">Email</label>
          <input type="email" v-model="user.email" placeholder="Email" />
        </div>
            <!-- <div class = "form-group col-md-6">    
        <label for = "inputEmail4">Balance</label>
        <input
          type="number"
          v-model="user.account.balance"
          placeholder="Initial Balance"
        />
      </div> -->

      </div>
    </div>
    <div class="row justify-content-center">
    <button type="submit">Registrarse</button>
    </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data: function() {
    return {
      user: {
        username: "",
        password: "",
        name: "",
        email: "",
        account: {
          lastChangeDate: new Date().toJSON().toString(),
          balance: 0,
          isActive: true,
        },
      },
    };
  },
  methods: {
    processSignUp: function() {
      console.log(this.user)
      axios
        // .post("https://mision-tic-bank-be.herokuapp.com/user/", this.user, {
        .post("https://bcend.herokuapp.com/user/", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataSignUp = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };

          this.$emit("completedSignUp", dataSignUp);
        })
        .catch((error) => {
          console.log(error);

          alert("ERROR: Fallo en el registro.");
        });
    },
  },
};
</script>
<style >
.signUp_user{
margin: 10;
padding: 5%;
height: 100%;
width: 300%;
display: flex;
justify-content: center;
align-items: center;
}
.container_signUp_user {
border: 1px solid #057d81;
border-radius: 10px;
width: 50%;
height: 60%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 0 1px 30px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.signUp_user h2
{
/* color: #283747; */
color: #057d81;
}
.signUp_user form
{
width: 70%;
}
.signUp_user input
{
height: 40px;
width: 100%;
box-sizing: border-box;
padding: 10px 20px;
margin: 5px 0;
border: 1px solid #057d81;
}
.signUp_user button
{
width: 100%;
height: 40px;
color: #E5E7E9;
background: #057d81;
border: 1px solid #E5E7E9;
border-radius: 5px;
padding: 10px 25px;
margin: 5px 0 25px 0;
}
.signUp_user button:hover
{
color: #E5E7E9;
background: crimson;
border: 1px solid #057d81;
}
</style>