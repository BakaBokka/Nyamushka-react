let state = {
  nyamProps: {
    title: "Ты сегодня покормил кота?",
  },



  cardProps: [
    {
      title: "Нямушка",
      subtitle: {
        default: 'Сказочное заморское яство',
        active: 'Котэ не одобряет?',
      },
      spec: "с фуа-гра",
      descNumber: "10 ",
      desc: "порций ",
      bonusNumber: "мышь ",
      bonus: "в подарок",
      weigth: "0,5",
      weigthUnit: "кг",
      caption: {
        default: {
          p: "Чего сидишь? Порадуй котэ,",
          link: "купи",
          span: ".",
        },
        active: "Печень утки разварная с артишоками.",
        disabled: {
          start: "Печалька ",
          end: " закончился."
        }
      },
      disabled: false,
    },

    {
      title: "Нямушка",
      subtitle: {
        default: 'Сказочное заморское яство',
        active: 'Котэ не одобряет?',
      },
      spec: "с рыбой",
      descNumber: "40 ",
      desc: "порций",
      bonusNumber: "2 ",
      bonus: "мыши в подарок",
      weigth: "1,5",
      weigthUnit: "кг",
      caption: {
        default: {
          p: "Чего сидишь? Порадуй котэ,",
          link: "купи",
          span: ".",
        },
        active: "Головы щучьи с чесноком да свежайшая сёмушка.",
        disabled: {
          start: "Печалька ",
          end: " закончился."
        }
      },

      disabled: false,
    },

    {
      title: "Нямушка",
      subtitle: {
        default: 'Сказочное заморское яство',
        active: 'Котэ не одобряет?',
      },
      spec: "с курой",
      descNumber: "100 ",
      desc: "порций ",
      bonusNumber: "5 ",
      bonus: "мышей в подарок заказчик доволен",
      weigth: "0,5",
      weigthUnit: "кг",
      caption: {
        default: {
          p: "Чего сидишь? Порадуй котэ,",
          link: "купи",
          span: ".",
        },
        active: "Филе из цыплят с трюфелями в бульоне.",
        disabled: {
          start: "Печалька ",
          end: " закончился."
        }

      },

      disabled: true,
    },
  ],
};

export default state;
