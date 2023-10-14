import { StyleSheet, View } from 'react-native';

const Line = () => {
  return (
    <View style={styles.line}></View>
  )
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
  },
});

export default Line;