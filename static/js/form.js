
const formElem = document.querySelector('#formElem');

if (formElem) {

    const formData1 = new FormData(formElem)
    formData1.get('name' || 'number' || 'email');

    formElem.onsubmit = async (e) => {
        e.preventDefault()
        let response = await fetch('' , {
            method: 'POST',
            body: new FormData(formElem)
        });
        let result = await response.json()

        console.log(result)
    }
}
