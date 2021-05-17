import donateButton from './../donateButton'

export default function donate() {
  
    const donateContainer = document.createElement('main')
    donateContainer.setAttribute('class', 'donate_container')

    const firstContainer = document.createElement('div')
    firstContainer.setAttribute('class', 'donate_first-container')
    donateContainer.append(firstContainer)  

    const firstLeftContainer = document.createElement('div')
    const firstLeftContainerPicture = document.createElement('img')
    firstLeftContainerPicture.setAttribute('class', 'donate_first-Left-Container-Picture')
    firstLeftContainerPicture.setAttribute('src', './../../assets/Images/Turtle.jpeg')
    firstLeftContainer.setAttribute('class', 'donate_first-left-container')
    firstLeftContainer.append(firstLeftContainerPicture)
    firstContainer.append(firstLeftContainer)

    const firstRightContainer = document.createElement('div')
    firstRightContainer.setAttribute('class', 'donate_first-Right-container')
    firstContainer.append(firstRightContainer)

    const firstRightContainerBox1 = document.createElement('div')
    const firstRightContainerBox1H1 = document.createElement('h1') //h1 tag
    const firstRightContainerBox1H1Text = document.createTextNode ('Save Turtles')
    firstRightContainerBox1H1.append(firstRightContainerBox1H1Text)
    firstRightContainerBox1.setAttribute('class', 'donate_first-right-container-box1')
    firstRightContainerBox1.append(firstRightContainerBox1H1)
    firstRightContainer.append(firstRightContainerBox1)
    firstContainer.append(firstRightContainer)

    const firstRightContainerBox2 = document.createElement('div')
    const firstRightContainerBox2Paragraph = document.createElement('p') //Paragraph tag
    const firstRightContainerBox2ParagraphText = document.createTextNode (
        `Beyond “just" saving sea turtles, our programs aim to leverage action for 
        broader marine conservation. Because saving sea turtles and saving the oceans 
        require many of the same actions, like addressing unsustainable fishing, reducing 
        pollution, mitigating global warming, protecting habitats like coral reefs, 
        mangroves, and seagrass beds, maintaining natural coastlines, and developing 
        sustainable local economies. Our experience shows that investing in sea turtle 
        conservation efforts has a disproportionately positive impact on improving 
        overall ocean health. Saving sea turtles is saving the oceans.`)
    firstRightContainerBox2Paragraph.append(firstRightContainerBox2ParagraphText)
    firstRightContainerBox2.setAttribute('class', 'donate_first-right-container-box2')
    firstRightContainerBox2.append(firstRightContainerBox2Paragraph)
    firstRightContainer.append(firstRightContainerBox2)
    firstContainer.append(firstRightContainer)

    const firstRightContainerBox3 = document.createElement('div')
    firstRightContainerBox3.append(donateButton())
    firstRightContainerBox3.setAttribute('class', 'donate_first-right-container-box3')
    firstRightContainer.append(firstRightContainerBox3)
    firstContainer.append(firstRightContainer)

    const secondContainer = document.createElement('div')
    secondContainer.setAttribute('class', 'donate_second-container')
    donateContainer.append(secondContainer)

    const secondRightContainer = document.createElement('div')
    const secondRightContainerPicture = document.createElement('img')
    secondRightContainerPicture.setAttribute('class', 'donate_second-Right-Container-Picture')
    secondRightContainerPicture.setAttribute('src', './../../assets/Images/Whale.jpg')
    secondRightContainer.setAttribute('class', 'donate_second-Right-container')
    secondRightContainer.append(secondRightContainerPicture)
    secondContainer.append(secondRightContainer)

    const secondLeftContainer = document.createElement('div')
    secondLeftContainer.setAttribute('class', 'donate_second-Left-container')
    secondContainer.append(secondLeftContainer)

    const secondLeftContainerBox1 = document.createElement('div')
    const secondLeftContainerBox1H1 = document.createElement('h1') //h1 tag
    const secondLeftContainerBox1H1Text = document.createTextNode ('Save Whales')
    secondLeftContainerBox1H1.append(secondLeftContainerBox1H1Text)
    secondLeftContainerBox1.setAttribute('class', 'donate_second-Left-container-box1')
    secondLeftContainerBox1.append(secondLeftContainerBox1H1)
    secondLeftContainer.append(secondLeftContainerBox1)
    secondContainer.append(secondLeftContainer)

    const secondLeftContainerBox2 = document.createElement('div')
    const secondLeftContainerBox2Paragraph = document.createElement('p') //Paragraph tag
    const secondLeftContainerBox2ParagraphText = document.createTextNode ('No one action will ensure the safety of whales for all time. This is why Save the Whales devotes so much time reaching out to children about marine life. So far, over 330,000 children have learned about whales and how to save sea life through Whales on Wheels (WOW™)is based in Monterey, California and has a program reach around the Monterey Bay.Since 2003, the Save The Whales BWET Program has been taking students out in the natural environment to observe their local watershed, take water quality data and use scientific intstruments. This nine-month hands-on opportunity allows students to see how human activities on land caused by pollution can enter creeks and streams and flow to the ocean.')
    secondLeftContainerBox2Paragraph.append(secondLeftContainerBox2ParagraphText)
    secondLeftContainerBox2.setAttribute('class', 'donate_second-Left-container-box2')
    secondLeftContainerBox2.append(secondLeftContainerBox2Paragraph)
    secondLeftContainer.append(secondLeftContainerBox2)
    secondContainer.append(secondLeftContainer)

    const secondLeftContainerBox3 = document.createElement('div')
    secondLeftContainerBox3.append(donateButton())
    secondLeftContainerBox3.setAttribute('class', 'donate_second-Left-container-box3')
    secondLeftContainer.append(secondLeftContainerBox3)
    secondContainer.append(secondLeftContainer)

    const thirdContainer = document.createElement('div')
    thirdContainer.setAttribute('class', 'donate_third-container')
    donateContainer.append(thirdContainer)

    const thirdLeftContainer = document.createElement('div')
    const thirdLeftContainerPicture = document.createElement('img')
    thirdLeftContainerPicture.setAttribute('class', 'donate_third-Left-Container-Picture')
    thirdLeftContainerPicture.setAttribute('src', './../../assets/Images/beachSunset.png')
    thirdLeftContainer.setAttribute('class', 'donate_third-left-container')
    thirdLeftContainer.append(thirdLeftContainerPicture)
    thirdContainer.append(thirdLeftContainer)

    const thirdRightContainer = document.createElement('div')
    thirdRightContainer.setAttribute('class', 'donate_third-Right-container')
    thirdContainer.append(thirdRightContainer)

    const thirdRightContainerBox1 = document.createElement('div')
    const thirdRightContainerBox1H1 = document.createElement('h1') //h1 tag
    const thirdRightContainerBox1H1Text = document.createTextNode ('Save Beaches')
    thirdRightContainerBox1H1.append(thirdRightContainerBox1H1Text)
    thirdRightContainerBox1.setAttribute('class', 'donate_third-right-container-box1')
    thirdRightContainerBox1.append(thirdRightContainerBox1H1)
    thirdRightContainer.append(thirdRightContainerBox1)
    thirdContainer.append(thirdRightContainer)

    const thirdRightContainerBox2 = document.createElement('div')
    const thirdRightContainerBox2Paragraph = document.createElement('p') //Paragraph tag
    const thirdRightContainerBox2ParagraphText = document.createTextNode ('We have to take action if we want to enjoy the Earth’s coastal areas for years to come. Even though the beach might feel like just a vacation hot spot, it’s so much more. In coastal areas, the beach is a big part of the economy. Think of all the people that have jobs related to tourism – hotel staff, lifeguards, tour operators…. and so many more. Beaches protect cities and towns from wind and waves and act as a buffer. They’re also a habitat for wildlife like sea birds, crabs, and seaweed and play a role in the ecosystem. Those adorable baby sea turtles? Beach pollution or erosion can really hurt their chances of a healthy life.')
    thirdRightContainerBox2Paragraph.append(thirdRightContainerBox2ParagraphText)
    thirdRightContainerBox2.setAttribute('class', 'donate_third-right-container-box2')
    thirdRightContainerBox2.append(thirdRightContainerBox2Paragraph)
    thirdRightContainer.append(thirdRightContainerBox2)
    thirdContainer.append(thirdRightContainer)

    const thirdRightContainerBox3 = document.createElement('div')
    thirdRightContainerBox3.append(donateButton())
    thirdRightContainerBox3.setAttribute('class', 'donate_third-right-container-box3')
    thirdRightContainer.append(thirdRightContainerBox3)
    thirdContainer.append(thirdRightContainer)

    return donateContainer
}

