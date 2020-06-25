/*let data = {
    photo: '/images/pic-creation.jpg', 
    title: 'My title',
    description: 'Why is this a very good image'
}
*/
//$('#photo').attr('src',data.photo)

let imagesData = [{
        photo: '/pic-creation.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-beachCity.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-beachPath.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-beachWaves.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-butterflies.jpeg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-fantasyWinter.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-flowersPath.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-islands.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-lake.jpeg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-roadByLake.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    }
]

let currentPhoto = 0;
$('#photo').attr('src', imagesData[currentPhoto].photo);

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    // ...
}

loadPhoto(currentPhoto);

$('#right-arrow').click(() => {

    if (currentPhoto < 9) {
        currentPhoto++;
    } else {
        currentPhoto = 0;
        //currentPhoto++;
    }
    loadPhoto(currentPhoto);
})

$('#left-arrow').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--
    } else {
        currentPhoto = 9;
    }
    loadPhoto(currentPhoto);
})





imagesData.forEach((item, index) => {
    $('#thumbnails-container').append(`<div class="thumbnail" data-index="${index}" style="background: url('${item.photo}') no-repeat center center; background-size: cover;"> </div>`);

});

$('.thumbnail').click((event) => {
    clicked = $(event.target).attr('data-index');
    loadPhoto(clicked);
    $(event.target).addClass('clicked');
    $(event.target).siblings().removeClass('clicked');
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    //let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    $('#clicked').text(imagesData[indexClicked]);
});