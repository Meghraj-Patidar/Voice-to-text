click_to_convert.addEventListener('click', function () {
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition =  new SpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = true;

    let p = document.createElement('p');

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
        
        p.innerText = text;
        text.appendChild(p);

        if (e.results[0].isFinal) {
            p = document.createElement('p');
        }
        
        console.log(transcript)
        
        text.innerHTML = transcript;
    })

    if (speech == true) {
        recognition.start()
    }

    
})