const conversations = [
    {
        id: '1',
        name: 'Ahmet',
        messages: [
            { text: 'Merhaba, nasılsın?', sender: 'user' },
            { text: 'İyi, teşekkürler.', sender: 'Ahmet' }
        ]
    },
    {
        id: '2',
        name: 'Ofis Grubu 🖥️',
        messages: [
            { text: 'Bugün toplantımız 10.00 gibi olacak.', sender: 'user' },
            { text: 'Anlaşıldı.', sender: 'Enes' }
        ]
    },
    {
        id: '3',
        name: 'Sıla',
        messages: [
            { text: 'Bugün buluşmak ister misin?', sender: 'user' },
            { text: 'Evet, nerede buluşalım?', sender: 'Sıla' }
        ]
    },
    // ...
];

export default conversations;
