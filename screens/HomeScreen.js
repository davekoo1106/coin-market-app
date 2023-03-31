import { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { eventData, getEventData } from "../data/event-data";
import { MyListItem } from "../components/MyListItem";
import EventDetailContainer from "../components/EventDetailContainer";

export default function HomeScreen({ navigation }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataResult, setDataResult] = useState(null);

  const fetchUri = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=aeccaa42-473d-47bf-b42e-303a3a7a02b2'

  useEffect(() => {
    fetch(fetchUri)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDataResult(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <SafeAreaView className="flex justify-center p-4 bg-white">
      {displayCoins(error, isLoaded, dataResult)}
    </SafeAreaView>
  );
}


function displayCoins(error, isLoaded, dataResult) {
  const renderItem = ({ item }) => {

      const value_num = Number(item.quote.USD.volume_change_24h);  
      const change_class = (value_num < 0 ) ? "text-red-500" : "text-green-500";

    return (
      <View className='flex flex-row justify-between'>
          <View className="p-5">
            <Text className="font-bold text-[15px]">{item.name}</Text>
            <Text className="text-gray-400 text-[13px]" >{item.symbol}</Text>
          </View>
          <View className="p-5 flex justify-end">
            <Text className="font-bold text-[14px] justify-end">${(item.quote.USD.price).toFixed(2)}</Text>
            <Text className={change_class}>{(item.quote.USD.volume_change_24h).toFixed(2)}%</Text>
          </View>
      </View>

    )
  }

  if (!isLoaded){ 
    return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
  }
  else if (error) {
    return (
      <View>
        <Text>There has been an error</Text>
      </View>
    );
  }
  else if (dataResult === null){
    return (
        <View>
          <Text>There are no results</Text>
        </View>
      );
  }

  else {
    return (
      <View>
            <View className="mb-3 mt-40 p-5">
                <Text className="text-gray-500 mb-1">Your Balance</Text>
                <Text className="text-3xl font-bold">$5,130.05</Text>
                <Text className="text-green-500 text-[15px] font-bold">+{(dataResult.data[0].quote.USD.percent_change_30d).toFixed(2)}%</Text>
            </View>
            <View>
                <Text className="text-2xl font-bold text-orange-500 p-5">Watchlist</Text>
                <View className="w-full h-full">
                    <FlatList
                      data={dataResult.data}
                      keyExtractor={(item) => item.id}
                      renderItem={renderItem}
                    />
                </View>
            </View>
      </View>
    );
  }
}
