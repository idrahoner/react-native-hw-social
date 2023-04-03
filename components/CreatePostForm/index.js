import { useRef } from 'react';
import { StyleSheet, View, TextInput, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function CreatePostForm({
  titleValue,
  onChangeTitle,
  positionValue,
  onChangePosition,
}) {
  const positionField = useRef(null);

  return (
    <View style={styles.imageDataForm}>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ ...styles.inputField, fontFamily: 'Roboto-medium' }}
          placeholder="Title"
          placeholderTextColor="#E8E8E8"
          value={titleValue}
          onChangeText={onChangeTitle}
          onSubmitEditing={() => {
            positionField.current.focus();
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <AntDesign name="enviromento" size={24} color="#E8E8E8" />
        <TextInput
          style={{ ...styles.inputField, fontFamily: 'Roboto-regular' }}
          placeholder="Location"
          placeholderTextColor="#E8E8E8"
          value={positionValue}
          onChangeText={onChangePosition}
          ref={positionField}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageDataForm: { gap: 16 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  inputField: { width: '100%', height: '100%', fontSize: 16, color: '#212121' },
});
