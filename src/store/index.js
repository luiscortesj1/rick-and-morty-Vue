import { createStore } from 'vuex'

export default createStore({
  state: {
    characters:[], // personajes en general
    charactersFilter:[] //consultas y filtros

  },
  getters: {
  },
  mutations: { // son las que modifican a los state
    setCharacter(state, payload){  // state - arriba
      state.characters = payload
    },
    setCharacterFilter(state, payload){
      state.charactersFilter = payload
    }
  },
  actions: {
    async getCharacters({commit}){
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data= await response.json()
        commit('setCharacter',data.results)
        commit('setCharacterFilter',data.results)
      } catch (error) {
        console.error(error)
      }
    },
    //function filter character
    filterByStatus({commit,state},status){
      const results= state.characters.filter((character)=>{
        return character.status.includes(status);
      })
      commit('setCharacterFilter',results)
    },
    // function filter names 
    filterByName({commit,state}, name){
      const formatName= name.toLowerCase() // name del input
      const results = state.characters.filter((character)=>{
        const characterName= character.name.toLowerCase() //  name de los characthers que hay 
        if(characterName.includes(formatName)){
          return character
        }
      })
      commit('setCharacterFilter',results)
    }
  },
  modules: {
  }
})
