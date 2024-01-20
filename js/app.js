function form() {
    const form = document.querySelector('form')
    const thanks = document.querySelector('.thanks')

    form.addEventListener('submit', function(e) {
        localStorage.setItem('submitted', 'true')
    })

    window.onload = function() {
        if (localStorage.getItem('submitted') === 'true') {
            thanks.classList.add('active')
        }
    }
}

form()