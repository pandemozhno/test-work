<template>
    <div class="c-tabs">
        <div class="c-tabs__headers">
            <div
                v-for="header in headers"
                :class="['c-tabs__header', { 'c-tabs__header_active': isActive(header.value) }]"
                @click="setActive(header.value)"
            > {{ header.title }} </div>
        </div>
        <div
            class="c-tabs__content"
        >
            <template v-for="header in headers">
                <slot v-if="isActive(header.value)" :name="header.value"/>
            </template>
        </div>
    </div>
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

const activeTab = ref(headers[0].value)

// Active methods
function isActive (value) {
    return value === activeTab.value
}

function setActive (value) {
    activeTab.value = value
}

// 

</script>

<style lang="scss">
.c-tabs {
    &__headers {
        display: flex;
        justify-content: center;
    }
    &__header {
        padding: .5rem 1.5rem;
        cursor: pointer;
        margin: 0 .5rem;
        border-bottom: solid 2px var(--grey-300);
        color: var(--grey);
        font-weight: 600;
        &_active {
            color: var(--dark);
            border-bottom: solid 2px var(--green);
        }
    }

}
</style>
  