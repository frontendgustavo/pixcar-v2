$(document).ready(function () {
    $('.phone-input').mask('(00) 00000-0000');
    $('.cpf-input').mask('000.000.000-00', {
        reverse: true
    });
    $('.money-input').mask("#.##0,00", {
        reverse: true
    });
});
