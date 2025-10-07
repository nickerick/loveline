import { Colors } from '@/src/constants/Colors';
import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

type StyledButtonProps = {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function StyledButton({
  title,
  onPress,
  style,
  textStyle,
}: StyledButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.custom.accent2,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
