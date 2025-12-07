function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'fotobebe-masc.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotojovem-masc.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotoadulto-masc.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidoso-masc.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
             if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'fotobebe-fem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotojovem-fem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotoadulta-fem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidosa-fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

    
}


