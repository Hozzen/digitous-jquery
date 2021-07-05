$('.btn').click(function(){
    let value = $("input").val()
    if (value.length > 5) {
        $("input").removeClass("is-valid")
        $("input").addClass("is-invalid")
    } else {
        $("input").removeClass("is-invalid")
        $("input").addClass("is-valid")
    }
});