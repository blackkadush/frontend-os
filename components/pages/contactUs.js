import signUpForm from './../Signup'
export default function contactUs() {

    const contactUsContainer = document.createElement('main')
    contactUsContainer.setAttribute('class', 'contact-US_container')

    const LeftContainer = document.createElement('div')
    const LeftContainerPicture = document.createElement('img')
    LeftContainerPicture.setAttribute('class', 'contact-us_Left-Container-Picture')
    LeftContainerPicture.setAttribute('src', './../../assets/Images/Contact Us.jpg')
    LeftContainer.setAttribute('class', 'contact-us_Left-container')
    LeftContainer.append(LeftContainerPicture)
    contactUsContainer.append(LeftContainer)

    const RightContainer = document.createElement('div')
    RightContainer.setAttribute('class', 'contact-us_Right-container')
    RightContainer.append(signUpForm())
    contactUsContainer.append(RightContainer)

   
    return contactUsContainer
}

