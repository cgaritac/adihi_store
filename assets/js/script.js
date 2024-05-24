let navLinks = document.querySelectorAll('a.inner-link');

navLinks.forEach((item)=>{
    // console.log(item)
    item.addEventListener('click', function(){
        document.querySelector('nav ul li a.active').classList.remove('active')
        document.querySelector(`nav ul li a[href='${item.getAttribute('href')}']`).classList.add('active')
        // document.querySelector(`nav ul li a[href='#home']`).classList.add('active')
        document.querySelector('main > section.active').classList.remove('active')
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active');
        // console.log(`main > section${item.getAttribute('href')}`)
    })
})