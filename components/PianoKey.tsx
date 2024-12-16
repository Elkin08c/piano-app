import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Audio, AVPlaybackStatusSuccess } from "expo-av";

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
      const { sound } = await Audio.Sound.createAsync(soundMapping[note]);

      await sound.playAsync();

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
      <Text style={[styles.text, color === "white" ? styles.whiteText : styles.blackText]}>
        {note}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  key: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    elevation: 5,
  },
  whiteKey: {
    width: 60,
    height: 200,
    backgroundColor: "#ffffff",
    borderColor: "#d1d1d1", 
    borderWidth: 1,
    margin: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  blackKey: {
    width: 40,
    height: 140, 
    backgroundColor: "#333333",
    borderRadius: 5,
    position: "absolute",
    zIndex: 1,
    marginLeft: -20,
    marginRight: -20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  whiteText: {
    color: "#000000", 
  },
  blackText: {
    color: "#ffffff",
  },
});

export default PianoKey;
