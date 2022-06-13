<template>
  <div class=" character">
    <div class=" character-info">
      <img :src="character.image" :alt="character.name">
       <!-- : para traer la imagen -->
      
       <div class="status">
        
         <h3> {{character.name}}  </h3>
          
         <div>
          <span :class="
      character.status=='Alive'? 'alive': 
      character.status=='Dead'? 'dead' : 
      'defaul'"> 
      </span>
           <span>{{character.status}} - {{character.species}}</span>
         </div>
         <div class="origin">
           <span>Origin:{{character.origin.name}}</span>
      </div>
      <div class="location">
        Location:{{character.location.name}}
      </div>
       
       </div>
     </div>
  </div>
</template>

<script>
export default {
    props: ['character'] //props para la infromacion
}
</script>

<style>
.character-info{
  background-color: var(--card);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  height: 100%;
  
}
h3{
  color: rgb(73, 222, 233)
}
.character-info:hover{
  box-shadow: 0 0 10px 1px rgb(158, 224, 193);
}
.status{
  display:grid;
  align-items: center;
  margin-bottom: 0.5rem;
}
span{
  border-radius: 50%;
  width:10px;
  height: 10px;
  margin-right: .5rem;
}
.alive{
  background-color:green;
}
</style>