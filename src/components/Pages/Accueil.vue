<template>
<div>
  <MenuBar></MenuBar>
  <transition name="slide-fade">
    <notification v-if="NotificationState"></notification>
  </transition>
    <div class="container">
      <div class="row">
        <div class="col-12" style="margin-bottom: 30px;">
          <first-title subtitle="Ceci est un sous titre">Bienvenue sur EXTRANET</first-title>
        </div>
        <div class="col-md-6">
          <img src="http://prod.timotheduc.com/wp-content/uploads/2018/03/Wiicontrol-1.jpg" class="presentation-picture">
        </div>
        <div class="col-md-6">
          <second-title>Bienvenue sur EXTRANET</second-title>
          <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti aliquid nobis sed magni necessitatibus eaque labore et accusantium quod dicta optio nihil pariatur voluptatem tempora, cupiditate fugit ratione libero? Sint!</div>
          <router-link :to="{name: 'login'}"><button class="btn btn-primary connect-button">Se connecter</button></router-link>
          <button class="btn btn-primary connect-button" @click="displayNotification">Display Notification</button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import MenuBar from '@/components/Elements/Menu'
import FirstTitle from '@/components/Elements/FirstTitle'
import SecondTitle from '@/components/Elements/SecondTitle'
import Notification from '@/components/Elements/Notification'
export default {
  data () {
    return {
      NotificationState: false
    }
  },
  components: {
    MenuBar,
    FirstTitle,
    SecondTitle,
    Notification
  },
  methods: {
    displayNotification () {
      this.NotificationState = !this.NotificationState
      if (this.NotificationState === true) {
        window.setTimeout(this.displayNotification, 1500)
      }
    }
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

.slide-fade-enter-active {
  transition: all .4s ease;
}

.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
