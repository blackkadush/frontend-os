

export default function footer() {
    const Footer = document.createElement('footer')
    Footer.setAttribute('class', 'footer')

    const instagramImg = document.createElement('img')
    instagramImg.setAttribute('src', './../../assets/icons/instagram.svg')
    const instagramUrl = document.createElement('a')
    instagramUrl.setAttribute('href', 'https://www.instagram.com')
    instagramUrl.append(instagramImg)    

    const facebookImg = document.createElement('img')
    facebookImg.setAttribute('src', './../../assets/icons/facebook.svg')
    const facebookUrl = document.createElement('a')
    facebookUrl.setAttribute('href', 'https://www.facebook.com')
    facebookUrl.append(facebookImg)
    
    const linkedinImg = document.createElement('img')
    linkedinImg.setAttribute('src', './../../assets/icons/linkedin.svg')
    const linkedinUrl = document.createElement('a')
    linkedinUrl.setAttribute('href', 'https://www.linkedin.com')
    linkedinUrl.append(linkedinImg)

    const twitterImg = document.createElement('img')
    twitterImg.setAttribute('src', './../../assets/icons/twitter.svg')
    const twitterUrl = document.createElement('a')
    twitterUrl.setAttribute('href', 'https://www.twitter.com')
    twitterUrl.append(twitterImg)

    // const TeamBuild = document.createElement('p')
    // const TeamBuildText = document.createTextNode('Build By Ocean Sustainability Team')
    // TeamBuild.append(TeamBuildText)
    
    
    Footer.append(linkedinUrl)
    Footer.append(facebookUrl)
    Footer.append(instagramUrl)
    Footer.append(twitterUrl)
    // Footer.append(TeamBuild)

    


    return Footer
}