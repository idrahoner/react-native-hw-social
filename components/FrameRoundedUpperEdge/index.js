import { View, StyleSheet } from 'react-native';

export default function FrameRoundedUpperEdge({ style, children }) {
  return <View style={{ ...styles.container, style }}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
