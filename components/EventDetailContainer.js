import React, { useState, useRef } from 'react'; 

import { View, Text, ScrollView, Image} from 'react-native'



export default function EventDetailContainer({ currCoin }) {


    const eventItems = currCoin.map((data, index) => {
        // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // let date_obj = new Date(event.datetime_utc);
        // let formatted_date = date_obj.toLocaleDateString("en-CA", options);

        return (
            <View key={index} className="basis-1/4 border-2">
                <Text className="text-xs">{data.name}</Text>
                <Text className="text-xs">{data.symbol}</Text>
            </View>
        )

    });

    // Event Description

    return (
            <ScrollView>
                {(currCoin.length > 0) ? eventItems : <Text>No Amenities Listed</Text>}
            </ScrollView>


    );


}