const validateForm = (valuesUser) => {
    const errors = {}
    if (!valuesUser.userInput) errors.userInput = 'Este es un campo obligatorio'
    if (!valuesUser.userPassword) errors.userPassword = 'Este es un campo obligatorio'
    if (!valuesUser.repeatUserPassword) errors.repeatUserPassword = 'La contraseña es un campo obligatorio'
    if (!valuesUser.userRole) errors.userRole = 'Se debe seleccionar al menos un rol'
    return errors
}

export default validateForm
