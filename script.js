function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#foto')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 10
    msg.innerHTML = `Agora são ${hora} horas!<br>`
    if (hora >= 0 && hora < 12){
        // BOM DIA!!!
        img.src = 'manha.png'
        msg.innerHTML += '<strong>BOM DIA!!!</strong>' 
        document.body.style.background = '#b6c6dd'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!!!
        img.src = 'tarde.png'
        msg.innerHTML += '<strong>BOA TARDE!!!</strong>'
        document.body.style.background = '#fcc721'
    } else {
        // BOA NOITE!!!
        img.src = 'noite.png'
        msg.innerHTML += '<strong>BOA NOITE!!!</strong>'
        document.body.style.background = '#a184bc'
    }
}