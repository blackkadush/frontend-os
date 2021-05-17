export default function donateButton(){
    
    const form = document.createElement('form')
    form.setAttribute('target', '_top')
    form.setAttribute('method', 'post')
    form.setAttribute('action', 'https://www.paypal.com/donate')
    
    const input = document.createElement('input')
    input.setAttribute('type', 'hidden')
    input.setAttribute('value', 'PA78RNCUKP4PJ')
    input.setAttribute('name', 'hosted_button_id')
    
    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    submit.setAttribute('value', 'Donate')

    form.append(input)
    form.append(submit)

    return form
}