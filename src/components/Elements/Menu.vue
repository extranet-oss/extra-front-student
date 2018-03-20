<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <router-link :to="{name: 'accueil'}" class="navbar-brand" exact>Extranet</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{name: 'pageB'}" class="nav-link">PageB</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'profil'}" class="nav-link">Profil</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{name: 'login'}" class="nav-link button-nav">Se connecter</router-link>
          <li class="navbar-item">
            <router-link :to="{name: 'login'}" class="nav-link button-nav">S'inscrire</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.router-link-active{
  color: white !important;
}
.button-nav{
border: 1px solid #CCCECF;
border-radius: 4px;
margin-left: 15px;
padding: 7px 20px 7px 20px!important;
}
</style>
