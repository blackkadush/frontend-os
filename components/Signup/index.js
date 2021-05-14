export default function signUpForm(){
    
    const form = document.createElement('form')
    // form.setAttribute('onsubmit', 'return postData()')
    form.setAttribute('target', '_blank')
    form.setAttribute('id', 'signup-form')

    const nameInput = document.createElement('input')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('name', 'name')
    const nameLabel = document.createElement('label')
    const nameLabelText = document.createTextNode('Full Name:')
    nameLabel.append(nameLabelText)
    nameLabel.append(nameInput)
    nameInput.setAttribute('for', 'name')
    
    const emailInput = document.createElement('input')
    emailInput.setAttribute('type', 'email')
    emailInput.setAttribute('name', 'email')
    const emailLabel = document.createElement('label')
    const emailLabelText = document.createTextNode('Email:')
    emailLabel.append(emailLabelText)
    emailLabel.append(emailInput)
    emailLabel.setAttribute('for', 'email')

    const phoneNumberInput = document.createElement('input')
    phoneNumberInput.setAttribute('type', 'tel')
    phoneNumberInput.setAttribute('name', 'tel')
    const phoneNumberLabel = document.createElement('label')
    const phoneNumberLabelText = document.createTextNode('Phone Number:')
    phoneNumberLabel.append(phoneNumberLabelText)
    phoneNumberLabel.append(phoneNumberInput)
    phoneNumberLabel.setAttribute('for', 'tel')

    const passwordInput = document.createElement('input')
    passwordInput.setAttribute('type', 'password')
    passwordInput.setAttribute('name', 'password')
    const passwordLabel = document.createElement('label')
    const passwordLabelText = document.createTextNode('Password:')
    passwordLabel.append(passwordLabelText)
    passwordLabel.append(passwordInput)
    passwordLabel.setAttribute('for', 'password')



    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    submit.setAttribute('value', 'submit')
    // const submitText = document.createTextNode('Submit')
    // submit.append(submitText)
    submit.setAttribute('id', 'submit-form')//CSS id for Submit Button

    form.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('test');
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneNumberInput.value,
                password: passwordInput.value
            }
            console.log("formData => ", formData);
            
            fetch('http://localhost:3010/users/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
    })



    form.append(nameLabel)
    form.append(emailLabel)
    form.append(phoneNumberLabel)
    form.append(passwordLabel)
    form.append(submit)

    return form

}

