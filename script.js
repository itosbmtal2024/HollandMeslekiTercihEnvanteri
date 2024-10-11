function sendTestEmail() {
    emailjs.send('your_service_id', 'your_template_id', {
        to_email: 'test@example.com', // test e-posta adresini buraya gir
        message: 'Test mesajı'
    }, 'your_public_key')
    .then((response) => {
        console.log('Başarıyla gönderildi:', response);
    }, (error) => {
        console.error('Gönderim hatası:', error);
    });
}
