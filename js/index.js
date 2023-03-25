var elemento = $(".img-fluid");

console.log(elemento)

for (var i = 0; i < elemento.length; i++) {
    elemento[i].addEventListener("click", function (event) {
        
        $("#img-galery").attr("src", event.target.src);
        console.log(event.target.src);

        $("#abrirmodal").click()

        var scale = 1
        $("#img-zoom").click(() => {  
            $("#img-galery").css("transform", `scale(${scale+=0.5})`);
        });
        $("#img-zoom-").click(() => {
          $("#img-galery").css("transform", `scale(${(scale == 1 || 1.5? scale = 1 : scale -=0.5 )})`);
        });

        var conteudo = $(".modal-body");
        var posicaoInicialX = 0;
        var posicaoAtualX = 0;
        var posicaoInicialY = 0;
        var posicaoAtualY = 0;
        var mousePressionado = false;

        conteudo.on("mousedown", function (event) {
            event.preventDefault();
          mousePressionado = true;
          posicaoInicialX = event.pageX;
          posicaoInicialY = event.pageY;
        });

        conteudo.on("mouseup", function (event) {
          mousePressionado = false;
        });

        $(document).on("mousemove", function (event) {
          if (mousePressionado) {
            posicaoAtualX = event.pageX;
            posicaoAtualY = event.pageY;
            conteudo.scrollLeft(
              conteudo.scrollLeft() + (posicaoInicialX - posicaoAtualX)
            );
            conteudo.scrollTop(
              conteudo.scrollTop() + (posicaoInicialY - posicaoAtualY)
            );
            posicaoInicialX = event.pageX;
            posicaoInicialY = event.pageY;
          }
        });


        
    })
}