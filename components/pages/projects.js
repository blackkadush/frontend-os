
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

    const RightContainer = document.createElement('div')
    RightContainer.setAttribute('class', 'Projects_Right-container')
    // RightContainer.append(Signup())
    
    
    signupContainer.append(RightContainer)



    

    return signupContainer
}

