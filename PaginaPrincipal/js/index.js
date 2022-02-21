$("#btn-search").click(function()
{
    alert("Buscando... " + $("#txt-search").val());
});


$("#btn-cargar").click(function()
{
    $.ajax(
        {
            url: "https://jsonplaceholder.typicode.com/photos",
            success: function(resultado)
            {
                var table = $("#tbody");
                for (foto of resultado) {
                     debugger;
                    var html =$("<tr><th scope='row'>" + foto.id + "</th><td>" + foto.title 
                    + "</td><td><img id='imagen' src='" + foto.url + "' alt='" + foto.url + "' style='width: 100px;' class='redondo'></td></tr>");
                    
                    var img = html.find("#imagen");
                    
                    img.click(function () {
                       alert("hola:" + foto.id); 
                    });

                    table.append(html);
                }
            }
        }
    );
});



