const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())

    // Fetch Data 
    const response = await fetch('/gifts')
    const data = await response.json()

    // Create a variable called giftContent that points to the element with the ID gift-content
    const giftContent = document.querySelector('#gift-content')

    let gift = data.find(gift => gift.id === requestedID)
    if(gift) {
        document.querySelector('#image').src = gift.image
        document.querySelector('#name').textContent = gift.name
        document.querySelector('#submittedBy').textContent = "Submitted by: " + gift.submittedBy
        document.querySelector('#pricePoint').textContent = "Price: " + gift.pricePoint
        document.querySelector('#audience').textContent = "Great For: " + gift.audience
        document.querySelector('#description').textContent = gift.description
        document.title = `UnEarthed - ${gift.name}`
    } else {
        const message = document.createElement('h2')
        message.textContent = "No Gifts Available 😞"
        giftContent.appendChild(message)
    }
}

renderGift()