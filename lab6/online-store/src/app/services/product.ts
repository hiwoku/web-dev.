import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Tech & Gadgets' },
    { id: 2, name: 'Auto' },
    { id: 3, name: 'Home & Office' },
    { id: 4, name: 'Health & Beauty' },
  ];

  private products: Product[] = [
    // ===== 1) TECH & GADGETS (5) =====
    {
      id: 116684101,
      name: 'Смартфон Apple iPhone 17 Pro Max 2Tb серебристый',
      description:
        'Apple iPhone 17 Pro Max 2Tb — флагманский смартфон с передовыми технологиями и непревзойденной производительностью для самых требовательных пользователей.',
      price: 11461056,
      rating: 4.9,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pfa/p57/64169950.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd6/p00/64475965.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p16/p58/64169951.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-2tb-serebristyi-145468192/?c=750000000',
    },
    {
      id: 113138220,
      name: 'Планшет LCD для рисования пластик 10.',
      description:
        'LCD планшет для рисования. Сброс рисунка работает после установки батарейки и разблокировки стирания.',
      price: 548,
      rating: 4.8,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p39/p6b/5853944.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p39/p6b/5853944.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/p6b/5853945.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p39/p6b/5853944.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/planshet-lcd-planshet-dlja-risovanija-plastik-106688749/?c=750000000',
    },
    {
      id: 123890381,
      name: 'Сумка Portcase 9011 до 15.6" черный',
      description:
        'Сумка Portcase 9011 для ноутбука до 15.6". Есть место для аксессуаров и документов.',
      price: 3359,
      rating: 4.2,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/h2b/69003730550814.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfb/hea/69003731075102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h93/h2b/69003730550814.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfb/hea/69003731075102.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-do-15-6-chernyi-108895248/?c=750000000',
    },
    {
      id: 144392065,
      name: 'Подставка для ноутбука Notestand',
      description:
        'Подставка для ноутбука для комфортной работы.',
      price: 999,
      rating: 4.2,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/pdc/17497973.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa3/pdc/17497973.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p87/pdc/17497974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6a/pdc/17497975.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/notestand-102983515/?c=750000000',
    },
    {
      id: 116684102,
      name: 'Зарядное устройство BAVIN C1250 белый',
      description:
        'Разъем подключения USB. Совместимость ANDROID. Мощность зарядки20 Вт. Цвет белый',
      price: 1555000,
      rating: 4.9,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h90/86255848751134.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he2/h90/86255848751134.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h51/h04/86255848816670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h66/hdd/86255848882206.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/bavin-c1250-belyi-120301476/?c=750000000',
    },

    // ===== 2) AUTO (5) =====
    {
      id: 113137790,
      name: 'Набор автомобильный 46 в 1 TORNADO',
      description:
        'Набор инструментов TORNADO 46 в 1 — компактный и функциональный помощник.',
      price: 1528,
      rating: 4.7,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h87/84180460830750.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1e/h87/84180460830750.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p33/p9c/71103063.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p17/p9c/71103064.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/nabor-avtomobil-nyi-46-v-1-tornado-167867549-113829427/?c=750000000',
    },
    {
      id: 113137791,
      name: 'Наклейка на порог автомобиля, 7 см х 5 метров',
      description: 'Защитная самоклеящаяся пленка satisha для порогов, кромок дверей, зеркал автомобиля. В 20 раз толще скотча. Надежная защита от царапин, сколов и потертостей',
      price: 990,
      rating: 4.3,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7b/h25/85412653563934.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/h46/85412653629470.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/h1c/85412653760542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h11/h75/85412653891614.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/nakleika-na-porog-avtomobilja-7-sm-h-5-metrov-113750534/?c=750000000',
    },
    {
      id: 113137792,
      name: 'JSD JSD 520 1 DIN',
      description: 'Магнитола JSD 520 — это современное решение для вашего автомобиля, которое сочетает в себе высокое качество звука, удобство подключения и многофункциональность.',
      price: 4900,
      rating: 4.8,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h36/hf0/81876786118686.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h04/hfa/81876786151454.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hda/h96/85630069178398.jpg?format=gallery-medium ',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h4c/85630069047326.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/jsd-jsd-520-1-din-104398564/?c=750000000',
    },
    {
      id: 113137793,
      name: 'Крепежный комплект All Buy Company ABC-25X120 черный',
      description: 'Крепежный комплект All Buy Company ABC-25х120 — надежное решение для установки номерных знаков без демонтажа бампера.',
      price: 1790,
      rating: 4.9,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pde/p27/57916768.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pde/p27/57916768.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p48/p2b/57916769.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc7/p79/57916771.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/krepezhnyi-komplekt-all-buy-company-abc-25x120-chernyi-143905317/?c=750000000',
    },
    {
      id: 113137794,
      name: 'Автомобильная визитка Perfeo 105987 черный',
      description: 'Автомобильная визитка Perfeo 105987 — удобное решение для быстрого доступа к контактной информации, обеспечивающее безопасность и комфорт во время поездок.',
      price: 50,
      rating: 4.5,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h45/h85/64439780671518.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h45/h85/64439780671518.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/hf2/64439783227422.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hac/h97/64439787618334.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/avtomobil-naja-vizitka-perfeo-105987-chernyi-104530784/?c=750000000',
    },

    // ===== 3) HOME & OFFICE (5) =====
    {
      id: 128386583,
      name: 'Вешалка напольная металлическая',
      description:
        'Прочная напольная вешалка из металла. Подходит для дома и офиса.',
      price: 4109,
      rating: 4.5,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/had/hfd/83825341333534.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h30/hc0/83825341530142.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/veshalka-napol-naja-izox-metall-110x150-sm-chernyi-113366378/?c=750000000',
    },
    {
      id: 121691395,
      name: 'Стул Чили, 86x45x37 см, серый 1 шт.',
      description:
        'Стул Чили — современное решение для вашего интерьера, которое сочетает комфорт, стильный дизайн и долговечность.',
      price: 9800,
      rating: 4.9,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p87/pca/74520704.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p11/p5d/51544077.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p26/p60/51544084.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p01/p64/51544098.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/lastik-maped-technic-duo-511710-1-sht-103885134/?c=750000000',
    },
    {
      id: 128386584,
      name: 'ТВ-тумба напольная Лофт, 180x40x35 см, белый, графит',
      description: 'Напольная ТВ-тумба Лофт — это стильное и функциональное решение для вашего интерьера, которое сочетает в себе современный дизайн и удобство использования.',
      price: 27887,
      rating: 3.9,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/hdf/84431697575966.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/hdf/84431697575966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he1/h52/84431697641502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/h71/84431697707038.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/tv-tumba-napol-naja-loft-180x40x35-sm-belyi-grafit-114282876/?c=750000000',
    },
    {
      id: 121691396,
      name: 'Стеллаж напольный Index, 80x28x202 см, белый',
      description: 'Стеллаж напольный Index — это стильное и функциональное решение для вашего интерьера, которое сочетает в себе современный дизайн и удобство использования.',
      price: 22500,
      rating: 4.8,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h5b/85987702276126.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h59/h5b/85987702276126.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h42/h0d/85987702308894.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h07/h23/85987702341662.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/stellazh-napol-nyi-index-80x28x202-sm-belyi-104917463/?c=750000000&tab=reviews',
    },
    {
      id: 128386585,
      name: 'Обувница MEISHI 100x30x50 см, МДФ',
      description: 'Обувница MEISHI Sh-102 — стильное и функциональное решение для вашего прихожей, обеспечивающее порядок и удобство.',
      price: 33476,
      rating: 4.1,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hea/h60/84923734491166.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hea/h60/84923734491166.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa4/p0e/78514786.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc0/p0e/78514787.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/obuvnitsa-meishi-sh-102-100x30x50-sm-belyi-115918914/?c=750000000',
    },

    // ===== 4) HEALTH & BEAUTY (5) =====
    {
      id: 102875265,
      name: 'ТераФлю Саше 325 мг 10 шт',
      description:
        'Средство для симптоматического лечения простуды и гриппа.',
      price: 2497,
      rating: 4.8,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/hcf/87293798088734.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/hcf/87293798088734.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/hcf/87293798088734.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/hcf/87293798088734.jpg?format=gallery-small',
      ],
      link: 'https://kaspi.kz/shop/p/teraflju-sashe-325-mg-10-sht-124283396/?c=750000000',
    },
    {
      id: 121693378,
      name: 'Bioderma крем sebium hydra для 40мл',
      description:
        'Крем помогает восстановить кожу, увлажнить и успокоить.',
      price: 7600,
      rating: 4.5,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6c/p0a/83177267.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/pea/107684099.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9b/pbd/25952389.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2f/pbb/25952390.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/bioderma-krem-sebium-hydra-dlja-litsa-40-ml-17600059/?c=750000000',
    },
    {
      id: 121692808,
      name: 'MISS TAIS Mauve карандаш 765',
      description:
        'Гипоаллергенная формула и деревянный корпус для комфортного нанесения.',
      price: 120,
      rating: 4.7,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1c/p41/18255089.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa6/p88/18255090.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2a/p6e/64203728.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1c/p41/18255089.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/miss-tais-mauve-karandash-765-100155528/?c=750000000',
    },
    {
      id: 102875266,
      name: 'Skin1004 Madagascar Centella Travel Kit набор по уходу за лицом для женщин',
      description: 'Средство от симптомов простуды, удобная форма саше.',
      price: 2597,
      rating: 4.2,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p06/59275991.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p88/p06/59275992.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6c/p06/59275993.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h25/h3e/85833217048606.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/skin1004-madagascar-centella-travel-kit-nabor-po-uhodu-za-litsom-dlja-zhenschin-106514387/?c=750000000',
    },
    {
      id: 121693379,
      name: 'GLS Pharmaceuticals Магний цитрат с витамином B6 400 мг капсулы 90 шт',
      description: 'Капсулы с магнием цитратом и витамином B6 для поддержания здоровья.',
      price: 3145,
      rating: 4.9,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p25/p73/87294634.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p25/p73/87294634.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5e/pc5/37971895.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9e/p7a/37971902.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/gls-pharmaceuticals-magnii-tsitrat-s-vitaminom-b6-400-mg-kapsuly-90-sht-102020286/?c=750000000&tab=reviews',
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }
}