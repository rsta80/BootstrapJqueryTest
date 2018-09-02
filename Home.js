$(document).ready(function () {

    $('#btnSubmit').click(function (e) {

        varName = $.trim($("#txtName").val())
        varLastName = $.trim($("#txtLastName").val())
        varPhone = $.trim($("#txtPhone").val())
        varMail = $.trim($("#txtMail").val())

        var msg = 'Se encontrarón las siguientes restricciones:\n \n'
        $('#valMsg').text('El formulario se ha rellanado correctamente.');
        if ($('#valMsg').hasClass('alert-danger'))
            $('#valMsg').toggleClass('alert-success alert-danger');

        var showModal = false

        if (varName.length > 10) {
            showModal = true
            msg += '* El campo nombre no puede superar los 10 caracteres. \n'
        } if (varLastName.length > 20) {
            showModal = true
            msg += '* El campo apellidos no puede superar los 20 caracteres.\n'
        } if (varPhone.length > 9) {
            showModal = true
            msg += '* El campo teléfono no puede superar los 9 dígitos.\n'
        } if (!varMail.includes('@')) {
            showModal = true
            msg += '* El campo de correo electrónico tiene que contener el caracter @.\n'
        } if (varName == '' || varLastName == '' || varMail == '') {
            showModal = true
            msg += '* Los campos nombre, apellidos y correo electrónico son obligatorios.\n'
        }

        if (showModal == true) {
            $('#mTittle').text('Existen restricciones que se debe cumplir');
            $('#mMessage').multiline(msg + '\n Corrija los campos indicados según las restricciones mostradas.');
            $('#valMsg').text('El formulario no cumple algunas restricciones.');
            $('#valMsg').toggleClass('alert-success alert-danger');
            $('#myModal').modal('show');
        }

        $('#valMsg').show();

    });

    $.fn.multiline = function (text) {
        this.text(text);
        this.html(this.html().replace(/\n/g, '<br/>'));
        return this;
    }

});