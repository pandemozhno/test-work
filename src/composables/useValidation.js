import { ref } from 'vue'
import Validator from "fastest-validator"

function useValidation(schema) {
    const v = new Validator({ useNewCustomCheckerFunction: true })
    const check = v.compile(schema)
    const validationResult = ref([])
    const valid = ref(false)
    // check field have once focus event, then return message
    const canShowError = new Set()

    function validate(fields) {
        let errorsList = check(fields)
        validationResult.value = errorsList
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
        // canShowError
        canShowError.add(field)
        
        if (typeof validationResult.value === 'boolean' || validationResult.value.length === 0) return
        const fieldIndex = validationResult.value.findIndex(e => e.field === field)
        if (fieldIndex >= 0) validationResult.value.splice(fieldIndex, 1)
    }

    function reset() {
        validationResult.value = []
    }

    function getMessage(field) {
        // canShowError
        if (!canShowError.has(field)) return null

        if (typeof validationResult.value === 'boolean' || validationResult.value.length === 0) return
        const fieldIndex = validationResult.value.findIndex(e => e.field === field)
        return validationResult?.value[fieldIndex]?.message || null
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