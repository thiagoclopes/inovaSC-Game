import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator, Image, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Platform } from 'react-native';
import { router } from 'expo-router';
import { API_BASE_URL } from '../../config';

export default function IndexScreen() {
  const [nome, setNome] = useState('');
  const [loading, setLoading] = useState(false);

  const handleStart = async () => {
    if (nome.trim() === '') {
      Alert.alert('Atenção', 'Por favor, digite seu nome para começar.');
      return;
    }

    setLoading(true);

    try {
      const getResponse = await fetch(`${API_BASE_URL}/usuarios?nome=${encodeURIComponent(nome)}`);
      const usuariosExistentes = await getResponse.json();

      let usuario;

      if (usuariosExistentes.length > 0) {
        usuario = usuariosExistentes[0];
      } else {
        const postResponse = await fetch(`${API_BASE_URL}/usuarios`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome,
            pontosNvl1: 0,
            pontosNvl2: 0,
            pontosNvl3: 0,
            nivel: 1,
          }),
        });

        if (!postResponse.ok) {
          throw new Error('Erro ao criar novo usuário.');
        }

        usuario = await postResponse.json();
      }

      router.push({
        pathname: '/home',
        params: {
          id: String(usuario.id),
          nome: usuario.nome,
        },
      });
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível iniciar o jogo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-red-main">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, alignItems: 'center', padding: 20 }}
              keyboardShouldPersistTaps="handled"
            >
              <Image
                source={require("../assets/logo.png")}
                className='h-32 mt-32 mb-4'
                resizeMode="contain"
              />
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
                InovaSC Game
              </Text>
              <TextInput
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome}
                style={{
                  width: '100%',
                  borderColor: '#ccc',
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 12,
                  marginBottom: 20,
                }}
              />
              {loading ? (
                <ActivityIndicator size="large" color="#007bff" />
              ) : (
                <TouchableOpacity onPress={handleStart} className='bg-green-900 p-4 rounded-md'>
                  <Text className='text-white'>Começar</Text>
                </TouchableOpacity>
              )}
              <View style={{ height: 100 }} />
            </ScrollView>

            
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View className='p-4'>
        <Image
          source={require("../assets/sebrae_logo.png")}
          className='h-16 w-full'
        />
      </View>
    </View>
	);
}