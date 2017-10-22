import Vue from 'vue'
import Router from 'vue-router'
import AppBase from '@/components/AppBase'
import AppMessages from '@/components/AppMessages'
import ChatMessages from '@/components/ChatMessages'
import MessagesForm from '@/components/MessagesForm'
/*import Vue from 'vue'
import Vuetify from 'vuetify'
import ('path/to/node_modules/vuetify/dist/vuetify.min.css')
Vue.use(Vuetify)
*/

//import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'AppBase',
            component: AppBase,
            children: [{
                    path: '/:channelname',
                    component: AppMessages,
                    name: 'app-messages',
                },
                {
                    path: '/:channelname/:threadname',
                    component: ChatMessages,
                    name: 'chat-messages'
                }




            ]
        }

    ]
})