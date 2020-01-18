function verifica() {
    let anoNasc = Number(document.getElementById('txtAno').value)
    let data = new Date()
    let calcAno = data.getFullYear()
    let res = document.getElementById('resposta')
    let imagem = document.getElementById('img')
    let sexo = document.getElementsByName('sex')
    let idade = calcAno - anoNasc
    let HM = ''            


        //CHECAGEM DE GENERO
    if (anoNasc.value == 0 || anoNasc > calcAno) {
        alert(`[ERRO] os dados estao incorretos`)
    } if(sexo[0].checked){
        HM='homem'
    }else if(sexo[1].checked){
        HM='mulher'


        //PARTE HOMEM VERIFICAÇÃO
    }if(idade <3 && HM =='homem'){
        imagem.src="../VerificaIdade/imagemsVerifica/bebeMasc.jpeg"
        res.innerHTML=`Detectamos um bebe ${HM} com ${idade} anos de idade`      
    }if(idade >=3 && idade <=10 && HM =='homem'){
        imagem.src="../VerificaIdade/imagemsVerifica/criancaMasc.jpeg"
        res.innerHTML=`Detectamos ${HM} com ${idade} anos de idade`
    }if(idade >=11 && idade <=17 && HM =='homem'){
        imagem.src="../VerificaIdade/imagemsVerifica/jovemMasc.jpeg"
        res.innerHTML=`Detectamos ${HM} com ${idade} anos de idade`
    }if(idade >=18 && idade <=39 && HM =='homem'){
        imagem.src=' ../VerificaIdade/imagemsVerifica/alan.png'
        res.innerHTML=`Detectamos ${HM} com ${idade} anos de idade`
       } if(idade >=40 && idade <=59 && HM =='homem'){
        imagem.src="../VerificaIdade/imagemsVerifica/senhorMasc.jpeg"
        res.innerHTML=`Detectamos ${HM} com ${idade} anos de idade`
       } if(idade >=60 && HM =='homem'){
        imagem.src="../VerificaIdade/imagemsVerifica/velhoMasc.jpeg"
        res.innerHTML=`Detectamos ${HM} com ${idade} anos de idade`



     //PARTE MULHER VERIFICAÇÃO
    }else if(idade <3 && HM =='mulher'){
        imagem.src="../VerificaIdade/imagemsVerifica/bebeFem.jpeg"
        res.innerHTML=`Detectamos uma bebe ${HM} com ${idade} anos de idade`      
    }else if(idade >=3 && idade <=10 && HM =='mulher'){
        imagem.src="../VerificaIdade/imagemsVerifica/criancaFem.jpeg"
        res.innerHTML=`Detectamos ${HM} com ${idade} anos de idade`
    }else if(idade >=11 && idade <=17 && HM =='mulher'){
        imagem.src="../VerificaIdade/imagemsVerifica/jovemFem.jpeg"
        res.innerHTML=`Detectamos ${HM} com ${idade} anos de idade`
    }else if(idade >=18 && idade <=39 && HM =='mulher'){
        imagem.src="../VerificaIdade/imagemsVerifica/adultoMulher.jpeg"
        res.innerHTML=`Detectamos ${HM} com ${idade} anos de idade`
       } else if(idade >=40 && idade <=59 && HM =='mulher'){
        imagem.src="../VerificaIdade/imagemsVerifica/senhoraFem.jpeg"
        res.innerHTML=`Detectamos ${HM} com ${idade} anos de idade`
       } else if(idade >=60 && HM =='mulher'){
        imagem.src="../VerificaIdade/imagemsVerifica/velhaFem.jpeg"
        res.innerHTML=`Detectamos ${HM} com ${idade} anos de idade`
}
}
