import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('records', () => {
  const records = ref([])

  function load() {

  }

  function save() {

  }

  function add() {
    save()
  }

  // load data from localStorage
  load()

  return {
    // state
    records,

    // methods
    add
  }
})
