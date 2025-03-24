<template>
  <div class="main">
    <CTabs
      class="main__tabs"
      :tabs="tabs"
      @change="setPageHash"
      active="form"
    >
      <template #form>
        <CForm />
      </template>

      <template #data>
        <CTable
          :headers="headers"
          :rows="records"
        >
          <template #td-birthday="{ value }">
            {{ formattedDate(value) }}
          </template>
        </CTable>
      </template>
    </CTabs>
  </div>
</template>

<script setup>
import CTabs from '@/components/basic/CTabs.vue'
import CForm from '@/components/composite/CForm.vue'
import CTable from '@/components/basic/CTable.vue'
import { useRecordsStore } from "@/stores/records.js"
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'

// set page hash
const router = useRouter()
function setPageHash(value) {
  router.push({  hash: `#${value}` })
}
setPageHash('form')

// tabs
const tabs = [
  { title: 'Форма', value: "form" },
  { title: 'Данные', value: "data" }
]

// table
const headers = [
  { title: 'ФИО', value: 'fio' },
  { title: 'Дата рождения', value: 'birthday' },
  { title: 'Номер телефона', value: 'phone' },
  { title: 'Электронная почта', value: 'email' }
]

// TODO: to composables
function formattedDate(payload) {
  let date = new Date(payload)
  return date.toLocaleDateString("ru-RU")
}

const {
  records
} = storeToRefs(useRecordsStore())

</script>

<style lang="scss">
.main {
  padding-top: 4rem;
  &__tabs {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
