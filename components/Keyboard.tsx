import React from "react";
import { View, StyleSheet } from "react-native";
import PianoKey from './PianoKey';

const whiteNotes = ["C4", "D4", "E4", "F4"];
const blackNotes = ["C#4", "D#4", "F#4", "G#4"];

export default function Keyboard() {
  return (
    <View style={styles.keyboardContainer}>
      <View style={styles.keyboard}>
        {whiteNotes.map((note, index) => (
          <View key={note} style={styles.keyContainer}>
            <PianoKey note={note} color="white" />
            {index < blackNotes.length && (
              <View style={styles.blackKeyContainer}>
                <PianoKey note={blackNotes[index]} color="black" />
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  keyboard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  keyContainer: {
    position: 'relative',
  },
  blackKeyContainer: {
    position: 'absolute',
    top: 0, 
    zIndex: 1,
    width: 40, 
    height: 120, 
    marginLeft: 35, 
  },
});
