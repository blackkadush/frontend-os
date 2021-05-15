export default function signInForm(){
    
    const form = document.createElement('form')
    form.setAttribute('target', '_blank')
    form.setAttribute('id', 'signup-form')
    
    const emailInput = document.createElement('input')
    emailInput.setAttribute('type', 'email')
    emailInput.setAttribute('name', 'email')
    const emailLabel = document.createElement('label')
    const emailLabelText = document.createTextNode('Email:')
    emailLabel.append(emailLabelText)
    emailLabel.append(emailInput)
    emailLabel.setAttribute('for', 'email')

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
    submit.setAttribute('value', 'Signin')
    submit.setAttribute('id', 'submit-form')

    form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = {
                email: emailInput.value,
                password: passwordInput.value
            }
            console.log("formData => ", formData);
            
            fetch('http://localhost:3010/users/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            .then(result => {
                console.log('result => ', result);
                let resultText;
                form.removeChild(emailLabel)
                form.removeChild(passwordLabel)
                form.removeChild(submit)
                if (result.status === 200) {
                    resultText = document.createTextNode('Thank you for signing in.')
                } else {
                    resultText = document.createTextNode('Please try again.')
                }
                form.append(resultText)
            })
    })

    form.append(emailLabel)
    form.append(passwordLabel)
    form.append(submit)

    return form
}