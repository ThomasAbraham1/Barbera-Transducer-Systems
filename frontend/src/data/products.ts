export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    price: string;
    features: string[];
    imageUrl: string;
}

export const products: Product[] = [
    {
        id: 'violin-pickup',
        name: 'Violin Pickup System',
        category: 'Violin',
        description: 'The Barbera Violin Pickup system is a high performance, multi-transducer bridge pickup for violin. It provides a focused, clear and natural amplified sound.',
        price: '$300.00',
        features: [
            'Multi-transducer bridge',
            'Focused, clear natural sound',
            'High feedback resistance',
            'Passive operation (no preamp needed)',
        ],
        imageUrl: 'https://i.ibb.co/5x5h80MD/image.png?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'acoustic-guitar-pickup',
        name: 'Soloist Acoustic Guitar Pickup',
        category: 'Guitar',
        description: 'The Soloist is a high performance saddle pickup for acoustic guitar. It provides a very natural, open and acoustic sound with great presence and detail.',
        price: '$250.00',
        features: [
            'Saddle pickup design',
            'Natural, open acoustic sound',
            'Great presence and detail',
            'High feedback resistance',
        ],
        imageUrl: 'https://i.ibb.co/PGQxc8cY/image.png?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'upright-bass-pickup',
        name: 'Upright Bass Pickup System',
        category: 'Bass',
        description: 'The Barbera Upright Bass Pickup is a multi-transducer bridge system that provides a big, warm, and articulate pizzicato sound and a natural arco sound.',
        price: '$450.00',
        features: [
            'Multi-transducer bridge system',
            'Big, warm pizzicato sound',
            'Natural arco sound',
            'Even string balance',
        ],
        imageUrl: 'https://i.ibb.co/5hd2MXNY/image.png?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'cello-pickup',
        name: 'Cello Pickup System',
        category: 'Cello',
        description: 'The Barbera Cello Pickup is a multi-transducer bridge that provides a rich, complex and natural amplified tone for cello.',
        price: '$350.00',
        features: [
            'Multi-transducer bridge',
            'Rich, complex natural tone',
            'Excellent dynamic range',
            'Passive operation',
        ],
        imageUrl: 'https://i.ibb.co/qM8z51MW/image.png?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '5-string-violin',
        name: '5-String Violin Bridge',
        category: 'Violin',
        description: 'Designed specifically for 5-string violins, providing balanced output across all strings.',
        price: '$350.00',
        features: [
            'Balanced output across all strings',
            'Natural tone',
            'Professional grade'
        ],
        imageUrl: 'https://i.ibb.co/5x5h80MD/image.png?auto=format&fit=crop&w=800&q=80',
    }
];
