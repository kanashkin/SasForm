function form() {
    const form = document.querySelector('form')
    const thanks = document.querySelector('.thanks')
    const resetBtn = document.querySelector('.reset')

    form.addEventListener('submit', function(e) {
        localStorage.setItem('submitted', 'true')
    })

    window.onload = function() {
        if (localStorage.getItem('submitted') === 'true') {
            thanks.classList.add('active')
        }
    }

    resetBtn.addEventListener('click', function() {
        localStorage.clear()
        location.reload()
    })
}

form()