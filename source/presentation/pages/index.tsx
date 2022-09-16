import { Box } from "native-base";
import { Text, View, ScrollView } from "react-native";
import tw from "twrnc";
import { NavigationBar } from "../components/NavigationBar";
const Home = () => {
  return (
    <View style={tw`py-4 grow`}>
      <ScrollView style={tw`bg-blue-500 p-4 mb-4`}>
        <View style={tw`flex-row`}>
          <Box
            width="50%"
            bg="#fff"
            padding={4}
            alignItems="center"
            justifyContent="center"
          >
            <Text>Card 1</Text>
          </Box>
          <Box
            width="50%"
            bg="#fff"
            padding={4}
            alignItems="center"
            justifyContent="center"
          >
            <Text>Card 2</Text>
          </Box>
        </View>
      </ScrollView>
      <NavigationBar />
    </View>
  );
};

export default Home;
