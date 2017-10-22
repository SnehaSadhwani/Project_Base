<!--<template>
<div >
<div class="abc" >
    
        <v-btn class="addChannel" @click.native.stop="dialog = !dialog"  >             
             Channels   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     +
            </v-btn>
    
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
<aside>
   
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
</aside>
</div>
</div>
</template>

-->

<!--<script>
import channel from '@/components/channels';
//import ChatMessages from '@/components/ChatMessages';
export default {
    name: 'AppSidebar',    
   /* components:{
        ChatMessages
    },*/

created (){
    this.fetchAllChannels()
},


data() {
      return {
        loading:false, 
        chans: false
      }
},


methods: {
    fetchAllChannels(){
        this.loading=true
        setTimeout(()=>{
            this.loading=false
            this.chans=channel
        },2000)
             
    },
     addNewChannel()
        {
            
        }
}

}


</script>



<style lang="scss">
.abc{
    position: fixed;
    background-color:rgb(49,47,74);
    //padding:12px;
    top:0;
    bottom:0;
    left:0px;
    width:200px;
    color:rgb(170,173,204);
}
tr{
    padding-left: 0px;
    border-radius: 2px;
   color:rgb(170,173,204);
      text-align: left;
      //background-color:rgb(238,238,250);

}
.menu-list{
    list-style-type:none;
    color:rgb(238,238,250);
    position:fixed;
    left:30px;
}
.slidebar{
    color:rgb(170,173,204);
    align:left;
}
h4 {
      font-size: 1.1rem;
      font-weight: lighter;
      text-align: left;
    }
.addChannel
{
        background: transparent;
    font-weight: 900;
    color: white;
    font-size: initial;
    float: right;
    /* border-collapse: unset; */
    border-style: none;
       /* position: absolute;
    padding-left: 150px;*/
    padding-left: 50px;
}
</style>
-->

<template>

  <v-app id="inspire" >
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
<aside>
   
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
</aside>
</div>

    </v-navigation-drawer>

    
    
    <v-toolbar
      color="grey darken-3"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title style="width: 200px" class="ml-0 pl-3" dark>
        
        
        <v-flex>
            <v-select
              v-bind:items="companies"
              v-model="e1"
              dark
              label="Select Project"
              single-line
              bottom
            ></v-select>
          </v-flex>
          
      </v-toolbar-title>
      <v-toolbar-channel style="padding-left:5px;" >
              
        <v-btn        
        label="Channel"
        color="grey darken-3"
        style="color:grey"
        >
        
        <v-icon>list</v-icon>
        Channel          
        </v-btn>
     
      </v-toolbar-channel>
      <v-toolbar-message style="padding-left:5px;" >
              
        <v-btn        
        label="Messages"
        color="grey darken-3"
        style="color:grey"
        >
        
        <v-icon>message</v-icon>
        Messages          
        </v-btn>
     
      </v-toolbar-message>
      
      <v-toolbar-team style="padding-left:5px;" >      
        <v-btn        
        label="Team"
        color="grey darken-3"
        style="color:grey"
        ><v-icon>supervisor_account</v-icon>
        Team          
        </v-btn>
      </v-toolbar-team>

      <v-toolbar-files style="padding-left:5px;" >      
        <v-btn        
        label="Files"
        color="grey darken-3"
        style="color:grey"
        ><v-icon>note_add</v-icon>
        Files          
        </v-btn>
      </v-toolbar-files>
 <v-toolbar-search style="padding-left:5px;" >      
      <v-text-field
        solo
        prepend-icon="search"
        placeholder="Search"
      ></v-text-field>
      <v-spacer></v-spacer>
 </v-toolbar-search> 
      <v-btn icon style="padding-left:150px;">
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large style="padding-left:15px;" >
        <v-avatar size="32px" tile>
          <img
            src="https://vuetifyjs.com/static/doc-images/logo.svg"
            alt="user"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    
 
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Create contact
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                prepend-icon="business"
                placeholder="Company"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="Job title"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mail"
                placeholder="Email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="notes"
                placeholder="Notes"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import channel from '@/components/channels';
  export default {
    name: 'AppSidebar',    
   /* components:{
        ChatMessages
    },*/

created (){
    this.fetchAllChannels()
},
    data: () => ({
      dialog: false,
      drawer: true,
      items: [
        { icon: 'call_to_action', text: 'All Threads' },
        { icon: 'star_border', text: 'Starred' },
        {text: 'Create Channel',  icon: 'add' }
        ,
        
      ],
     
        loading:false, 
        chans: false,
        e1: null,
        e2: null,
        e3: null,
        e4: null,
        companies: [
          { text: 'Amazon' },
          { text: 'Flipkart' },
          { text: 'Alibaba' },
          { text: 'Snapdeal' },
          { text: 'Jabong' },
          { text: 'Myntra' },
          { text: 'Shopclues' }
        ],
        
      
    }),
    props: {
      source: String
    },
    methods: {
    fetchAllChannels(){
        this.loading=true
        setTimeout(()=>{
            this.loading=false
            this.chans=channel
        },2000)
             
    },
     addNewChannel()
        {
            
        }
}
  }
</script>
<<style lang="scss">
.abc{
    position: relative;
    //background-color:rgb(49,47,74);
    //padding:12px;
    top:0;
    bottom:0;
    left:0px;
    width:200px;
    //color:rgb(170,173,204);
}
tr{
    padding-left: 0px;
    border-radius: 2px;
   color:rgb(170,173,204);
      text-align: left;
      //background-color:rgb(238,238,250);

}
.menu-list{
    list-style-type:none;
    //color:rgb(238,238,250);
    color:white;
    position:fixed;
    left:30px;
}
.slidebar{
    color:rgb(170,173,204);
    align:left;
}
h4 {
      font-size: 1.1rem;
      font-weight: lighter;
      text-align: left;
    }
.addChannel
{
        background: transparent;
    font-weight: 900;
    color: white;
    font-size: initial;
    float: right;
    /* border-collapse: unset; */
    border-style: none;
       /* position: absolute;
    padding-left: 150px;*/
    padding-left: 50px;
}
</style>
