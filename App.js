import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import styles from './styles';

export default function App() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  const adicionarItem = () => {
    if (item.trim() === '') {
      return;
    }

    setLista([...lista, item.trim()]);
    setItem('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#3C712A"
      />

      <View style={styles.header}>
        <View>
          <Text style={styles.ola}>MINHA LISTA</Text>

          <Text style={styles.titulo}>
            Lista de Compras
          </Text>

          <Text style={styles.subtitulo}>
            Organize suas compras de forma simples.
          </Text>
        </View>

        <View style={styles.iconeHeader}>
          <Text style={styles.iconeTexto}>🛒</Text>
        </View>
      </View>

      <View style={styles.conteudo}>

        <View style={styles.cardAdicionar}>
          <Text style={styles.label}>
            Adicionar novo item
          </Text>

          <View style={styles.linhaInput}>

            <View style={styles.inputContainer}>
              <Text style={styles.iconeInput}>
                🛍
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Ex: Arroz, leite, pão..."
                placeholderTextColor="#999"
                value={item}
                onChangeText={setItem}
                onSubmitEditing={adicionarItem}
              />
            </View>

            <TouchableOpacity
              style={styles.botao}
              onPress={adicionarItem}
              activeOpacity={0.8}
            >
              <Text style={styles.botaoTexto}>
                +
              </Text>
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.cabecalhoLista}>

          <View>
            <Text style={styles.tituloLista}>
              Minha lista
            </Text>

            <Text style={styles.descricaoLista}>
              {lista.length === 0
                ? 'Nenhum item adicionado ainda'
                : 'Itens adicionados à sua compra'}
            </Text>
          </View>

          <View style={styles.contador}>
            <Text style={styles.contadorNumero}>
              {lista.length}
            </Text>

            <Text style={styles.contadorTexto}>
              {lista.length === 1 ? 'item' : 'itens'}
            </Text>
          </View>

        </View>

        <FlatList
          data={lista}
          keyExtractor={(item, index) => `${item}-${index}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            lista.length === 0
              ? styles.listaVazia
              : styles.lista
          }

          ListEmptyComponent={
            <View style={styles.emptyContainer}>

              <View style={styles.emptyIcon}>
                <Text style={styles.emptyEmoji}>
                  🛒
                </Text>
              </View>

              <Text style={styles.emptyTitulo}>
                Sua lista está vazia
              </Text>

              <Text style={styles.emptyTexto}>
                Adicione produtos usando o campo acima.
              </Text>

            </View>
          }

          renderItem={({ item, index }) => (
            <View style={styles.itemCard}>

              <View style={styles.numeroItem}>
                <Text style={styles.numeroTexto}>
                  {index + 1}
                </Text>
              </View>

              <View style={styles.informacaoItem}>
                <Text style={styles.itemTexto}>
                  {item}
                </Text>

                <Text style={styles.itemDescricao}>
                  Item da lista de compras
                </Text>
              </View>

              <View style={styles.check}>
                <Text style={styles.checkTexto}>
                  ✓
                </Text>
              </View>

            </View>
          )}
        />

      </View>
    </SafeAreaView>
  );
}