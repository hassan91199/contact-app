document.getElementById('filter_company_id').addEventListener('change', function () {
    let company_id = this.value || this.options[this.selectedIndex].value;
    window.location.href = window.location.href.split('?')[0] + '?company_id=' + company_id;
})

document.querySelectorAll('.btn-delete').forEach((button) => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        alert('delete');
        if (confirm("Are you sure?")) {
            let action = this.getAttribute('href');
            let form = document.getElementById('form-delete');
            form.setAttribute('action', action);
            form.submit();
        }
    });
});
