import React from "react";
import { View, StyleSheet } from "react-native";
import PianoKey from './PianoKey';

const whiteNotes = ["C4", "D4", "E4", "F4"];
const blackNotes = ["C#4", "D#4", "F#4", "G#4"];

export default function Keyboard() {
  return (
    <View style={styles.keyboard}>
      {whiteNotes.map((note, index) => (
        <View key={note} style={styles.keyContainer}>
          <PianoKey note={note} color="white" />
          {blackNotes[index] && (
            <View style={styles.blackKeyContainer}>
              <PianoKey note={blackNotes[index]} color="black" />
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  keyContainer: {
    position: 'relative',
  },
  blackKeyContainer: {
    position: 'absolute',
    left: 45,
    zIndex: 1,
  },
});

