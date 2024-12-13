import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Audio, AVPlaybackStatusSuccess } from "expo-av";

// Mapeo explícito de las notas a sus archivos de sonido
const soundMapping: { [key: string]: any } = {
  C4: require("../assets/sounds/C4.mp3"),
  D4: require("../assets/sounds/D4.mp3"),
  E4: require("../assets/sounds/E4.mp3"),
  F4: require("../assets/sounds/F4.mp3"),
  "C#4": require("../assets/sounds/C4.mp3"),
  "D#4": require("../assets/sounds/D4.mp3"),
  "F#4": require("../assets/sounds/F4.mp3"),
  "G#4": require("../assets/sounds/G4.mp3"),
};

interface PianoKeyProps {
  note: string;
  color: "white" | "black";
}

const PianoKey: React.FC<PianoKeyProps> = ({ note, color }) => {
  const playSound = async () => {
    try {
      // Usar el mapeo para obtener el archivo de sonido correspondiente
      const { sound } = await Audio.Sound.createAsync(soundMapping[note]);

      await sound.playAsync();

      // Liberar recursos después de que el sonido termine
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status && (status as AVPlaybackStatusSuccess).didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.error("Error al reproducir el sonido:", error);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.key, color === "white" ? styles.whiteKey : styles.blackKey]}
      onPress={playSound}
    >
      <Text style={[styles.text, color === "white" ? styles.blackText : styles.whiteText]}>{note}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  key: {
    width: 60,
    height: 200,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  whiteKey: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
  },
  blackKey: {
    backgroundColor: "#000",
    borderColor: "#000",
    borderWidth: 1,
    height: 120,
    width: 40,
    marginLeft: -20,
    marginRight: -20,
    zIndex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  blackText: {
    color: "#000",
  },
  whiteText: {
    color: "#fff",
  },
});

export default PianoKey;