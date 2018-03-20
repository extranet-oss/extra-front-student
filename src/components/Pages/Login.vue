<template>
  <div style="height: 100%">
    <div class="container-fluid h-100">
      <div class="row justify-content-center h-100">

        <div class="col-lg-4 hidden-md-down" id="left-side">
         <router-link :to="{name: 'accueil'}" class="title-login" exact>EXTRANET</router-link>
         <center><form class="form-login">
            <div class="form-group">
              <label for="exampleInputEmail1">Adresse email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrez votre adresse e-mail">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Mot de passe</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe">
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Se souvenir de moi</label>
            </div>
            <button type="submit" class="btn btn-primary connect-button">Se connecter</button>
          </form></center>
        </div>

        <div class="col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8" id="right-side">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
html,body {
  height: 100%;
}

.title-login{
  color: white!important;
  text-decoration: none!important;
  font-size: 50px;
  font-weight: 800;
}

#app {
  height: 100%;
}

#left-side {
  padding-top: 20px;
  text-align: center;
  height: 100%;
}

#right-side{
  background-image: url("../../assets/login.jpeg"); ;
  background-size: cover;
}

.form-login{
  margin-top: 20%;
  width: 370px;
}

.form-control{
  padding: 10px;
}

.connect-button{
  border-radius: 100px;
  padding: 10px 40px 10px 40px;
  margin-top: 40px;
  background-color: #78ADE6;
  border-color: #78ADE6;
}

.form-group{
  margin-top: 30px;
}

.form-check{
  margin-top: 30px;
}

label{
  font-size: 20px;
}
</style>
