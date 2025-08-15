import { TipoProduto } from "./types";

const fotoPadrao = "https://via.placeholder.com/150";

export const listaProdutos: TipoProduto[] = [
    {
        id: 1,
        nome: "Smartphone Galaxy S21",
        marca: "Samsung",
        desc: "Smartphone com tela de 6.2 polegadas, 128GB de armazenamento.",
        preco: 3999.99,
        foto: fotoPadrao
    },
    {
        id: 2,
        nome: "Notebook Dell Inspiron",
        marca: "Dell",
        desc: "Notebook com processador Intel Core i7 e 16GB de RAM.",
        preco: 4999.99,
        foto: fotoPadrao
    },
    {
        id: 3,
        nome: "Smart TV 55\" OLED",
        marca: "LG",
        desc: "Smart TV 4K OLED com inteligência artificial integrada.",
        preco: 6999.99,
        foto: fotoPadrao
    },
    {
        id: 4,
        nome: "Console PlayStation 5",
        marca: "Sony",
        desc: "Console de última geração com suporte a jogos em 4K.",
        preco: 4999.99,
        foto: fotoPadrao
    },
    {
        id: 5,
        nome: "Fone de Ouvido Bluetooth",
        marca: "Sony",
        desc: "Fone de ouvido com cancelamento de ruído e longa duração de bateria.",
        preco: 1299.99,
        foto: fotoPadrao
    },
    {
        id: 6,
        nome: "Tablet iPad Air",
        marca: "Apple",
        desc: "Tablet com tela de 10.9 polegadas e processador A14 Bionic.",
        preco: 4599.99,
        foto: fotoPadrao
    },
    {
        id: 7,
        nome: "Câmera DSLR EOS Rebel T7",
        marca: "Canon",
        desc: "Câmera DSLR com sensor de 24.1MP e gravação de vídeo em Full HD.",
        preco: 2599.99,
        foto: fotoPadrao
    },
    {
        id: 8,
        nome: "Smartwatch Galaxy Watch 4",
        marca: "Samsung",
        desc: "Relógio inteligente com monitoramento de saúde e fitness.",
        preco: 1599.99,
        foto: fotoPadrao
    },
    {
        id: 9,
        nome: "Monitor UltraWide 34\"",
        marca: "LG",
        desc: "Monitor UltraWide com resolução QHD e taxa de atualização de 75Hz.",
        preco: 3499.99,
        foto: fotoPadrao
    },
    {
        id: 10,
        nome: "Caixa de Som Bluetooth",
        marca: "JBL",
        desc: "Caixa de som portátil com som potente e à prova d'água.",
        preco: 799.99,
        foto: fotoPadrao
    },
    {
        id: 11,
        nome: "Câmera de Segurança Wi-Fi",
        marca: "Xiaomi",
        desc: "Câmera de segurança com visão noturna e controle via app.",
        preco: 299.99,
        foto: fotoPadrao
    },
    {
        id: 12,
        nome: "Drone DJI Mavic Air 2",
        marca: "DJI",
        desc: "Drone com câmera 4K e alcance de até 10km.",
        preco: 7999.99,
        foto: fotoPadrao
    },
    {
        id: 13,
        nome: "Leitor de eBook Kindle",
        marca: "Amazon",
        desc: "Leitor de eBooks com tela de 6 polegadas e iluminação ajustável.",
        preco: 499.99,
        foto: fotoPadrao
    },
    {
        id: 14,
        nome: "Impressora Multifuncional EcoTank",
        marca: "Epson",
        desc: "Impressora com tanque de tinta e conexão Wi-Fi.",
        preco: 1499.99,
        foto: fotoPadrao
    },
    {
        id: 15,
        nome: "Mouse Gamer",
        marca: "Razer",
        desc: "Mouse com sensor óptico de alta precisão e iluminação RGB.",
        preco: 399.99,
        foto: fotoPadrao
    },
    {
        id: 16,
        nome: "Teclado Mecânico",
        marca: "Logitech",
        desc: "Teclado mecânico com teclas retroiluminadas e switches táteis.",
        preco: 799.99,
        foto: fotoPadrao
    },
    {
        id: 17,
        nome: "Roteador Wi-Fi Mesh",
        marca: "TP-Link",
        desc: "Sistema de roteamento Mesh para cobertura Wi-Fi em toda a casa.",
        preco: 1099.99,
        foto: fotoPadrao
    },
    {
        id: 18,
        nome: "Headset Gamer",
        marca: "HyperX",
        desc: "Headset com som surround 7.1 e microfone destacável.",
        preco: 599.99,
        foto: fotoPadrao
    },
    {
        id: 19,
        nome: "Projetor Portátil",
        marca: "Anker",
        desc: "Projetor com resolução HD e bateria interna para portabilidade.",
        preco: 2899.99,
        foto: fotoPadrao
    },
    {
        id: 20,
        nome: "Carregador Rápido USB-C",
        marca: "Anker",
        desc: "Carregador rápido com tecnologia Power Delivery e 20W de potência.",
        preco: 149.99,
        foto: fotoPadrao
    }
];

//Caso a lista não exista no localStorage, colocar
if (!localStorage.getItem('lista')) {
    localStorage.setItem("lista", JSON.stringify(listaProdutos));
} 