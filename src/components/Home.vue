<template>
<div id="mainCard" class="card">
    <div class="card-header">
        Status Report Covid-19
    </div>
   <div class="card-body">
       <div class="list-group-item">Card 1</div>
       <div class="list-group-item">Card 2</div>
       <div class="list-group-item">Card 3</div>
   </div>
   <div class="card-footer bg-transparent">Last Update </div>
</div>
</template>

<script>
export default {
    name:'Home'
}
</script>

<style scoped>
.card{
    width: 400px;
    position: relative;
    align-content: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.card-footer {
    font-size: 10px;
}
</style>