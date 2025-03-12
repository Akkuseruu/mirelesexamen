import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import logoFacebook from '../../../../assets/img/Facebook.png';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("FeedScreen"); 
    }, 5000);
  }, []);
  
  return (
    <View style={styles.container}>
      <Image
        source={logoFacebook}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});

export default SplashScreen;
