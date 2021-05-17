import signUpForm from './../Signup'
import signInForm from './../SignIn'
export default function Projects() {

    const signupContainer = document.createElement('main')
    signupContainer.setAttribute('class', 'Projects_container')

    const LeftContainer = document.createElement('div')
    const LeftContainerPicture = document.createElement('img')
    LeftContainerPicture.setAttribute('class', 'Projects_Left-Container-Picture')
    LeftContainerPicture.setAttribute('src', './../../assets/Images/Signup.jpg')
    LeftContainer.setAttribute('class', 'Projects_Left-container')
    LeftContainer.append(LeftContainerPicture)
    signupContainer.append(LeftContainer)

    const signup = signUpForm()
    const RightContainer = document.createElement('div')
    RightContainer.setAttribute('class', 'Projects_Right-container')
    RightContainer.append(signup)
    signupContainer.append(RightContainer)

    const orSignin = document.createElement('p')
    //orSignin.setAttribute('class', 'orSignin')
    
    const orSigninText = document.createTextNode('Or Signin')
   
    orSignin.append(orSigninText)
    orSignin.addEventListener('click', () => {
        RightContainer.removeChild(signup)
        RightContainer.removeChild(orSignin)
        RightContainer.append(signInForm())
    })

    RightContainer.append(orSignin)

    return signupContainer
}

