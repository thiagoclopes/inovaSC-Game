export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

export const questionsLevel3: Question[] = [
    {
        id: 21,
        text: "A hipovolemia (choque por perda de volume) pode ocorrer:",
        options: [
            "Somente com pressão arterial baixa.",
            "Mesmo com pressão arterial normal (choque compensado).",
            "Apenas em casos de hemorragia externa.",
            "Somente em ambientes quentes."
        ],
        correctAnswer: "Mesmo com pressão arterial normal (choque compensado).",
        explanation: "No choque compensado, o corpo mantém a pressão arterial normal através de mecanismos como vasoconstrição, mesmo com perda significativa de volume."
    },
    {
        id: 22,
        text: "A hipotermia pode ocorrer mesmo em ambientes não muito frios se a vítima:",
        options: [
            "Estiver usando roupas leves.",
            "Estiver molhada, imóvel ou com hemorragia.",
            "Estiver em local fechado.",
            "Estiver desidratada."
        ],
        correctAnswer: "Estiver molhada, imóvel ou com hemorragia.",
        explanation: "Fatores como umidade, imobilidade ou hemorragia aumentam a perda de calor, predispondo à hipotermia mesmo em temperaturas moderadas."
    },
    {
        id: 23,
        text: "Após desligar a fonte de energia, é seguro tocar a vítima de choque elétrico?",
        options: [
            "Não, o corpo continua carregado.",
            "Sim, se for usado equipamento especial.",
            "Sim, desde que a fonte esteja desligada.",
            "Não, deve-se esperar 10 minutos."
        ],
        correctAnswer: "Sim, desde que a fonte esteja desligada.",
        explanation: "Uma vez que a fonte de energia é desligada, a vítima de choque elétrico não retém carga elétrica, sendo seguro tocá-la."
    },
    {
        id: 24,
        text: "Todo paciente com dispneia grave deve receber broncodilatador?",
        options: [
            "Sim, sempre ajuda.",
            "Não, depende da causa da dispneia.",
            "Sim, se não tiver febre.",
            "Se a dispneia for leve."
        ],
        correctAnswer: "Não, depende da causa da dispneia.",
        explanation: "Broncodilatadores são indicados para dispneia causada por condições como asma ou DPOC, mas não são adequados para outras causas, como edema pulmonar."
    },
    {
        id: 25,
        text: "O tratamento para intoxicação por organofosforados envolve:",
        options: [
            "Atropina em doses altas e pralidoxima.",
            "Uso de corticosteroides.",
            "Edrofônio e neostigmina.",
            "Alfabloqueadores."
        ],
        correctAnswer: "Atropina em doses altas e pralidoxima.",
        explanation: "Atropina antagoniza os efeitos muscarínicos e pralidoxima regenera a acetilcolinesterase, sendo o tratamento padrão para intoxicação por organofosforados."
    },
    {
        id: 26,
        text: "A hipotermia em vítimas molhadas e imobilizadas deve ser tratada com:",
        options: [
            "Água morna por via oral.",
            "Cobertores, isolamento e mantas térmicas.",
            "Exposição ao sol direto.",
            "Esfregar o corpo para aquecer."
        ],
        correctAnswer: "Cobertores, isolamento e mantas térmicas.",
        explanation: "Cobertores e mantas térmicas ajudam a reter o calor corporal e prevenir maior perda de temperatura, sendo a abordagem correta para hipotermia."
    },
    {
        id: 27,
        text: "A resposta do paciente a adrenalina no choque anafilático pode ser atenuada exigindo doses maiores ou alternativa de tratamento em casos de uso crônico de:",
        options: [
            "Alfabloqueadores.",
            "Antagonistas nicotínicos.",
            "Antagonistas muscarínicos.",
            "Betabloqueadores."
        ],
        correctAnswer: "Betabloqueadores.",
        explanation: "Betabloqueadores podem reduzir a resposta à adrenalina ao bloquear receptores beta-adrenérgicos, exigindo doses maiores ou tratamentos alternativos."
    }
];