import { View, Text, Button, Image } from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';

export default function PortfolioScreen ({ navigation }) {
    
    handleOnChangeText = (text) => {
        this.setState({
            searchText: text,
            spinnerVisibility: true,
        });

        this.setState({
            spinnerVisibility: false,
        });
    };

    // const { spinnerVisibility } = this.state;

        return (
            <View className="mt-8">
                <View>
                    <SearchBar 
                        placeholder='Search assets'
                        onChangeText={this.onChangeText}
                        // spinnerVisibility={spinnerVisibility}
                    />
                </View>

                <View className="m-8">
                    <Text className="text-2xl mt-5">Suggestions..</Text>
                    <View className="gap-y-6 mt-2 p-3">
                        <Text className="text-lg">Popular</Text>
                        <Text className="text-lg">Trending</Text>
                        <Text className="text-lg">New Events</Text>
                    </View>
                </View>
            </View>
        )
    }
