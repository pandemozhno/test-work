import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRecordsStore = defineStore('records', () => {
  const records = ref([])

  function load() {
    records.value = JSON.parse(localStorage.getItem("records")) || [];
  }

  function save() {
    localStorage.setItem("records", JSON.stringify(records.value));
  }

  function addRecord(payload) {
    records.value.push(payload)
    save()
  }

  // load data from localStorage
  load()

  return {
    // state
    records,

    // methods
    addRecord
  }
})
