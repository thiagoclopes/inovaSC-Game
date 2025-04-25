import { useEffect } from 'react';
import { View, Text } from 'react-native';

export interface TimerProps {
  timeLeft: number;
  setTimeLeft: (time: number) => void;
  onTimeOut: () => void;
}

export default function Timer({ timeLeft, setTimeLeft, onTimeOut }: TimerProps) {
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeOut();
      return;
    }
    const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <View className="">
      <Text className="text-lg text-white">{formattedTime}</Text>
    </View>
  );
}