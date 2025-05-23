export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

export const questionsLevel1: Question[] = [
    {
        id: 1,
        text: "São sinais de AVC:",
        options: [
            "Perda da sensibilidade, fala embolada e confusão mental.",
            "Hipoglicemia, fala embolada e fraqueza em um lado do corpo.",
            "Hipertensão, visão turva e tontura.",
            "Hipotensão, dificuldade para engolir e dor de cabeça intensa."
        ],
        correctAnswer: "Perda da sensibilidade, fala embolada e confusão mental.",
        explanation: "Os sinais de AVC incluem perda de sensibilidade, fala embolada e confusão mental, que indicam comprometimento neurológico agudo típico dessa condição."
    },
    {
        id: 2,
        text: "Em casos de ingestão de substância corrosiva, como por exemplo uma base, o que deve-se fazer?",
        options: [
            "Neutralizar com um ácido.",
            "Ligar para o SAMU.",
            "Forçar o vômito.",
            "Ingerir leite."
        ],
        correctAnswer: "Ligar para o SAMU.",
        explanation: "Em casos de ingestão de substâncias corrosivas, a prioridade é buscar ajuda médica imediata. Não se deve tentar neutralizar a substância com produtos químicos ou provocar vômito, pois isso pode agravar as lesões internas. A recomendação é acionar o SAMU (192) para receber orientações adequadas e encaminhamento urgente ao hospital."
    },
    {
        id: 3,
        text: "Após estancar um sangramento, o que é mais indicado?",
        options: [
            "Aplicar gelo.",
            "Apenas cobrir com um curativo.",
            "Procurar avaliação médica especializada.",
            "Lavar com água e sabão."
        ],
        correctAnswer: "Procurar avaliação médica especializada.",
        explanation: "Após estancar um sangramento, é essencial buscar avaliação médica para verificar a gravidade da lesão e prevenir complicações."
    },
    {
        id: 4,
        text: "Qual a conduta correta após um trauma com inchaço?",
        options: [
            "Fazer compressa morna.",
            "Tomar analgésico e esperar.",
            "Massagem.",
            "Fazer compressa de água + gelo."
        ],
        correctAnswer: "Fazer compressa de água + gelo.",
        explanation: "Compressas frias com gelo ajudam a reduzir o inchaço e a inflamação após um trauma, enquanto compressas mornas ou massagens podem piorar a condição."
    },
    {
        id: 5,
        text: "A hipoglicemia pode causar:",
        options: [
            "Sede intensa e desidratação.",
            "Confusão, agitação e coma.",
            "Formigamento.",
            "Dor muscular."
        ],
        correctAnswer: "Confusão, agitação e coma.",
        explanation: "Hipoglicemia provoca sintomas neurológicos como confusão, agitação e, em casos graves, coma, devido à falta de glicose no cérebro."
    },
    {
        id: 6,
        text: "Para salvar uma pessoa engasgada, qual a melhor ação a ser tomada?",
        options: [
            "Aplicar a manobra de Heimlich.",
            "Fazer a pessoa beber água.",
            "Dar tapinhas leves nas costas.",
            "Pedir que a pessoa se incline para frente."
        ],
        correctAnswer: "Aplicar a manobra de Heimlich.",
        explanation: "A manobra de Heimlich é a técnica mais eficaz para desobstruir as vias aéreas em casos de engasgo, sendo recomendada em emergências."
    },
    {
        id: 7,
        text: "Em hemorragias externas, qual é a ação mais eficaz inicialmente?",
        options: [
            "Lavar com água.",
            "Aplicar gelo.",
            "Fazer compressão direta.",
            "Elevar o membro."
        ],
        correctAnswer: "Fazer compressão direta.",
        explanation: "A compressão direta é a primeira e mais eficaz medida para controlar hemorragias externas, reduzindo a perda de sangue."
    },
    {
        id: 8,
        text: "Qual é o melhor local para verificar o pulso em adultos inconscientes?",
        options: [
            "Pulso radial.",
            "Pulso femoral.",
            "Pulso carotídeo.",
            "Pulso braquial."
        ],
        correctAnswer: "Pulso carotídeo.",
        explanation: "O pulso carotídeo é o mais confiável para verificar a circulação em adultos inconscientes, devido à sua acessibilidade e proximidade com o coração."
    },
    {
        id: 9,
        text: "Em caso de sangramento nasal, o correto é:",
        options: [
            "Deitar a pessoa.",
            "Inclinar a cabeça para trás.",
            "Tampar uma narina e assoar forte.",
            "Inclinar a cabeça para frente e comprimir o nariz."
        ],
        correctAnswer: "Inclinar a cabeça para frente e comprimir o nariz.",
        explanation: "Inclinar a cabeça para frente e comprimir o nariz evita a aspiração de sangue e ajuda a estancar o sangramento nasal."
    },
    {
        id: 10,
        text: "Qual é a conduta correta em caso de queimaduras?",
        options: [
            "Passar pomada.",
            "Cobrir com pano seco.",
            "Aplicar gelo diretamente.",
            "Lavar com água corrente e fria."
        ],
        correctAnswer: "Lavar com água corrente e fria.",
        explanation: "Lavar com água corrente e fria resfria a área queimada, reduz a dor e minimiza danos aos tecidos, sendo a primeira medida recomendada."
    }
];