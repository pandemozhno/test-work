<template>
    <table class="c-table">
        <thead>
            <tr>
                <th class="c-table__header" 
                    v-for="header in headers"
                >
                    <slot :name="`head-${header.value}`">{{ header.title }}</slot>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows" class="c-table__tr">
                <td v-for="header in headers" class="c-table__td">
                    <slot
                        :name="`td-${header.value}`"
                    >{{ row[header.value] }}</slot>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref } from "vue"

const {
    rows,
    headers
} = defineProps({
    rows: {
        type: Array,
        default: () => []
    },
    headers: {
        type: Array,
        default: () => []
    }
})

</script>

<style lang="scss">
.c-table {
    width: 100%;
    border: solid 1px var(--dark-300);
    &__header {
        background: var(--grey-300);
        color: var(--dark);
        font-weight: 600;
        padding: .5rem 1rem;
        border-right: solid 1px var(--dark-300);
    }
    &__tr {
        
    }
    &__td {
        text-align: center;
        padding: .5rem;
        border: solid 1px var(--dark-300);
    }
}
</style>
  