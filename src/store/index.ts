import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

Vue.use(Vuex)

// const store = new Vuex.Store({})
// @Module({ dynamic: true, store: store, name: "aaa" })

@Module({ stateFactory: true, namespaced: true, name: 'todos' })
class Vehicle extends VuexModule {

    test: any = '';

    @Mutation
    public addWheel(test: any) {
      this.test = "fumi042";
      console.log(test)
    }

    @Action
    async register (test: any) {
      test = 'fumi042'
      //const response = await axios.get('https://nagayoshi042.com/vuesplash/api/photos/${id}/like', data)
      this.context.commit('addWheel', test)
      console.log(test)
      // https://nagayoshi042.com/vuesplash/api/photos
    }

    // state: {
    // },
    // mutations: {
    // },
    // actions: {
    // },
    // modules: {
    // }
}

export default new Vuex.Store({
  state: {},
  modules: {
    Vehicle
  }
})