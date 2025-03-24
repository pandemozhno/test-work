import { ref } from 'vue'
import Validator from "fastest-validator"

function useValidation(schema) {
    const v = new Validator()
    const check = v.compile(schema)
    const validationResult = ref([])
    const valid = ref(false)

    function validate(fields) {
        console.log('validate')
        let errorsList = check(fields)
        // set valid for all fields when transffered all fields
        if (Object.keys(schema).length === Object.keys(fields).length) {
            valid.value = errorsList.length === 0
        } else {
            valid.value = false
        }
        validationResult.value = errorsList
        return validationResult.value.length === 0
    }

    function resetMessage(field) {
        if (validationResult.value.length === 0 || validationResult.value) return
        const i = validationResult.value.findIndex(e => e.field === field)
        if (i >= 0) validationResult.value.splice(i, 1)
    }

    function reset() {
        validationResult.value = []
    }

    function getMessage(field) {
        if (validationResult.value.length === 0 || validationResult.value) return
        const i = validationResult.value.findIndex(e => e.field === field)
        return validationResult?.value[i]?.message || null
    }

    return {
        valid,

        // functions
        validate,
        resetMessage,
        getMessage,
        reset
    }
}

export default useValidation