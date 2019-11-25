
    function setAgua(){
        var agua = document.getElementById('agua');
        agua.innerHTML ='<img width="80" height="95" src="imagens/aguateste.png" align="center">'
        
    }
    function setAgua2(){
        var agua = document.getElementById('agua');
        agua.innerHTML ='<img width="80" height="95" src="imagens/agua.png" align="center">'
        
    }
    function setRefri(){
        var agua = document.getElementById('refri');
        agua.innerHTML ='<img width="80" height="95" src="imagens/refri.png" align="center">'
        
    }
    function setRefri2(){
        var agua = document.getElementById('refri');
        agua.innerHTML ='<img width="80" height="95" src="imagens/refri2.png" align="center">'
        
    }function setSkol(){
        var agua = document.getElementById('skol');
        agua.innerHTML ='<img width="80" height="95" src="imagens/skol.png" align="center">'
        
    }
    function setSkol2(){
        var agua = document.getElementById('skol');
        agua.innerHTML ='<img width="80" height="95" src="imagens/skol2.png" align="center">'
        
    }
    function comprarProduto(nome,valor){
        document.getElementById("prdt").value = nome;
        document.getElementById("val").value = valor;
    }
    function confirmarCompra(){
        var val = document.getElementById('val').value;
        var qtd = document.getElementById('quant').value;
        var total = document.getElementById('valor').innerText;
        var resultado = parseInt(total) + (val * qtd);
        var campo = document.getElementById('valor');
        campo.innerText = ' '+resultado;

    }