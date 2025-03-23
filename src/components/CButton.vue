<template>
    <button
        :class="['c-button', {'c-button_disabled': disabled }, {'c-button_preloader': preloader }]"
    >
        <CIcon
            v-if="preloader"
            name="preloader"
            class="c-button__preloader"
        />
        <slot v-else/>
    </button>
</template>

<script setup>
import CIcon from './CIcon.vue'

const {
    preloader,
    disabled
} = defineProps({
    preloader: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss">
.c-button {
    outline: 0;
    border: 0;
    background: var(--green-gradient-600);
    min-width: 10rem;
    min-height: 3rem;
    border-radius: .4rem;
    color: var(--dark);
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background: var(--green-gradient-300);
        color: var(--light);
    }
    &:active {
        background: var(--green);
        color: var(--light);
    }
    &_disabled {
        background: var(--grey-300);
        color: var(--grey);
        cursor: not-allowed;
        &:hover, &:active {
            background: var(--grey-300);
            color: var(--grey);
        }
    }
    // button class
    &_preloader {
        background: var(--grey-300);
        cursor: wait;
        &:hover, &:active {
            background: var(--grey-300);
        }
    }
    // icon element class
    &__preloader {
        fill: var(--grey);
    }
}
</style>
  