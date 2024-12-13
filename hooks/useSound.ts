import * as Tone from 'tone';

export default function useSound(note: string) {
    const playSound = async () => {
        await Tone.start(); // Asegúrate de que Tone.js esté iniciado
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(note, '8n');
    };
    return playSound;
}