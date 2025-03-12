import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("profile"); // Controlamos la pestaña activa

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* NavBar */}
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("FeedScreen")}>
            <Icon name="home" size={22} color={activeTab === "home" ? "#1877f2" : "#000"} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navButton, activeTab === "profile" && styles.activeNavButton]} onPress={() => setActiveTab("profile")}>
            <Icon name="user" size={22} color={activeTab === "profile" ? "#1877f2" : "#000"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Notifications')}>
            <Icon name="bell" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Friends')}>
            <Icon name="users" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Settings')}>
            <Icon name="cog" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <View style={styles.coverPhoto} />
          <View style={styles.profileImageWrapper}>
            <Image source={require('../../../../assets/img/cinco.png')} style={styles.profileImage} />
            <TouchableOpacity style={styles.cameraIcon}>
              <Icon name="camera" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Lorem Ipsum</Text>
          <Text style={styles.bio}>Explorador del mundo digital | Amante de la tecnología y el buen café ☕</Text>

          {/* Profile details con el nuevo formato */}
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Icon name="birthday-cake" size={18} color="#8e8e8e" />
              <Text style={styles.detailText}>01/01/1990</Text>
            </View>
            <View style={styles.detailItem}>
              <Icon name="map-marker" size={18} color="#8e8e8e" />
              <Text style={styles.detailText}>New York, USA</Text>
            </View>
            <View style={styles.detailItem}>
              <Icon name="briefcase" size={18} color="#8e8e8e" />
              <Text style={styles.detailText}>Tech Developer</Text>
            </View>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.addStoryButton}>
              <Text style={styles.addStoryText}>+ Add to Story</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.moreText}>...</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Edit Public Details Button */}
        <TouchableOpacity style={styles.editDetailsButton}>
          <Text style={styles.editDetailsText}>Edit Public Details</Text>
        </TouchableOpacity>
                <View style={styles.divider} />
        
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, padding: 10 },

  // NavBar
  navBar: { 
    flexDirection: "row", 
    justifyContent: "space-around", 
    paddingVertical: 10, 
    backgroundColor: "#fff" 
  },
  navButton: { 
    padding: 10, 
    alignItems: "center",
  },
  activeNavButton: {
    borderBottomWidth: 3,
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10
  },

  // Profile Info
  profileInfo: { alignItems: "center", marginBottom: 20 },
  coverPhoto: { width: "100%", height: 150, backgroundColor: "#ccc", marginBottom: -50 },
  profileImageWrapper: { position: "relative" },
  profileImage: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: "#fff" },
  cameraIcon: { position: "absolute", bottom: 0, right: 0, backgroundColor: "#000", borderRadius: 12, padding: 4 },

  name: { fontSize: 22, fontWeight: "bold", marginTop: 10 },
  bio: { fontSize: 14, color: "#666", textAlign: "center", marginVertical: 10 },

  // Profile details con nuevo formato
  detailsContainer: {
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5, // Espaciado entre elementos
  },
  detailText: {
    color: "#8e8e8e",
    fontSize: 14,
    marginLeft: 10, // Espaciado entre el icono y el texto
  },

  // Buttons
  buttonRow: { flexDirection: "row", justifyContent: "center", gap: 10 },
  addStoryButton: { backgroundColor: "#1877f2", padding: 10, borderRadius: 10, width: "60%", alignItems: "center" },
  addStoryText: { color: "#fff", fontSize: 16 },

  moreButton: { backgroundColor: "#f1f1f1", padding: 10, borderRadius: 10, width: "20%", alignItems: "center" },
  moreText: { color: "#000", fontSize: 16 },

  editDetailsButton: { backgroundColor: "#1877f2", padding: 10, borderRadius: 20, marginTop: 20, width: "90%", alignSelf: "center" },
  editDetailsText: { color: "#fff", textAlign: "center", fontSize: 16 },
});

export default ProfileScreen;
