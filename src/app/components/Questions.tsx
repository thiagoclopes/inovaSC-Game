import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface QuestionProps {
	question: string;
	options: string[];
	onAnswer: (answer: string) => void;
	onOptionSelected: (option: string | null) => void;
	isTimedOut: boolean;
	onNext: () => void;
}

export default function Question({ question, options, onAnswer, onOptionSelected, isTimedOut, onNext }: QuestionProps) {
	const labels = ['A', 'B', 'C', 'D'];
	const [selectedOption, setSelectedOption] = useState<string | null>(null);

	const handlePress = (option: string) => {
        if (!isTimedOut) {
            setSelectedOption(option);
            onOptionSelected(option);
        }
    };

    const handleSubmit = () => {
        if (isTimedOut) {
            onNext();
        } else if (selectedOption) {
            onAnswer(selectedOption);
            setSelectedOption(null);
        }
    };

	return (
		<View className="p-8">
		  	<Text className="text-xl font-semibold text-gray-800 mb-4">{question}</Text>
			{options.map((option, index) => (
				<TouchableOpacity
					key={index}
					className={`p-3 rounded-lg mb-2 flex flex-row items-center gap-2 ${
						selectedOption === option && !isTimedOut ? 'bg-blue-400' : isTimedOut ? 'bg-gray-300' : 'bg-blue-200'
					  }`}
					onPress={() => handlePress(option)}
				>
					<View className={`flex items-center justify-center w-8 h-8 border ${selectedOption == option ? 'bg-blue-100' : 'bg-white'}`}>
						<Text className='font-bold'>
							{labels[index]}
						</Text>
					</View>
					
					<Text
						className="text-gray-800 flex-1"
						numberOfLines={2}
						ellipsizeMode="tail" 
					>
					{option}
				</Text>
				</TouchableOpacity>
			))}

			<TouchableOpacity
				className={`mt-4 p-3 rounded-lg ${isTimedOut || selectedOption ? 'bg-red-950' : 'bg-gray-400'}`}
				onPress={handleSubmit}
				disabled={!isTimedOut && !selectedOption}
			>
				<Text className="text-white text-center font-semibold">{isTimedOut ? 'Próxima' : 'Responder'}</Text>
			</TouchableOpacity>
		</View>
	  );
}