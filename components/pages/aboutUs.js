
export default function aboutUs() {
    
    const aboutUsContainer = document.createElement('main')
    aboutUsContainer.setAttribute('class', 'about-us_container')
    
    const topContainer = document.createElement('div')
    topContainer.setAttribute('class', 'about-us_top-container')
    aboutUsContainer.append(topContainer)

    const topLeftContainer = document.createElement('div')
    const topLeftContainerPicture = document.createElement('img')
    topLeftContainerPicture.setAttribute('class', 'about-us_top-Left-Container-Picture')
    topLeftContainerPicture.setAttribute('src', './../../assets/Images/beach.jpg')
    topLeftContainer.setAttribute('class', 'about-us_top-left-container')
    topLeftContainer.append(topLeftContainerPicture)
    topContainer.append(topLeftContainer)

    
    const topRightContainer = document.createElement('div')
    topRightContainer.setAttribute('class', 'about-us_top-right-container')
    topContainer.append(topRightContainer)

    const topRightContainerFirst = document.createElement('div')
    const topRightContainerFirstH1 = document.createElement('h1')
    const topRightContainerFirstH1Text = document.createTextNode ('Ocean Sustainability')
    topRightContainerFirstH1.append(topRightContainerFirstH1Text)
    topRightContainerFirst.setAttribute('class', 'about-us_top-right-container-First')
    topRightContainer.append(topRightContainerFirst)
    

    const topRightContainerSecond = document.createElement('div')
    const topRightContainerSecondParagraph = document.createElement('p')
    const topRightContainerSecondParagraphText = document.createTextNode('Our non-profit organization focuses on ocean sustainability with a goal to preserve, protect, and defend the oceans. We hope to spread awareness on how our oceans affect our every lives such as the air we breathe, food, climate regulation, and transportation.')
    topRightContainerSecondParagraph.append(topRightContainerSecondParagraphText)
    topRightContainerSecond.setAttribute('class', 'about-us_top-right-container-Second')
    topRightContainer.append(topRightContainerSecond)


    const topRightContainerThird = document.createElement('div')
    const topRightContainerThirdH1 = document.createElement('h1') //h1 tag
    const topRightContainerThirdParagraph = document.createElement('p') //p tag
    const topRightContainerThirdH1Text = document.createTextNode ('Who We Are')
    const topRightContainerThirdParagraphText = document.createTextNode('We are a nonprofit organization called "Ocean Sustainability Nonprofit". We stand for saving our beaches and oceans from all possible harm. This includes but helping our turtles, beaches, whales, fishes and more!')
    topRightContainerThirdH1.append(topRightContainerThirdH1Text)
    topRightContainerThirdParagraph.append(topRightContainerThirdParagraphText)
    topRightContainerThird.setAttribute('class', 'about-us_top-right-container-Third')
    
    
    const bottomContainer = document.createElement('div')
    bottomContainer.setAttribute('class', 'about-us_bottom-container')
    const bottomContainerH1 = document.createElement('h1') // h1 tag
    const bottomContainerParagraph = document.createElement('p')// p tag
    const bottomContainerH1Text = document.createTextNode('About The Ocean Sustainability')
    const bottomContainerParagraphText = document.createTextNode('Since the ocean covers 71% of the earth, our community is global. We have grantees, partners, and projects on all of the world’s continents, and we engage with donors and governments involved in ocean conservation anywhere in the world. The Ocean Foundation’s Board of Directors is comprised of individuals with significant experience in marine conservation philanthropy as well as esteemed professionals in ocean conservation. We also have a growing international advisory board of scientists, policy makers, educational specialists, and other top experts.The Ocean Foundation uses a well-established business model, the community foundation, to serve donors and partners who are passionate about the future of our coasts and ocean. This model enables The Ocean Foundation to increase the capacity of conservation organizations, host various projects and funds, and effectively connect regional and community-based non-profits with the support that they need. By raising millions of dollars each year from individuals, corporate donors, private foundations, and governments, we succeed in promoting healthy ocean ecosystems that benefit the human communities depending on them.We advance innovative and customized philanthropic solutions for donors. We simplify the giving process so that they can focus on their chosen passion for the coasts and ocean. We also evaluate marine conservation projects and determine the most effective organizations for our donors to support.')
    bottomContainerH1.append(bottomContainerH1Text)
    bottomContainerParagraph.append(bottomContainerParagraphText)
    bottomContainer.append(bottomContainerH1)
    bottomContainer.append(bottomContainerParagraphText)
    aboutUsContainer.append(bottomContainer)
    

    

    topRightContainerFirst.append(topRightContainerFirstH1)
    topRightContainerSecond.append(topRightContainerSecondParagraph)
    topRightContainer.append(topRightContainerThird)
    topRightContainerThird.append(topRightContainerThirdH1)
    topRightContainerThird.append(topRightContainerThirdParagraph)

    
    

    
    return aboutUsContainer
}

