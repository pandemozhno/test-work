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
import { ref, watch } from "vue"
import { useRoute } from "vue-router" 

const route  = useRoute();

const emit = defineEmits([
    'change'
])

// set active tab from route
watch(route, async (newRoute, oldRoute) => setActive(newRoute.hash.substring(1)))

const {
    tabs,
    active
} = defineProps({
    tabs: {
        type: Array,
        default: () => []
    },
    active: {
        type: String,
        default: null
    }
})

const activeTab = ref(active || tabs.find(() => true).value)

// Active methods
function isActive (value) {
    return value === activeTab.value
}

function setActive (value) {
    activeTab.value = value
    emit('change', value)
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
    &__content {
        padding-top: 3rem;
    }
}
</style>
  