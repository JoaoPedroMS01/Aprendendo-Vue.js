<template>
  <div>
    <h1>{{ mensagem }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data(){
    return {
      mensagem: 'Estou na tela dashboard'
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
