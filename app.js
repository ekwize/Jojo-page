const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('mouseover', () => {
        clearActiveClasses()
        slide.classList.add('active')
        slide.style.backgroundImage = slide.style.backgroundImage.replace(getSlideResById(slide.id, 'image'), getSlideResById(slide.id, 'gif'))
    })
    slide.addEventListener('mouseout', () => {
        slide.classList.remove('active')
        slide.style.backgroundImage = slide.style.backgroundImage.replace(getSlideResById(slide.id, 'gif'), getSlideResById(slide.id, 'image') )
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
        slide.style.backgroundImage = slide.style.backgroundImage.replace(getSlideResById(slide.id, 'gif'), getSlideResById(slide.id, 'image') )
    })
}

function getSlideResById(id, elementType) {
    let Gifs = {
        'jonathanSlide': 'gif/Jonathan.gif',
        'josephSlide': 'gif/Joseph.gif',
        'jotaroSlide': 'gif/StarPlatinum.gif',
        'josukeSlide': 'gif/CrazyDiamond.gif',
        'giornoSlide': 'gif/GER.gif'
    }

    let Images = {
        'jonathanSlide': 'img/Jonathan.jpeg',
        'josephSlide': 'img/Joseph.jpeg',
        'jotaroSlide': 'img/Jotaro.jpeg',
        'josukeSlide': 'img/Josuke.jpeg',
        'giornoSlide': 'img/Giorno.jpeg'
    }

    if (elementType === 'image'){
        return Images[id]
    } else if (elementType === 'gif') {
        return Gifs[id]
    }
}   

