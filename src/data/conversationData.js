const conversations = [
    {
        id: '1',
        name: 'Ahmet',
        messages: [
            { text: 'Tamam.', sender: 'Ahmet' },
            { text: 'Tamam, orada görüşürüz.', sender: 'user' },
            { text: 'Sanırım evet..', sender: 'Ahmet' },
            { text: 'Akşam geliyorsun değil mi ?', sender: 'user' },
            { text: 'İyi, teşekkürler.', sender: 'Ahmet' },
            { text: 'Merhaba, nasılsın?', sender: 'user' },
        ]
    },
    {
        id: '2',
        name: 'Ofis 🖥️',
        messages: [
            { text: 'Herkesin katılım göstermesi rica olunur arkadaşlar. Bundan sonraki toplantılarda da geçerli olmak üzere yoklama disiplinine geçmek zorundayız.', sender: 'Patron' },
            { text: 'Tamamdır.', sender: 'user' },
            { text: 'Ben katılamayacağım..', sender: 'Hakan' },
            { text: 'Diğer arkadaşlar ?', sender: 'user' },
            { text: 'Ben katılamayacağım..', sender: 'Gizem' },
            { text: 'Diğer arkadaşlar ?', sender: 'user' },
            { text: 'Ben katılamayacağım..', sender: 'Defne' },
            { text: 'Diğer arkadaşlar ?', sender: 'user' },
            { text: 'Ben katılamayacağım..', sender: 'Jane' },
            { text: 'Ben katılamayacağım..', sender: 'Aslı' },
            { text: 'Anlaşıldı.', sender: 'Enes' },
            { text: 'Bugün toplantımız 10.00 gibi olacak.', sender: 'user' },
        ]
    },
    {
        id: '3',
        name: 'Sıla',
        messages: [
            { text: 'Evet, nerede buluşalım?', sender: 'Sıla' },
            { text: 'Orada mısın ?', sender: 'user' },
            { text: 'Heey.', sender: 'user' },
            { text: 'Mesajlarım geliyor mu?', sender: 'user' },
            { text: 'Bugün buluşmak ister misin?', sender: 'user' },
        ]
    },
    // ...
];

export default conversations;
