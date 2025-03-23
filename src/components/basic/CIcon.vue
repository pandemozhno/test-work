<template>
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="['c-icon', `c-icon_${name}`]"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            :d="icons[name]"
        />
    </svg>
</template>

<script setup>

const {
    name
} = defineProps({
    name: {
        type: String,
        default: null
    }
})

const icons = {
    "preloader": "M12 21C12 20.4477 11.55 20.0066 11.002 19.9384C7.05471 19.4471 4 16.0803 4 12C4 7.58172 7.58172 4 12 4C16.0803 4 19.4471 7.05471 19.9384 11.002C20.0066 11.55 20.4477 12 21 12V12C21.5523 12 22.0053 11.551 21.9508 11.0014C21.4497 5.94741 17.1858 2 12 2C6.47715 2 2 6.47715 2 12C2 17.1858 5.94741 21.4497 11.0014 21.9508C11.551 22.0053 12 21.5523 12 21V21Z"
}

</script>
  
<style lang="scss">
.c-icon {
    &_preloader {
        animation: spin 1s infinite linear;
    }
}
</style>
  