//THERE IS A PROBLEM WITH IT CONNECTING

/*document.getElementById('submitBtn').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const messsage = document.getElementById('message').message;

    if(name && email && message) {

        const phoneNumber = '2347083055842';
        const whatsappURL =`https://wa.me/${phoneNumber}?text=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
        
        window.open(whatsappURL, '_blank');
    } else{
        alert('Please fill out all fields');
    }
});*/

const botToken = '7694782621:AAGe4DofHd_UREvbEOn5Y-ABcUI9ozAqIng';
const chatId = '6842665979';

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        const botURL = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const data = {
            chat_id: chatId,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };
        fetch(botURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                iziToast.success({
                    title: 'Submitted!',
                    message: 'Submitted successfully',
                    position: 'bottomLeft',
                    timeout: 2000,
                });

                this.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error sending your message.');
            });
    } else {
        alert('Please fill out all fields.');
    }
});
