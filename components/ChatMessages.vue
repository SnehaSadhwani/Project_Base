<template>

<div class="chat-messages">
        <h1 class="title" v-if="loading"></h1>
        <div class="msg_sender" v-for="(m,index) in msg" :key="index" >
            <div>
                {{m.sender}}
                <div>
                    {{m.text}}
                    </div>
                
                    
            </div>
            
        </div>
        <messages-form></messages-form>
    </div>
    
</template>

<script>
import msgs from '@/components/messages'
import MessagesForm from '@/components/MessagesForm'

export default {
name:'chat-messages',
components:{MessagesForm},
created(){
    this.fetchMessages()
},
watch:{
    channelSlug(){
            this.fetchMessages()
    }
    
},
computed:{
        channelSlug(){
            return this.$route.params.threadname
        }
},
data(){
    return{
        msg:false,
        loading:false
    }
    
},
methods:{
    fetchMessages() {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.msg = msgs[this.channelSlug]
        },10)
      },
      subscribeForMessages() {
          console.log('bus xclled') 
        this.$bus.$on('message-sent:' + this.threadSlug, (message) => {
          this.msg.push(message)
          
          setTimeout(() => {
            this.$el.scrollTop = this.$el.scrollHeight
          }, 100)
        })
      }
     
      }
}

</script>

<style lang="scss">

.chat-messages{
    position:fixed;
    top:0px;
    bottom:0px;
    left:570px;
    right:0px;
    border-left:solid black;
        border-width: 1px;
    border-color: hsla(240, 7%, 89%, 0.97);
    background-color:white;
}
.msg_sender
{
    
}

</style>