import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const EmojiPicker = ({ isVisible, children, onClose }) => {
    return (
        <Modal 
            animationType='slide'
            transparent={true}
            visible={isVisible}> 
            
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name='close' color='#f4a460' size={22} />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )
}

export default EmojiPicker

const styles = StyleSheet.create({
    modalContent: {
        height: '25%',
        width: '100%',
        backgroundColor: '#2f4f4f',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '16%',
        backgroundColor: '#778899',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 16,
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingVertical: 20,
    },
})
  