<template>
  <div class="main">
    <CTabs
      :headers="headers"
      :rows="rows"
    >
      <template #form>
        <CForm></CForm>
      </template>

      <template #data>
        <CTable>
        </CTable>
      </template>

    </CTabs>
  </div>
</template>

<script setup>
import CTabs from '@/components/basic/CTabs.vue'
import CForm from '@/components/composite/CForm.vue'

const headers = [
  { title: 'Форма', value: "form" },
  { title: 'Данные', value: "data" }
]

const rows = []
</script>

<style lang="scss">
.main {

}
</style>
