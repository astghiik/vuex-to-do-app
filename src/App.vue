<template>
  <div class="container">
    <AddToDo />
    <ToDos />
  </div>
</template>

<script>
import ToDos from "./components/ToDos"
import AddToDo from "./components/AddToDo";

export default {
  name: 'App',
  components: {
    AddToDo,
    ToDos
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
