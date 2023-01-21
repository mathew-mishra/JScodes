//need to ensure to add nonvalidate in the form section.

const form = document.querySelector('form')

form.addEventListener('submit', e=>{
    if(!form.checkValidity()){
        e.preventDefault()
    }
    form.classList.add('was-validated')
})
