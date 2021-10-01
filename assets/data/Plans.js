const Plans = [
    {
        name: 'Vacinação',
        info: 'Para ir e voltar do posto de vacinação pedalando de graça',
        price: 'Vem vacina, vai de bike!',
        color: '#3b3c38',
        options: [
            {
                title: 'Pedale de graça até um posto de vacinação',
                name: 'Vacinação',
                info: 'Adicione o cupom PRIMEIRA ou SEGUNDA para fazer 2 viagens de graça por um dia',
                time: '',
                price: '7,00'
            }
        ]
    },
    {
        name: 'Eventual',
        info: 'Para quem quer conhecer a cidade ou chegar mais rápido ao seu destino',
        price: 'A partir de R$7,00 por dia',
        color: '#000080',
        options: [
            {
                title: 'Viaje com facilidade, sem compromisso',
                name: 'Experimente grátis por 7 dias',
                info: 'Viaje quantas vezes quiser, sem custos adicionais',
                time: 'por até 60min durante 24h',
                price: '0,00'
            },
            {
                name: 'Plano diário',
                info: 'Viaje quantas vezes quiser, sem custos adicionais',
                time: 'por até 60min durante 24h',
                price: '7,00'
            },
            {
                name: 'Passe 3 dias',
                info: 'Viaje quantas vezes quiser, sem custos adicionais',
                time: 'por até 60min durante 3 dias',
                price: '12,00'
            },
            {
                name: 'Assinatura mensal',
                info: 'Viaje quantas vezes quiser, sem custos adicionais',
                time: 'por até 60min durante o mês',
                price: '18,00'
            }
        ]
    },
    {
        name: 'Rotineiro',
        info: 'Agilidade para ir e vir para quem tem a bike como parte da sua rotina',
        price: 'A partir de R$18,00 por mês',
        color: '#FF5112',
        options: [
            {
                title: 'Pague por mês',
                name: 'Assinatura mensal',
                info: 'Viaje quantas vezes quiser, sem custos adicionais',
                time: 'por até 60min durante o mês',
                price: '18,00'
            },
            {
                title: 'Pague por trimestre',
                name: 'Assinatura trimestral',
                info: 'Viaje quantas vezes quiser, sem custos adicionais',
                time: 'por até 60min durante três meses',
                price: '45,00'
            },
            {
                title: 'Pague por ano',
                name: 'Assinatura anual',
                info: 'Viaje quantas vezes quiser, sem custos adicionais',
                time: 'por até 60min durante o ano',
                price: '140,00'
            }
        ]
    }
]

export default Plans