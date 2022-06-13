<template>
  <section>
    <div class=" cards characters">
        <div class="  characters-item" v-for="character in characters" :key="character.id">
            <CardCharacter :character="character"/> 
        </div>
    </div>
  </section>
</template>

<script>
import { onMounted, computed } from 'vue'
import {useStore} from 'vuex'
import CardCharacter from './CardCharacter'
export default {
    components:{
        CardCharacter
    },
    setup(){
        const store= useStore()
        const characters= computed(()=>{
            return store.state.charactersFilter
        })
        onMounted(()=>{
            store.dispatch('getCharacters')
        })
        return{
            characters
        }
    }
}
</script>

<style>
.cards{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(260px, 2fr));
  gap:20px;
  margin: 3rem 0;
  
}
img{
    width:100%;
}
</style>