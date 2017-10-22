<template>
    <!-- <div class="app-messages">
        <h1 class="title" v-if="loading">Loding...</h1>
        <div v-for="(thread,index) in threads" :key="index" >
            <div  style="color:rgb(170,173,204);">
                
                <router-link :to="{ name: 'chat-messages', params: { threadname: thread.threadname } }" style="text-decoration:none;">
                 <div class="thread_section">
                  <b>  {{thread.threadname}} </b>
                  <hr style="border-color: rgba(238, 238, 250, 0.34);"></hr>
                   </div>
                    </router-link>
            </div>
        </div>
    </div> -->
    <v-navigation-drawer
      persistent
      clipped
      app
      dark
      width="200px"
      v-model="drawer">
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i">
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model" no-action>
            <v-list-tile slot="item" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
            
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      <div class="abc" >
    
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
    <v-dialog absolute v-model="dialog" width=300px;>
        <v-card>
            <v-card-text>
              <v-text-field label="File name"></v-text-field>
              <small class="grey--text">* This doesn't actually save.</small>
           </v-card-text>
           <v-card-actions>
             <v-spacer></v-spacer>
             <v-btn flat color="primary" @click.native="dialog = false">Submit</v-btn>
           </v-card-actions>
        </v-card>
    </v-dialog>
    </v-flex>
    </v-layout>
    
<div v-if="loading">
    Loading...
</div>
<!-- <aside>
   
    <table>
    <div class="menu-list">
        <tr v-for="(chan, index) in chans" :key="index">
            <div style="color:rgb(170,173,204);">
            <router-link :to="{ name: 'app-messages', params: { channelname: index } }" style="text-decoration:none;">
               <div  class="sidebar" style="color:rgb(170,173,204);"> {{chan.name}}</div>
             </router-link>
             <br>
             </div>
        </tr>
    </div>
    </table>
</aside> -->

<div class="app-messages">
        <h1 class="title" v-if="loading">Loding...</h1>
        <div v-for="(thread,index) in threads" :key="index" >
            <div  style="color:rgb(170,173,204);">
                
                <router-link :to="{ name: 'chat-messages', params: { threadname: thread.threadname } }" style="text-decoration:none;">
                 <div class="thread_section">
                  <b>  {{thread.threadname}} </b>
                  <hr style="border-color: rgba(238, 238, 250, 0.34);"></hr>
                   </div>
                    </router-link>
            </div>
        </div>
    </div>

</div>

    </v-navigation-drawer>

    
</template>
<script>
import threads from '@/stubs/threads'


export default {
name:'app-messages',

created(){
    this.fetchThreads()
},
watch:{
    channelSlug(){
            this.fetchThreads()
    }
    
},
computed:{
        channelSlug(){
            return this.$route.params.channelname
        }
},
data(){
    return{
        threads:false,
        loading:false
    }
    
},
methods:{
    fetchThreads() {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.threads = threads[this.channelSlug]
        }, 2000)
      },
      subscribeForMessages() {
        this.$bus.$on('message-sent:' + this.channelSlug, (message) => {
          this.messages.push(message)
          setTimeout(() => {
            this.$el.scrollTop = this.$el.scrollHeight
          }, 100)
        })
      }
    }
}
</script>

<style lang="scss">
.app-messages{
    position: fixed;
    top:15px;
    botton:0px;
    left:220px;
    width:20%;
    // background-color:white;
    // color:rgb(95,98,131);
}
.thread_section
{
    text-align:left;
}
</style>
