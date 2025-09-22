import { useState } from 'react'
import { Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'

const PhotoButton = (props) => {
  const photo = props.photo
  const closeImage = require('../../assets/images/close.svg')

  const [showModal, setShowModal] = useState(false)

  const handleImageClick = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <TouchableOpacity style={styles.photoContainer} onPress={() => handleImageClick(photo)}>
      <Image style={styles.photo} source={{ uri: photo.url }} />
      <Modal
        animationType="fade"
        visible={showModal}
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButtonContainer} onPress={handleCloseModal}>
              <Image style={styles.closeButton} source={closeImage} />
            </TouchableOpacity>
            <Image style={styles.photoModal} source={{ uri: photo.url }} />
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.13)'
  },
  modalContent: {
    padding: 10,
    backgroundColor: '#fff',
    gap: 10
  },
  closeButtonContainer: {
    alignSelf: 'flex-end'
  },
  closeButton: {
    width: 24,
    height: 24
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 5
  },
  photoModal: {
    width: 200,
    height: 300
  }
})

export default PhotoButton
