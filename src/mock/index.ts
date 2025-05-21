import type { Product } from "../types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Casual Comfortable Jeans",
    oldPrice: "109,90",
    price: "71,90",
    discount: "34",
    maxSplit: 3,
    inventory: [
      { variantId: 1, sizeId: 1, quantity: 3 }, // Black - P
      { variantId: 1, sizeId: 2, quantity: 2 }, // Black - M
      { variantId: 1, sizeId: 3, quantity: 3 }, // Black - G
      { variantId: 1, sizeId: 4, quantity: 5 }, // Black - GG
      { variantId: 2, sizeId: 1, quantity: 2 }, // Blue - P
      { variantId: 2, sizeId: 2, quantity: 10 }, // Blue - M
      { variantId: 3, sizeId: 3, quantity: 8 }, // White - G
      { variantId: 3, sizeId: 4, quantity: 1 }, // White - GG
    ],
    sizes: [
      {
        id: 1,
        number: 36,
        letter: "P",
      },
      {
        id: 2,
        number: 38,
        letter: "M",
      },
      {
        id: 3,
        number: 40,
        letter: "G",
      },
      {
        id: 4,
        number: 42,
        letter: "GG",
      },
    ],
    variants: [
      {
        id: 1,
        value: "Black",
        url: "/images/model-black.avif",
      },
      {
        id: 2,
        value: "Blue",
        url: "/images/model-blue.avif",
      },
      {
        id: 3,
        value: "White",
        url: "/images/model-white.avif",
      },
    ],
    images: {
      black: {
        0: {
          id: 1,
          url: "/images/model-black.avif",
        },
        1: {
          id: 2,
          url: "/images/model-black-2.avif",
        },
        2: {
          id: 3,
          url: "/images/model-black-3.avif",
        },
      },
      blue: {
        0: {
          id: 1,
          url: "/images/model-blue.avif",
        },
        1: {
          id: 2,
          url: "/images/model-blue-2.avif",
        },
        2: {
          id: 3,
          url: "/images/model-blue-3.avif",
        },
      },
      white: {
        0: {
          id: 1,
          url: "/images/model-white.avif",
        },
        1: {
          id: 2,
          url: "/images/model-white-2.avif",
        },
        2: {
          id: 3,
          url: "/images/model-white-3.avif",
        },
      },
    },
    description: `
        Olá, Sejam bem vindos a nossa loja, somos fabricantes de Roupas Femininas e Masculinas, estamos no mercado da moda há 10 anos, com o intuito de superar as expectativas dos nossos clientes.

        Trazemos o que há de mais atual e moderno no mundo da moda, priorizando sempre a qualidade e o conforto. Procuramos não apenas atender às suas necessidades, mas superar expectativas.

        As Calças Masculinas SKINNY Com Lycra é especialmente desenvolvida para homens modernos. Com uma modelagem diferenciada que se ajusta ao corpo de maneira confortável e ousada.

        Fabricadas com tecido resistente e ao mesmo tempo maleável, proporcionando um ajuste ideal a qualquer biótipo, além de ter um caimento super clean e arrojado, nossas calças combinam perfeitamente com diferentes looks e tons, harmonizando o visual de uma forma única. Sempre com uma lavagem moderna, cheia de efeitos estratégicos para dar mais autenticidade ao estilo de nossos clientes.

        - Pronta Entrega
        - Enviamos para todo Brasil
        - Direto de Fábrica
        - Nota fiscal
        - Fotos Reais dos nossos produtos.
        - Modelagem e Tecido de Qualidade.
        - Linha Premium.

        MEDIDAS:
        MEDIDAS DA CINTURA/CÓS DA CALÇA: medir só a frente da cintura da calça e não do corpo.
        Tamanho 36 - tem 36cm a 37cm
        Tamanho 38 - tem 38cm a 39cm
        Tamanho 40 - tem 40cm a 41cm
        Tamanho 42 - tem 42cm a 43cm
        Tamanho 44 - tem 44cm a 45cm
        Tamanho 46 - tem 46cm a 47cm
        Tamanho 48 - tem 48cm a 49cm
        Tamanho 50 - tem 50cm a 51cm
        Tamanho 52 - tem 52cm a 53cm

        MEDIDAS DE COMPRIMENTO DA CALÇA: medir toda a lateral de fora da calça, da cintura até a barra.
        Tamanho 36 - tem 100cm a 103cm
        Tamanho 38 - tem 100cm a 103cm
        Tamanho 40 - tem 105cm a 108cm
        Tamanho 42 - tem 105cm a 108cm
        Tamanho 44 - tem 105cm a 108cm
        Tamanho 46 - tem 105cm a 108cm
        Tamanho 48 - tem 105cm a 108cm
        Tamanho 50 - tem 105cm a 108cm
        Tamanho 52 - tem 105cm a 108cm

        DÚVIDAS FREQUENTES:

        1 – É recomendado pegar um tamanho maior ou menor?
        Resposta: Não. Recomendamos comprar no tamanho utilizado normalmente mesmo. Lembrando que nossas calças são modelos SKINNY com lycra/elastano e se ajusta ao corpo. Verifique também a tabela de medidas disponível nesse anúncio para auxiliar na escolha do tamanho correto.

        2 – Tem os produtos a pronta entrega? Em quanto tempo o produto será enviado?
        Resposta: Sim, temos todas as peças a pronta entrega para envio imediato. Após efetuar a compra, seu pedido será postado em até 24 horas uteis.

        3 – O tecido é resistente?
        Resposta: Sim, nossas peças são fabricadas com tecidos resistentes que possuem lycra/elastano na composição para dar elasticidade e deixar a peça com excelente caimento e super confortável.

        Garantia do vendedor: 15 dias
    `,
    rate: 4.6,
    reviews: [
      {
        id: 1,
        name: "João",
        review: "Calça muito confortável e veste muito bem!",
        rate: 5,
      },
      {
        id: 2,
        name: "Ana",
        review:
          "Material excelente, mas achei que a modelagem poderia ser um pouco mais ajustada.",
        rate: 4,
      },
      {
        id: 3,
        name: "Carlos",
        review: "Entrega super rápida! Produto igualzinho às fotos.",
        rate: 5,
      },
      {
        id: 3,
        name: "Mariana",
        review:
          "Gostei do tecido e do caimento. Só acho que o preço poderia ser mais em conta.",
        rate: 4,
      },
      {
        id: 4,
        name: "Eduardo",
        review: "Ficou perfeita no corpo! Vou comprar outra cor.",
        rate: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Casual Comfortable Jeans - 2",
    oldPrice: "59,97",
    price: "52,90",
    discount: "11",
    maxSplit: 12,
    inventory: [
      { variantId: 1, sizeId: 2, quantity: 3 }, // Black - M
      { variantId: 1, sizeId: 3, quantity: 3 }, // Black - G
      { variantId: 2, sizeId: 1, quantity: 7 }, // Blue - P
      { variantId: 2, sizeId: 2, quantity: 5 }, // Blue - M
      { variantId: 3, sizeId: 1, quantity: 20 }, // White - P
      { variantId: 3, sizeId: 4, quantity: 1 }, // White - GG
    ],
    sizes: [
      {
        id: 1,
        number: 34,
        letter: "P",
      },
      {
        id: 2,
        number: 36,
        letter: "M",
      },
      {
        id: 3,
        number: 38,
        letter: "G",
      },
      {
        id: 4,
        number: 40,
        letter: "GG",
      },
    ],
    variants: [
      {
        id: 1,
        value: "Black",
        url: "/images/model-black.avif",
      },
      {
        id: 2,
        value: "Blue",
        url: "/images/model-blue.avif",
      },
      {
        id: 3,
        value: "White",
        url: "/images/model-white.avif",
      },
    ],
    images: {
      black: {
        0: {
          id: 1,
          url: "/images/model-black.avif",
        },
        1: {
          id: 2,
          url: "/images/model-black-2.avif",
        },
        2: {
          id: 3,
          url: "/images/model-black-3.avif",
        },
      },
      blue: {
        0: {
          id: 1,
          url: "/images/model-blue.avif",
        },
        1: {
          id: 2,
          url: "/images/model-blue-2.avif",
        },
        2: {
          id: 3,
          url: "/images/model-blue-3.avif",
        },
      },
      white: {
        0: {
          id: 1,
          url: "/images/model-white.avif",
        },
        1: {
          id: 2,
          url: "/images/model-white-2.avif",
        },
        2: {
          id: 3,
          url: "/images/model-white-3.avif",
        },
      },
    },
    description: `
        Olá, Sejam bem vindos a nossa loja, somos fabricantes de Roupas Femininas e Masculinas, estamos no mercado da moda há 10 anos, com o intuito de superar as expectativas dos nossos clientes.

        Trazemos o que há de mais atual e moderno no mundo da moda, priorizando sempre a qualidade e o conforto. Procuramos não apenas atender às suas necessidades, mas superar expectativas.

        As Calças Masculinas SKINNY Com Lycra é especialmente desenvolvida para homens modernos. Com uma modelagem diferenciada que se ajusta ao corpo de maneira confortável e ousada.

        Fabricadas com tecido resistente e ao mesmo tempo maleável, proporcionando um ajuste ideal a qualquer biótipo, além de ter um caimento super clean e arrojado, nossas calças combinam perfeitamente com diferentes looks e tons, harmonizando o visual de uma forma única. Sempre com uma lavagem moderna, cheia de efeitos estratégicos para dar mais autenticidade ao estilo de nossos clientes.

        - Pronta Entrega
        - Enviamos para todo Brasil
        - Direto de Fábrica
        - Nota fiscal
        - Fotos Reais dos nossos produtos.
        - Modelagem e Tecido de Qualidade.
        - Linha Premium.

        MEDIDAS:
        MEDIDAS DA CINTURA/CÓS DA CALÇA: medir só a frente da cintura da calça e não do corpo.
        Tamanho 36 - tem 36cm a 37cm
        Tamanho 38 - tem 38cm a 39cm
        Tamanho 40 - tem 40cm a 41cm
        Tamanho 42 - tem 42cm a 43cm
        Tamanho 44 - tem 44cm a 45cm
        Tamanho 46 - tem 46cm a 47cm
        Tamanho 48 - tem 48cm a 49cm
        Tamanho 50 - tem 50cm a 51cm
        Tamanho 52 - tem 52cm a 53cm

        MEDIDAS DE COMPRIMENTO DA CALÇA: medir toda a lateral de fora da calça, da cintura até a barra.
        Tamanho 36 - tem 100cm a 103cm
        Tamanho 38 - tem 100cm a 103cm
        Tamanho 40 - tem 105cm a 108cm
        Tamanho 42 - tem 105cm a 108cm
        Tamanho 44 - tem 105cm a 108cm
        Tamanho 46 - tem 105cm a 108cm
        Tamanho 48 - tem 105cm a 108cm
        Tamanho 50 - tem 105cm a 108cm
        Tamanho 52 - tem 105cm a 108cm

        DÚVIDAS FREQUENTES:

        1 – É recomendado pegar um tamanho maior ou menor?
        Resposta: Não. Recomendamos comprar no tamanho utilizado normalmente mesmo. Lembrando que nossas calças são modelos SKINNY com lycra/elastano e se ajusta ao corpo. Verifique também a tabela de medidas disponível nesse anúncio para auxiliar na escolha do tamanho correto.

        2 – Tem os produtos a pronta entrega? Em quanto tempo o produto será enviado?
        Resposta: Sim, temos todas as peças a pronta entrega para envio imediato. Após efetuar a compra, seu pedido será postado em até 24 horas uteis.

        3 – O tecido é resistente?
        Resposta: Sim, nossas peças são fabricadas com tecidos resistentes que possuem lycra/elastano na composição para dar elasticidade e deixar a peça com excelente caimento e super confortável.

        Garantia do vendedor: 15 dias
    `,
    rate: 4.3,
    reviews: [
      {
        id: 1,
        name: "Larissa",
        review: "Jeans leve e confortável, ótimo para o dia a dia.",
        rate: 5,
      },
      {
        id: 2,
        name: "Fernando",
        review: "A calça é boa, mas demorou um pouco para chegar.",
        rate: 3,
      },
      {
        id: 3,
        name: "Beatriz",
        review: "Adorei! Combina com tudo e é super estilosa.",
        rate: 5,
      },
    ],
  },
];
