const renderGifts = async () => {
    const response = await fetch('/gifts')
    const data = await response.json()

    const mainContent = document.querySelector('#main-content')

    if(data) {
        data.map(gift => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            // Set the background image of the top-container
            topContainer.style.backgroundImage = `url(${gift.image})`

            // Create an h3 element, and set its text content to the gift's name.
            const name = document.createElement('h3')
            name.textContent = gift.name
            bottomContainer.appendChild(name)

            // Create a p element, and set its textcontent to the gift's price
            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + gift.pricePoint
            bottomContainer.appendChild(pricePoint)

            // Create another p element, and set its text content to the gift's audience.
            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + gift.audience
            bottomContainer.appendChild(audience)

            // Create an a element, and set its text content to "Read More >"
            const link = document.createElement('a')
            link.textContent = "Read More >"
            link.setAttribute('role', 'button')
            link.href = `/gifts/${gift.id}`
            bottomContainer.appendChild(link)

            // Append top-container and bottom-container to the card
            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            // Append the card to the main-content
            mainContent.appendChild(card)
        })
    } else {
        const message = document.createElement('h2')
        message.textContent = "No Gifts Available 😞"
        mainContent.appendChild(message)
    }
}

// 404 Checking
const requestedURL = window.location.href.split('/').pop()
console.log(requestedURL)

if(requestedURL) {
    // requestedURL is not null indicate that it is not for the home page
    window.location.href = '../404.html'
} else {
    renderGifts()
}