export interface Question {
	id: number;
	text: string;
	options: string[];
	correctAnswer: string;
	explanation: string;
}

export const questions: Question[] = [
	{
		id: 1,
		text: "O que deve ser feito para ajudar uma pessoa engasgada?",
		options: [
			"Apenas dar um “tapinha” nas costas.",
			"Colocar a pessoa deitada e esperar.",
			"Aplicar a manobra de Heimlich com pressão abdominal.",
			"Dar água para ajudar a descer."
		],
		correctAnswer: "Aplicar a manobra de Heimlich com pressão abdominal.",
		explanation: "Tapinhas leves não são eficazes. O correto é aplicar a manobra de Heimlich, que utiliza pressão abdominal para desobstruir as vias aéreas."
	},
	{
		id: 2,
		text: "Após estancar um sangramento, é necessário atendimento médico?",
		options: [
			"Não, se o sangramento parou está tudo bem.",
			"Sim, pois pode haver danos internos ou infecção.",
			"Só se a pessoa sentir dor depois.",
			"Apenas em casos de acidentes graves."
		],
		correctAnswer: "Sim, pois pode haver danos internos ou infecção.",
		explanation: "Mesmo estancado, o ferimento pode ter danos internos, infecção ou necessidade de sutura. Avaliação médica é essencial."
	},
	{
		id: 3,
		text: "Chupar o veneno da picada de cobra ajuda a salvar a vítima?",
		options: [
			"Sim, remove o veneno do corpo.",
			"Sim, mas só se feito logo após a picada.",
			"Não, isso pode contaminar a vítima e quem ajuda.",
			"Sim, se a pessoa estiver consciente."
		],
		correctAnswer: "Não, isso pode contaminar a vítima e quem ajuda.",
		explanation: "Isso não remove o veneno e pode levar à contaminação. O certo é manter a vítima calma, imobilizar o membro e procurar atendimento urgente."
	},
	{
		id: 4,
		text: "Forçar o vômito após ingestão de substância corrosiva é recomendado?",
		options: [
			"Sim, pois ajuda a eliminar o veneno.",
			"Não, pode causar mais danos ao esôfago e pulmões.",
			"Sim, se a pessoa estiver consciente.",
			"Não, porque o vômito pode piorar o gosto."
		],
		correctAnswer: "Não, pode causar mais danos ao esôfago e pulmões.",
		explanation: "Forçar o vômito é perigoso pois pode causar lesões graves no esôfago ou até ser aspirado pelos pulmões. Além disso, parte do veneno já pode ter sido absorvida."
	},
	{
		id: 5,
		text: "Todo desmaio é sinal de algo grave?",
		options: [
			"Sim, sempre indica emergência médica.",
			"Não, pode ser causado por fatores simples.",
			"Sim, principalmente se durar mais de 1 minuto.",
			"Não, desde que a pessoa acorde sozinha."
		],
		correctAnswer: "Não, pode ser causado por fatores simples.",
		explanation: "Desmaios podem ser causados por situações simples como calor, estresse ou jejum. Mas ainda assim, é importante observar e buscar atendimento se necessário."
	},
	{
		id: 6,
		text: "O que fazer em caso de inchaço após um trauma?",
		options: [
			"Aplicar calor no local.",
			"Fazer compressa de água e gelo.",
			"Massagear fortemente.",
			"Amarrar uma faixa apertada."
		],
		correctAnswer: "Fazer compressa de água e gelo.",
		explanation: "O gelo ajuda a reduzir o inchaço e a inflamação nos primeiros momentos após o trauma."
	},
	{
		id: 7,
		text: "Qual a medida mais eficaz em hemorragias externas inicialmente?",
		options: [
			"Lavar com água corrente.",
			"Elevar o membro afetado.",
			"Fazer compressão direta no ferimento.",
			"Usar álcool no local."
		],
		correctAnswer: "Fazer compressão direta no ferimento.",
		explanation: "A pressão sobre o ferimento ajuda a controlar a saída de sangue de forma rápida."
	},
	{
		id: 8,
		text: "Por que o uso de luvas é importante nos primeiros socorros?",
		options: [
			"Evitar sujeira.",
			"Não é tão necessário se for conhecido.",
			"Protege contra contaminação e doenças.",
			"Porque deixa o socorrista mais confiante."
		],
		correctAnswer: "Protege contra contaminação e doenças.",
		explanation: "Evita contaminações cruzadas e protege contra doenças transmitidas por sangue."
	},
	{
		id: 9,
		text: "O que deve ser feito durante uma hemorragia nasal?",
		options: [
			"Inclinar a cabeça para trás.",
			"Inclinar a cabeça para frente e comprimir as narinas.",
			"Deitar e esperar o sangramento parar.",
			"Assuar o nariz com força."
		],
		correctAnswer: "Inclinar a cabeça para frente e comprimir as narinas.",
		explanation: "Inclinar para frente evita que o sangue vá para a garganta e a compressão ajuda a controlar o sangramento."
	},
	{
		id: 10,
		text: "Se a vítima consegue falar, ela não está engasgada. Isso é:",
		options: [
			"Verdade, pois a fala indica via aérea desobstruída.",
			"Mito, pois pode estar parcialmente engasgada.",
			"Verdade, pois não há risco se a pessoa respira.",
			"Mito, pois falar sempre indica falta de oxigênio."
		],
		correctAnswer: "Mito, pois pode estar parcialmente engasgada.",
		explanation: "A vítima pode conseguir falar mesmo com obstrução parcial e a situação pode piorar rapidamente."
	}
];
