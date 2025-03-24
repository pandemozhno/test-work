<template>
    <div class="c-form">
        <CInput
            v-model="form.fio"
            placeholder="ФИО"
            :message="getMessage('fio')"
            @blur="validate({ fio: form.fio })"
            @focus="resetMessage('fio')"
        />
        <CInput
            v-model="form.birtday"
            type="date"
            placeholder="Дата рождения"
            :message="getMessage('birthday')"
            @blur="validate({ birtday: form.birthday })"
            @focus="resetMessage('birthday')"
        />
        <CInput
            v-model="form.phone"
            placeholder="Номер телефона +71234567890"
            :message="getMessage('phone')"
            @blur="validate({ phone: form.phone })"
            @focus="resetMessage('phone')"
        />
        <CInput
            v-model="form.email"
            placeholder="Электронная помощь"
            :message="getMessage('email')"
            @blur="validate({ email: form.email })"
            @focus="resetMessage('email')"
        />
        <CButton
            @click="send"
            :disabled="valid"
            :preloader="preload"
        >Далее</CButton>
    </div>
</template>

<script setup>
import CInput from "@/components/basic/CInput.vue"
import CButton from "@/components/basic/CButton.vue"
import useValidation from "@/composables/useValidation.js"
import { useRecordsStore } from "@/stores/records.js"
import { reactive, ref } from "vue"

const preload = ref(false)

const form = reactive({
  phone: null,
  fio: null,
  email: null,
  birtday: null
})

const schema = {
    phone: {
        type: "string",
        messages: {
            required: "Пожалуйстa, введите номер телефона"
        }
    },
    fio: {
        type: "string",
        messages: {
            required: "Пожалуйстa, введите ФИО"
        }
    },
    birthday: {
        type: "string",
        messages: {
            required: "Пожалуйстa, введите дату рождения"
        }
    },
    email: {
        type: "email",
        messages: {
            required: "Пожалуйстa, введите ФИО"
        }
    }
};

const {
    addRecord
} = useRecordsStore()

const {
    valid,
    validate,
    resetMessage,
    getMessage
} = useValidation(schema)

function clearForm () {
    form.phone = null
    form.fio = null
    form.email = null
    form.birthday = null
}

function send() {
    const time = (Math.floor(Math.random() * 2) + 1) * 1000
    preload.value = true
    setTimeout(() => {
        addRecord({ ...form })
        preload.value = false
        clearForm()
    }, time)
}

</script>

<style lang="scss">
.c-form {
    display: flex;
    flex-direction: column;
    width: 15rem;
    margin: 0 auto;
}
</style>
  