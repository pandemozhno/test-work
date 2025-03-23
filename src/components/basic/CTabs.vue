<template>
    <div class="c-tabs">
        <div class="c-tabs__headers">
            <div
                v-for="tab in tabs"
                :class="['c-tabs__header', { 'c-tabs__header_active': isActive(tab.value) }]"
                @click="setActive(tab.value)"
            > {{ tab.title }} </div>
        </div>
        <div
            class="c-tabs__content"
        >
            <template v-for="tab in tabs">
                <slot v-if="isActive(tab.value)" :name="tab.value"/>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const {
    tabs
} = defineProps({
    tabs: {
        type: Array,
        default: () => []
    }
})

const activeTab = ref(tabs[0].value)

// Active methods
function isActive (value) {
    return value === activeTab.value
}

function setActive (value) {
    activeTab.value = value
}

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
  