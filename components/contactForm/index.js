export default function contactUsForm(){

    const form = document.createElement('form')
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

    const message = document.createElement('textarea')
    const messageLabel = document.createElement('label')
    const messageLabelText = document.createTextNode('Message:')
    messageLabel.append(messageLabelText)
    messageLabel.append(message)
    messageLabel.setAttribute('for', 'name')



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
                message: message.value
            }
            console.log("formData => ", formData);
            
            fetch('http://localhost:3010/users/contactus', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            .then(result => {
                let resultText;
                form.removeChild(nameLabel)
                form.removeChild(emailLabel)
                form.removeChild(messageLabel)
                form.removeChild(submit)
                if (result.status === 200) {
                    resultText = document.createTextNode('We have received your message and we will be in touch with you.')
                } else {
                    resultText = document.createTextNode('Oppps! Something went wrong. Please try again.')
                }
                form.append(resultText)
            })
    })

    form.append(nameLabel)
    form.append(emailLabel)
    form.append(messageLabel)
    form.append(submit)

    return form

}

