<template>
    <div class="c-form">
        <CInput
            v-model="form.fio"
            placeholder="ФИО"
            :message="getMessage('fio')"
            @blur="validate(form)"
            @input="validate(form)"
            @focus="resetMessage('fio')"
        />
        <CInput
            v-model="form.birthday"
            type="date"
            placeholder="Дата рождения"
            :message="getMessage('birthday')"
            @blur="validate(form)"
            @input="validate(form)"
            @focus="resetMessage('birthday')"
        />
        <CInput
            v-model="form.phone"
            placeholder="Номер телефона +71234567890"
            :message="getMessage('phone')"
            @blur="validate(form)"
            @input="validate(form)"
            @focus="resetMessage('phone')"
        />
        <CInput
            v-model="form.email"
            placeholder="Электронная помощь"
            :message="getMessage('email')"
            @blur="validate(form)"
            @input="validate(form)"
            @focus="resetMessage('email')"
        />
        <CButton
            @click="send"
            :disabled="!valid"
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
  fio: null,
  birtday: null,
  phone: null,
  email: null
  
})

const schema = {
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
    phone: {
        type: "string",
        min: 11,
        messages: {
            required: "Пожалуйстa, введите номер телефона",
            phoneNumber: "Введите корректный номер телефона",
            stringMin: "Введите корректный номер телефона"
        },
        custom: (v, errors) => {
            if (v === null || v === undefined) return
            if (!v.startsWith("+")) errors.push({ type: "phoneNumber" })
            return v.replace(/[^\d+]/g, ""); 
        }
    },
    email: {
        type: "email",
        messages: {
            required: "Пожалуйстa, введите Email",
            email: "Пожалуйстa, введите корректный Email"
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
  