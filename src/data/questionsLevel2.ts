export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

export const questionsLevel2: Question[] = [
    {
        id: 11,
        text: "Qual a frequência correta das compressões torácicas em adultos durante uma RCP?",
        options: [
            "60 a 70 compressões por minuto.",
            "75 a 90 compressões por minuto.",
            "100 a 120 compressões por minuto.",
            "Acima de 130 compressões por minuto."
        ],
        correctAnswer: "100 a 120 compressões por minuto.",
        explanation: "A frequência de 100 a 120 compressões por minuto é recomendada para RCP em adultos, pois otimiza a circulação sanguínea e segue as diretrizes internacionais."
    },
    {
        id: 12,
        text: "Após uma parada cardiorrespiratória, o socorrista qualificado deve:",
        options: [
            "Esperar a ambulância chegar.",
            "Fazer respiração boca a boca apenas.",
            "Aplicar RCP (reanimação cardiopulmonar) contínua até a chegada da ambulância.",
            "Realizar compressas torácicas."
        ],
        correctAnswer: "Aplicar RCP (reanimação cardiopulmonar) contínua até a chegada da ambulância.",
        explanation: "A RCP contínua, combinando compressões torácicas e ventilações, é essencial para restaurar a circulação e oxigenação até a chegada de ajuda médica."
    },
    {
        id: 13,
        text: "A profundidade correta da compressão torácica em adultos é:",
        options: [
            "2 a 3 cm.",
            "5 a 6 cm.",
            "4 cm.",
            "7 a 9 cm com 130 compressões por minuto."
        ],
        correctAnswer: "5 a 6 cm.",
        explanation: "A profundidade de 5 a 6 cm nas compressões torácicas em adultos é ideal para garantir circulação adequada sem causar lesões, conforme diretrizes de RCP."
    },
    {
        id: 14,
        text: "Quando uma pessoa está engasgada, a manobra de Heimlich:",
        options: [
            "Só é indicada em obstrução total das vias aéreas.",
            "Deve ser feita em todos os casos.",
            "É usada apenas em crianças.",
            "Pode substituir a tosse da vítima."
        ],
        correctAnswer: "Só é indicada em obstrução total das vias aéreas.",
        explanation: "A manobra de Heimlich é usada em obstruções totais, pois em obstruções parciais a vítima pode tossir para desobstruir as vias aéreas."
    },
    {
        id: 15,
        text: "Quando uma vítima apresenta trauma e há risco de necessidade de cirurgia, por que ela deve permanecer em jejum?",
        options: [
            "Para evitar vômitos por estresse.",
            "Para evitar aspiração durante anestesia.",
            "Para reduzir dor abdominal.",
            "Para controlar a pressão arterial."
        ],
        correctAnswer: "Para evitar aspiração durante anestesia.",
        explanation: "O jejum previne o risco de aspiração de conteúdo gástrico durante a anestesia, uma complicação grave em procedimentos cirúrgicos."
    },
    {
        id: 16,
        text: "Queimaduras de terceiro grau não causam dor inicialmente porque:",
        options: [
            "Afetam apenas a camada superficial da pele.",
            "Causam dormência leve que logo passa.",
            "A destruição das terminações nervosas elimina a dor no local.",
            "São resfriadas rapidamente pelo corpo."
        ],
        correctAnswer: "A destruição das terminações nervosas elimina a dor no local.",
        explanation: "Queimaduras de terceiro grau destroem as terminações nervosas na pele, eliminando a sensação de dor na área afetada."
    },
    {
        id: 17,
        text: "Luxações podem ser perigosas porque:",
        options: [
            "Podem danificar nervos e vasos sanguíneos próximos.",
            "Podem causar fraturas múltiplas.",
            "Fraturam os ossos.",
            "Impedem o socorrista de imobilizar a vítima."
        ],
        correctAnswer: "Podem danificar nervos e vasos sanguíneos próximos.",
        explanation: "Luxações podem lesionar nervos e vasos sanguíneos próximos, causando complicações como perda de sensibilidade ou circulação comprometida."
    },
    {
        id: 18,
        text: "Em caso de arritmias graves, como a fibrilação ventricular, qual a abordagem correta?",
        options: [
            "Apenas desfibrilação imediata resolve.",
            "RCP contínua e medicamentos também são importantes.",
            "Cirurgia imediatamente.",
            "Administrar soro fisiológico rapidamente."
        ],
        correctAnswer: "RCP contínua e medicamentos também são importantes.",
        explanation: "Na fibrilação ventricular, a RCP contínua e medicamentos, além da desfibrilação, são cruciais para estabilizar o paciente e restaurar o ritmo cardíaco."
    },
    {
        id: 19,
        text: "A triade de Cushing (bradicardia, hipertensão e alteração respiratória) em traumatismo craniano:",
        options: [
            "Está presente em todos os casos.",
            "É pouco útil no diagnóstico de HIC.",
            "Pode estar ausente, mesmo com pressão intracraniana aumentada.",
            "Aparece apenas em adultos jovens."
        ],
        correctAnswer: "Pode estar ausente, mesmo com pressão intracraniana aumentada.",
        explanation: "A triade de Cushing pode não estar presente em todos os casos de aumento da pressão intracraniana, o que limita sua utilidade diagnóstica."
    },
    {
        id: 20,
        text: "Uma imobilização incorreta em suspeita de lesão medular pode:",
        options: [
            "Trazer lesões ao pulmão.",
            "Trazer lesões ao abdômen.",
            "Trazer confusão mental.",
            "Piorar a lesão existente."
        ],
        correctAnswer: "Piorar a lesão existente.",
        explanation: "Imobilização incorreta em lesões medulares pode agravar a lesão, causando maior dano à medula espinhal e complicações neurológicas."
    }
];