<template>
    <div class="c-input">
        <input
            :type="type"
            :placeholder="placeholder"
            class="c-input__field"
            :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)"
            @blur="emit('blur')"
            @focus="emit('focus')"
        />
        <span class="c-input__message" v-if="message !== null">{{ message }}</span>
    </div>
</template>

<script setup>

const emit = defineEmits([
    'update:modelValue',
    'blur',
    'focus'
])

const {
    placeholder,
    message,
    modelValue,
    type
} = defineProps({
    placeholder: {
        type: String,
        default: "Заполните поле"
    },
    message: {
        type: String,
        default: null
    },
    modelValue: {
        type: String,
        default: null
    },
    type: {
        type: String,
        default: 'text'
    }
})

</script>
  
<style lang="scss">
.c-input {
    color: var(--blue-500);
    font-size: .8rem;
    display: inline-flex;
    flex-direction: column;
    margin-bottom: 1rem;
    &__field {
        display: inline-flex;
        border: solid 1px var(--grey-300);
        border-radius: 4px;
        outline: none;
        min-width: 15rem;
        padding: .4rem;
    }
    &__message {
        margin-top: .3rem;
    }
}
</style>
  