import React from "react";
import { 
  View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, Platform 
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";

const FeedScreen = ({ navigation }) => {
  const stories = [
    { id: "1", name: "Tú", image: require('../../../../assets/img/cinco.png'), isUser: true },
    { id: "2", name: "Amigo 1", image: require('../../../../assets/img/cinco.png')},
    { id: "3", name: "Amigo 2", image: require('../../../../assets/img/cinco.png') },
    { id: "4", name: "Amigo 3", image: require('../../../../assets/img/cinco.png') },
  ];

  const posts = [
    { id: "1", name: "Karen Ipsum", time: "2 h", text: "Disfrutando el día!", image: require('../../../../assets/img/cinco.png') },
    { id: "2", name: "John Doe", time: "5 h", text: "React Native es increíble!", image: require('../../../../assets/img/cinco.png') },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>facebook</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Icon name="search" size={22} color="#000" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="comment" size={22} color="#000" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="bell" size={22} color="#000" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* NavBar */}
        <View style={styles.navBar}>
          <TouchableOpacity style={[styles.navButton, styles.activeNavButton]}>
            <Icon name="home" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ProfileScreenStack')}>
            <Icon name="user" size={22} color="#000" />
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

        {/* Caja de estado */}
        <View style={styles.statusBox}>
          <Image source={require('../../../../assets/img/cinco.png')} style={styles.profilePic} />
          <TextInput style={styles.input} placeholder="¿Qué estás pensando?" />
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Historias */}
        <FlatList
          data={stories}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.storyContainer, item.isUser && styles.createStory]}>
              <Image source={item.image} style={styles.storyImage} />
              {item.isUser ? (
                <TouchableOpacity style={styles.addStoryButton}>
                  <Icon name="plus" size={20} color="#fff" />
                </TouchableOpacity>
              ) : (
                <Text style={styles.storyText}>{item.name}</Text>
              )}
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storiesContainer}
        />

        {/* Divider */}
        <View style={styles.divider} />

        {/* Lista de publicaciones */}
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.post}>
              <View style={styles.postHeaderContainer}>
                <Image source={require('../../../../assets/img/cinco.png')} style={styles.profilePic} />
                <View>
                  <Text style={styles.postHeader}>{item.name}</Text>
                  <Text style={styles.postTime}>{item.time}</Text>
                </View>
              </View>
              <Text style={styles.postText}>{item.text}</Text>
              <Image source={item.image} style={styles.postImage} />
              
              {/* Botones de interacción */}
              <View style={styles.interactionButtons}>
                <TouchableOpacity style={styles.interactionButton}>
                  <Icon name="thumbs-up" size={20} color="#1877f2" />
                  <Text style={styles.interactionText}>Me gusta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.interactionButton}>
                  <Icon name="comment" size={20} color="#1877f2" />
                  <Text style={styles.interactionText}>Comentario</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.interactionButton}>
                  <Icon name="share" size={20} color="#1877f2" />
                  <Text style={styles.interactionText}>Compartir</Text>
                </TouchableOpacity>
              </View>

              {/* Divider */}
              <View style={styles.postDivider} />

            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, backgroundColor: "#fff" },

  // Header
  header: { flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "#fff", alignItems: "center" },
  logo: { fontSize: 24, fontWeight: "bold", color: "#1877f2" },
  headerIcons: { flexDirection: "row" },
  icon: { marginLeft: 15 },

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
    backgroundColor: "#1877f2", // Fondo azul
    borderRadius: 50,
    padding: 10
  },

  statusBox: { flexDirection: "row", backgroundColor: "#fff", padding: 10, alignItems: "center" },
  profilePic: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  input: { backgroundColor: "#eee", padding: 10, borderRadius: 20, flex: 1 },

  divider: { height: 10, backgroundColor: "#f0f0f0", marginVertical: 5 },

  storiesContainer: { paddingVertical: 10 },
  storyContainer: { width: 100, height: 180, borderRadius: 15, marginBottom: 180, marginHorizontal: 5, overflow: "hidden", backgroundColor: "#ccc" },
  createStory: { alignItems: "center", justifyContent: "flex-end", paddingBottom: 10 },
  storyImage: { width: "100%", height: "100%", borderRadius: 15 },
  addStoryButton: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: [{ translateX: -12 }],
    backgroundColor: "#1877f2",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  storyText: {
    position: "absolute",
    bottom: 5,
    left: 5,
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },

  post: { backgroundColor: "#fff", padding: 10, marginVertical: 5, borderRadius: 10 },
  postHeaderContainer: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  postHeader: { fontWeight: "bold", fontSize: 16 },
  postTime: { fontSize: 12, color: "gray" },
  postText: { marginVertical: 5 },
  postImage: { width: "100%", height: 200, marginTop: 10, borderRadius: 10 },
  postDivider: { height: 1, backgroundColor: "#ccc", marginTop: 10 },

  // Nueva sección de botones de interacción
  interactionButtons: { 
    flexDirection: "row", 
    justifyContent: "space-around", 
    paddingVertical: 10 
  },
  interactionButton: { 
    flexDirection: "row", 
    alignItems: "center" 
  },
  interactionText: { 
    marginLeft: 5, 
    fontSize: 14, 
    color: "#1877f2" 
  },
});

export default FeedScreen;
