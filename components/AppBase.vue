<template>
<div>
    <AppSidebar></AppSidebar>
    <app-messages></app-messages>  
    <div class="app-content"> 
        <router-view></router-view>
    <message-form></message-form>
    
    </div>
</div>
</template>

<script>
import AppSidebar from '@/components/AppSidebar'
import AppMessages from '@/components/AppMessages'
import MessagesForm from '@/components/MessagesForm'
export default {    
    name: 'AppBase',
    components: {
        AppSidebar,
        AppMessages,
        MessagesForm
    }
}
</script>

<style lang="scss">
  .app-content {
    position: fixed;
    left: 200px;
    top: 0;
    bottom: 0;
    right: 0;
  }
</style>