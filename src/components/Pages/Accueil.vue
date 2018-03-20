<template>
<div>
  <MenuBar></MenuBar>
    <div class="container">
      <div class="row">
        <div class="col-12" style="margin-bottom: 30px;">
          <first-title>Bienvenue sur EXTRANET</first-title>
        </div>
        <div class="col-md-6">
          <img src="http://prod.timotheduc.com/wp-content/uploads/2018/03/Wiicontrol-1.jpg" class="presentation-picture">
        </div>
        <div class="col-md-6">
          <second-title>Bienvenue sur EXTRANET</second-title>
          <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti aliquid nobis sed magni necessitatibus eaque labore et accusantium quod dicta optio nihil pariatur voluptatem tempora, cupiditate fugit ratione libero? Sint!</div>
          <button class="btn btn-primary connect-button">Se connecter</button>

        </div>

      </div>
    </div>
</div>
</template>

<script>
import MenuBar from '@/components/Elements/Menu'
import FirstTitle from '@/components/Elements/FirstTitle'
import SecondTitle from '@/components/Elements/SecondTitle'
export default {
  components: {
    MenuBar,
    FirstTitle,
    SecondTitle
  }
}
</script>

<style scoped>
.presentation-picture{
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.connect-button{
  border-radius: 100px;
  padding: 10px 40px 10px 40px;
  margin-top: 40px;
  background-color: #78ADE6;
  border-color: #78ADE6;
}
</style>
