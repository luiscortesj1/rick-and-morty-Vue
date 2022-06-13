<template>
  <div>
    <section class="showcase">
      <video src="./assets/video/RickandMorty.mp4" autoplay loop muted></video>
      <h1 class="title">Rick And Morty</h1>
    </section>
    <FilterByStatus/>
    <FilterByName/>
    <ListCharacter/>
  </div>
  
</template>

<script>
import ListCharacter from '@/components/ListCharacter'
import FilterByStatus from '@/components/FilterByStatus'
import FilterByName from '@/components/FilterByName'

export default {
  name: 'App',
  components: {
    ListCharacter,
    FilterByStatus,
    FilterByName
  }
}
</script>
 
<style lang="scss">
:root{
  --negro:#000000;
  --card:#3a3c44;
  --text-white:#FFFFFF;
  --text-gray:#c0c0c0;

}
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background-color:var(--negro);
  color:var(--text-white);
  text-align: center;
  margin:1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.showcase{
  width:100%;
  height: 21rem;
  position: relative;
}
.showcase video{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}
.title{
  width: 100%;
  height: 100%;
  font-size: 100px;
  color: white;
  background-color: black;
  mix-blend-mode: multiply;
}
</style>
