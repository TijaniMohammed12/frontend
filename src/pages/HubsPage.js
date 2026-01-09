import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { getHubs, joinHub } from "../services/api";

export default function Hubs({ token }) {
  const [hubs, setHubs] = useState([]);

  const fetchHubs = async () => {
    try {
      const data = await getHubs(token);
      setHubs(data.hubs);
    } catch (error) {
      console.log("Fetch hubs error:", error);
    }
  };

  useEffect(() => {
    fetchHubs();
  }, []);

  const handleJoin = async (hubId) => {
    try {
      await joinHub(hubId, token);
      alert("Joined hub successfully!");
    } catch (error) {
      console.log("Join hub error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Hubs</Text>
      <FlatList
        data={hubs}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.hubCard} onPress={() => handleJoin(item._id)}>
            <Text style={styles.hubName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  hubCard: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },
  hubName: { fontSize: 18, fontWeight: "600" },
});
