
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Button} from 'react-native';
import { Alert } from 'react-native';


const Card = ({ titulo, descricao }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
};


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        lista_filmes: [
          {id: '1', filme: 'Ainda Estou Aqui (2024)', desc: 'Uma mulher casada com um ex-político durante a ditadura militar no Brasil é obrigada a se reinventar e a traçar um novo destino para si e os filhos depois que a vida de sua família é impactada por um ato violento e arbitrário.', image: "https://upload.wikimedia.org/wikipedia/pt/5/57/Ainda_Estou_Aqui_2024_poster.jpg"},
          {id: '2', filme: 'Gilda, Lúcia e o Bode (2020)', desc: 'Após um período de convivência forçada em função do isolamento social, Gilda e Lúcia encaram uma nova realidade. Lúcia é demitida do seu emprego e vê como única alternativa o aluguel da casa da Serra no Rio para garantir o sustento das duas nos meses seguintes.', image: "https://br.web.img3.acsta.net/pictures/22/11/21/17/47/0350707.png"},
          {id: '3', filme: 'A Mulher Invisível (2009)', desc: 'Uma comédia romântica na qual um homem de 35 anos é abandonado por sua esposa e se apaixona pelo vizinho, uma mulher perfeita e ideal. O único problema: ela não existe.', image: "https://m.media-amazon.com/images/M/MV5BNDdiNmZhMDYtM2MyOS00MWI2LTkxZDUtYzY0ZDNiN2ZjZWNhXkEyXkFqcGc@._V1_.jpg"},
          {id: '4', filme: 'Gêmeas (1999)', desc: 'Uma adaptação sombria do conto "As Gêmeas", de Nelson Rodrigues, em que duas irmãs gêmeas idênticas se apaixonam pelo mesmo homem, com consequências devastadoras e horríveis.', image: "https://upload.wikimedia.org/wikipedia/pt/2/26/G%C3%AAmeas-filme.jpg"},
          {id: '5', filme: 'Terra Estrangeira (1995)', desc: 'No início da década de 1990, o Brasil vivia uma era de incertezas em um país tomado pelo caos da era Collor. Sem perspectivas, Paco decide viajar para Portugal após a morte da mãe, levando uma misteriosa encomenda. Em Lisboa, ele conhece a brasileira Alex e seu namorado Miguel.', image: "https://upload.wikimedia.org/wikipedia/pt/d/db/Terra_Estrangeira.jpg"},
        ],  
      };

      this.filmeAssistido = this.filmeAssistido.bind(this);
      
    }

      filmeAssistido = (filme) => {
        Alert.alert( 
          "",
          `${filme} adicionado com sucesso à lista de filmes assistidos!`, 
          [{ text: "OK"}]
        );
      }

  render() {
    return(
      <View style={styles.container}>
      <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Fernanda_Torres-68482.jpg/800px-Fernanda_Torres-68482.jpg' }}
          style={styles.img}
        />

      <Card
          titulo="Fernanda Torres"
          descricao="Fernanda Pinheiro Torres (Rio de Janeiro, 15 de setembro de 1965) é uma atriz, escritora, cronista e roteirista brasileira. Filha dos atores Fernanda Montenegro e Fernando Torres, ela é reconhecida como uma das artistas mais influentes, versáteis e premiadas do Brasil. Com uma sólida carreira que abrange o teatro, o cinema, a televisão e a literatura, Torres tornou-se uma figura central na cultura brasileira contemporânea, destacando-se em papéis de produções dramáticas e cômicas"
        />


      <Text style={styles.texto}>Filmes</Text>

      <FlatList 
          data={this.state.lista_filmes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Filmes data={item} filmeAssistido={this.filmeAssistido} />}
        />
      
      </View>
    );
  }
}

export default App;

class Filmes extends Component {
  render() {
    return(
      <View style={styles.lista}>
      <View style={styles.topoLista}>
      <Image source={{ uri: this.props.data.image }} style={styles.imglista} />
      <View style={styles.containerLista}>
        <Text style={styles.filmeLista}>{this.props.data.filme}</Text>
        <Text style={styles.descLista}>{this.props.data.desc}</Text>
      </View>
      </View>
      <View style={styles.botaoLista}>
      <Button
        title="Marcar como assistido"
        color='#405725'
        onPress={() => this.props .filmeAssistido(this.props.data.filme)}
      />
    </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({

  container : {
    flex: 1,
    backgroundColor: '#677B5B'

  },

  texto: {
    color: 'white',
    fontFamily: 'NotoSerif_400Regular',
    fontSize: 30,
    marginBottom: 10,

  },

  card: {
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#2F1D14',
    elevation: 7,
    margin: 5

  },

  titulo: {
    color: 'white',
    fontFamily: 'NotoSerif_400Regular',
    fontSize: 30

  },

  descricao: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'NotoSerif_400Regular',

  },

  img: {
    margin: 5,
    height: 400,
    width: 370,
    borderRadius: 25,
    marginBottom: 0

  },

  containerLista: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',

  },

  topoLista: {
    flexDirection: 'row', 
    marginBottom: 10,
  },

  lista: {
    backgroundColor: '#2F1D14',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },

  imglista: {
    width: 90,
    height: 130,
    borderRadius: 6,
    marginRight: 12,
  },

  textoContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  filmeLista: {
    color: 'white',
    fontSize: 19,
    marginBottom: 8,
    fontFamily: 'NotoSerif_400Regular',
  },

  descLista: {
    color: '#E0E0E0',
    fontSize: 15,
    fontFamily: 'NotoSerif_400Regular',
    lineHeight: 20,
  },

  botaoLista: {
    alignSelf: 'flex-start', 
    width: '100%',
    maxWidth: 300,
  },

 
});
