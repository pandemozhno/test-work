import { ref } from 'vue'
import Validator from "fastest-validator"

function useValidation(schema) {
    const v = new Validator({ useNewCustomCheckerFunction: true })
    const check = v.compile(schema)
    const validationResult = ref([])
    const valid = ref(false)

    function validate(fields) {
        validationResult.value = check(fields)
        if (validationResult.value.length === 0) {
            valid.value = true
        } else if (!Array.isArray(validationResult.value)) {
            valid.value = validationResult.value
        } else {
            valid.value = false
        }
        return valid.value
    }

    function resetMessage(field) {
        if (!Array.isArray(validationResult.value) || validationResult.value.length === 0) return
        const i = validationResult.value.findIndex(e => e.field === field)
        if (i >= 0) validationResult.value.splice(i, 1)
    }

    function reset() {
        validationResult.value = []
    }

    function getMessage(field) {
        if (!Array.isArray(validationResult.value) || validationResult.value.length === 0) return
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