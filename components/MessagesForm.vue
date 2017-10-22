<template>
  <div class="message-form">
    <h3></h3>
    <input class="input" placeholder="Enter your message..." v-model="message" @keyup.enter="sendMessage" :disabled="loading">
  </div>
</template>

<script>
  export default {
    name: 'messages-form',
    data() {
      return {
        message: "",
        loading: false
      }
    },
    computed: {
      threadSlug() {
        return this.$route.params.threadname
      }
    },
    methods: {
      sendMessage() {
        this.loading = true
        console.log('called')
        setTimeout(() => {
          let messageObj = {
            sender: "Kunal",
            text: this.message
          }
          this.$bus.$emit("message-sent:" + this.threadSlug, messageObj)
          this.loading = false
          this.message = ""
        }, 4000)
      }
    }
  }
</script>

<style lang="scss">
  .message-form {
    color:red;
    bottom: 0;
    right: 0;
    left: 2200px;
    background: #fff;
    border-top: solid 1px #ddd;
    padding: 1rem;
    .input {
      border: solid 1px #ddd;
      border-radius: 3px;
      width: 100%;
      display: block;
      padding: 1rem;
      font-size: 1rem;
    }
  }
</style>
