import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

const ImageButton = (props) => {
  const { title, image, onPress, justifyContent = 'flex-start' } = props

  return (
    <TouchableOpacity style={[styles.button, { justifyContent: justifyContent }]} onPress={onPress}>
      <Image style={styles.buttonImage} source={image} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    gap: 5,
    padding: 10,
    margin: 10,
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  },
  buttonImage: {
    width: 24,
    height: 24
  }
})

export default ImageButton
