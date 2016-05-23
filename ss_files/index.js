$('#parse').click(function () {
    var x = $('#x').val(),
        rahasia = $('#phrase').val(),
        output = $('#output'),
        last = x.substring(x.lastIndexOf("/") + 1, x.length);

    output.val(rahasia.replace('{link}', last));
});



