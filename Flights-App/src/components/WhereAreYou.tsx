import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  RootStackParamList,
  WhereAreYouNavigationProp,
  WhereAreYouProp,
} from "../rutes/RootStackParamList";
import Icon from "react-native-vector-icons/MaterialIcons";
import data from "../data/countrys";
import AutoComplete from "react-native-autocomplete-input";

interface WhereAreYou {
  route: WhereAreYouProp;
  navigation: WhereAreYouNavigationProp;
}

const WhereAreYou: React.FC<WhereAreYou> = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.navigate('WhereWillYouBeFlyingTo',{from:from.from, fromIso3:from.fromIso3})
  };
  const handleCountryChange = () => {};
  interface City {
    city: string[];
    country: string;
    iso3: string;
  }
  const renderList = ({ item }: { item: City }) => {
    <View>
      <Text>{item.city}</Text>
    </View>;
  };

 
  const [modalVisible, setModalVisible] = React.useState(false);
  const [from, setFrom] = React.useState({
    from: "",
    fromIso3: "",
  });

  const handleSelectCity = (city: string, iso3: string) => {
    setModalVisible(false);
    setFrom({ from: city, fromIso3: iso3 });
  };
  const RenderList = (item: any) => {
    return (
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          {item.item.iso3}
        </Text>

        <View style={{ marginLeft: 5 }}>
          {item.item.cities.map((city: string) => {
            return (
              <TouchableOpacity
                style={{ padding: 4, borderBottomColor: "gray" }}
                key={city}
                onPress={() => handleSelectCity(city, item.item.iso3)}
              >
                <Text style={{ fontSize: 20 }}>{city}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };
 

  return (
    <View style={styles.mainview}>
      <View style={styles.icon}>
        <Icon
          style={styles.arrow}
          name="arrow-back-ios"
          size={30}
          color="rgb(92, 110, 248)"
          onPress={() => navigation.goBack()}
        ></Icon>
      </View>
      <View style={styles.textview}>
        <Text style={styles.textInfo}>Where are you now?</Text>
      </View>
      <View style={styles.inputView}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.input}>
            {
              from && <Text>{from.from + ", "}{from.fromIso3}</Text> 
            }
            {
              from.from == '' && <Text>Select location</Text>
            }
            
          </View>
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
          animationType={'slide'}


        > 

        <View style={{ flex: 1,  justifyContent:"flex-end",}}>
          <View style={{ backgroundColor: 'white', padding: 20, alignSelf:"center", width:"100%", height:"55%"}}>
              <FlatList
                data={data}
                keyExtractor={item => item.iso3}
                renderItem={({ item }) => <RenderList item={item} />}

              >

              </FlatList>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <TouchableOpacity style={styles.btnStyle} onPress={handleNavigate}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },

  arrow: {
    marginLeft: 14,
  },
  btnStyle: {
    alignSelf: "center",
    backgroundColor: "rgb(92, 110, 248)",
    borderRadius: 10,
    marginBottom: 50,
    marginTop: 10,
    padding: 12,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
    shadowColor: "rgb(92, 110, 248)",
    width: "92%",
  },

  btnText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textInfo: {
    fontWeight: "bold",
    fontSize: 50,
    justifyContent: "flex-start",
    marginLeft: 14,
  },
  textview: {
    width: "100%",
    justifyContent: "flex-start",
    flex: 2,
  },
  icon: {
    flex: 1,
    marginTop: 50,
  },
  btnView: {
    flex: 1,
  },
  inputView: {
    flex: 3,
    width: "100%",
    marginLeft: 14,
  },
  input: {
    width: "94%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
});
export default WhereAreYou;
