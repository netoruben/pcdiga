const Products = [
    {
        name: "iPhone 14 Pro",
        image: "/images/products/iphone-14-pro.png",
        categorie: "iPhone",
        colors: [
            {
                hex: "#5E746D"
            },
            {
                hex: "#EDEDED"
            },
            {
                hex: "#EFE2E0"
            },
            {
                hex: "#6B6A6E"
            },
            {
                hex: "#C8D6DF"
            }
        ]
    },
    {
        name: "iPad Mini",
        image: "/images/products/ipad-mini.png",
        categorie: "iPad",
        colors: [
            {
                hex: "#5E746D"
            },
            {
                hex: "#EDEDED"
            },
            {
                hex: "#EFE2E0"
            },
            {
                hex: "#6B6A6E"
            },
            {
                hex: "#C8D6DF"
            }
        ]
    },
    {
        name: "AirPods Max",
        image: "/images/products/airpods-max.png",
        categorie: "AirPods",
        colors: [
            {
                hex: "#5E746D"
            },
            {
                hex: "#EDEDED"
            },
            {
                hex: "#EFE2E0"
            },
            {
                hex: "#6B6A6E"
            },
            {
                hex: "#C8D6DF"
            }
        ]
    },
    {
        name: "iPhone 13",
        image: "/images/products/iphone-13.png",
        categorie: "iPhone",
        colors: [
            {
                hex: "#5E746D"
            },
            {
                hex: "#EDEDED"
            },
            {
                hex: "#EFE2E0"
            },
            {
                hex: "#6B6A6E"
            },
            {
                hex: "#C8D6DF"
            }
        ]
    },
    {
        name: "Apple Watch Ultra",
        image: "/images/products/apple-watch-ultra.png",
        categorie: "Apple Watch",
        colors: [
            {
                hex: "#EDEDED"
            },
            {
                hex: "#EFE2E0"
            },
            {
                hex: "#6B6A6E"
            }
        ]
    },
    {
        name: "AirPods Pro",
        image: "/images/products/airpods-pro.png",
        categorie: "AirPods"
    },
    {
        name: "iPad Pro",
        image: "/images/products/ipad-pro.png",
        categorie: "iPad",
        colors: [
            {
                hex: "#5E746D"
            },
            {
                hex: "#EDEDED"
            },
            {
                hex: "#EFE2E0"
            },
            {
                hex: "#6B6A6E"
            },
            {
                hex: "#C8D6DF"
            }
        ]
    },
    {
        name: "Macbook Air",
        image: "/images/products/macbook-air.png",
        categorie: "Mac",
        colors: [
            {
                hex: "#EDEDED"
            },
            {
                hex: "#6B6A6E"
            }
        ]
    },
    {
        name: "Smartphone Apple Iphone 11 6.1\" 64GB Preto",
        image: "/images/products/iphone-11.png",
        type: 'promocao',
        desc: 'Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Reteri-os da caixa e estão prontos a usar.',
        ref: 'MV7N2TY/A',
        price: 179.00,
        discount: 10.00,
        stock: {
            predict: '17 JAN'
        }
    },
    {
        name: "Apple MacBook Pro 14.2\" | M1 Pro CPU 10-core, GPU 16-core Shorten Title",
        image: "/images/products/macbook-pro.png",
        type: 'promocao',
        desc: 'Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Reteri-os da caixa e estão prontos a usar.',
        ref: 'MV7N2TY/A',
        price: 469.00,
        discount: 150.00,
        stock: {
            predict: '17 JAN'
        }
    },
    {
        name: "Apple Watch Ultra GPS+Cellullar 49mm Titânio c/ Bracelete Shorten Title",
        image: "/images/products/apple-watch-ultra-titanio.png",
        type: 'promocao',
        desc: 'Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Reteri-os da caixa e estão prontos a usar.',
        ref: 'MV7N2TY/A',
        price: 179.00,
        discount: 20.00,
        stock: {
            predict: '17 JAN'
        }
    },
    {
        name: "Apple iPad Air (5º Geração) M1 10.9\" Wi-Fi 256GB Cinzento Sideral",
        image: "/images/products/ipad-air.png",
        type: 'promocao',
        desc: 'Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Reteri-os da caixa e estão prontos a usar.',
        ref: 'MV7N2TY/A',
        price: 179.00,
        discount: 40.00,
        stock: {
            predict: '17 JAN'
        }
    },
    {
        name: "Adaptador de corrente Apple USB-C de 20W",
        image: "/images/products/adaptador.png",
        type: 'promocao',
        desc: 'Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Reteri-os da caixa e estão prontos a usar.',
        ref: 'MV7N2TY/A',
        price: 179.00,
        discount: 5.00,
        stock: {
            predict: '17 JAN'
        }
    },
    {
        name: "Teclado Apple Magic Keyboard Touch ID para Mac com Processador",
        image: "/images/products/teclado.png",
        type: 'promocao',
        desc: 'Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Reteri-os da caixa e estão prontos a usar.',
        ref: 'MV7N2TY/A',
        price: 179.00,
        discount: 10.00,
        stock: {
            predict: '17 JAN'
        }
    },
    {
        name: "Apple iPad Pro (M2) 12.9\" Wi-Fi + Cellular 256GB Prateado",
        image: "/images/products/ipad-pro-m2.png",
        type: 'destaque',
        desc: 'Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Reteri-os da caixa e estão prontos a usar.',
        ref: 'MV7N2TY/A',
        price: 169.00,
        stock: {
            predict: '17 JAN'
        }
    },
    {
        name: "Capa Apple Smart Folio iPad Pro 11\" (1ª, 2ª, 3ª e 4ª Geração) Preta",
        image: "/images/products/ipad-pro-11-capa.png",
        type: 'destaque',
        desc: 'Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Reteri-os da caixa e estão prontos a usar.',
        ref: 'MV7N2TY/A',
        price: 169.00,
        stock: {
            predict: '17 JAN'
        }
    },
    {
        name: "Capa Teclado Apple Magic Keyboard iPad Pro 12.9\" (3ª, 4ª, 5ª e 6ª Geração) ",
        image: "/images/products/ipad-pro-12.5-capa.png",
        type: 'destaque',
        desc: 'Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Reteri-os da caixa e estão prontos a usar.',
        ref: 'MV7N2TY/A',
        price: 169.00,
        stock: {
            predict: '17 JAN'
        }
    },
    {
        name: "Apple AirPods Pro (2ª Geração) Wireless Brancos com Caixa Shorten Title",
        image: "/images/products/airpods-pro-2.png",
        type: 'destaque',
        desc: 'Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Reteri-os da caixa e estão prontos a usar.',
        ref: 'MV7N2TY/A',
        price: 169.00,
        stock: {
            predict: '17 JAN'
        }
    },
    {
        name: "Apple iPad Pro (M2) 12.9\" Wi-Fi + Cellular 256GB Prateado",
        image: "/images/products/ipad-pro-m2.png",
        type: 'destaque',
        desc: 'Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Reteri-os da caixa e estão prontos a usar.',
        ref: 'MV7N2TY/A',
        price: 169.00,
        stock: {
            predict: '17 JAN'
        }
    },
]

export default Products