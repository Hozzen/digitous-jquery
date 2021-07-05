$(".btn").click(function() {
    let value = $("input").val()
    console.log(value)

    $.ajax({
        url: "https://restcountries.eu/rest/v2/name/"+ value,
        success: function(data, status, response) {
            $("#country").html(data[0].name)
            $("#capital").html(data[0].capital)
        }
    })
});