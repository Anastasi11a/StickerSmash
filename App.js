import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Button from './components/Button'
import ImageViewer from './components/ImageViewer'
import * as ImagePicker from 'expo-image-picker'
import CircleButton from './components/CircleButton'
import IconButton from './components/IconButton'
import EmojiPicker from './components/EmojiPicker'
import EmojiList from './components/EmojiList'
import EmojiSticker from './components/EmojiSticker'

const PlaceholderImage = require('./assets/images/background-image.png')

const App = () => {
    const [showAppOptions, setShowAppOptions] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [pickedEmoji, setPickedEmoji] = useState(null)

    const pickImgAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        })

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri)
            setShowAppOptions(true)
        } else {
            alert('You did not select any image.')
        }
    }

    const onReset = () => {
        setShowAppOptions(false)
    }

    const onAddSticker = () => {
        setIsModalVisible(true)
    }

    const onModalClose = () => {
        setIsModalVisible(false)
    }

    const onSaveImageAsync = async () => {}

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer 
                    placeholderImageSource={PlaceholderImage} 
                    selectedImage={selectedImage}    
                />
                {pickedEmoji && 
                    <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
                }
            </View>
                {showAppOptions ? (
                    <View style={styles.optionsContainer}>
                        <View style={styles.optionsRow}>
                            <IconButton icon='refresh' label='Reset' onPress={onReset} />
                            <CircleButton onPress={onAddSticker} />
                            <IconButton icon='save-alt' label='Save' onPress={onSaveImageAsync} />
                        </View>
                    </View> 
                ) : ( 
                    <View style={styles.footerContainer}>
                        <Button 
                            theme='primary' 
                            label='Choose a photo' 
                            onPress={pickImgAsync}
                        />
                        <Button 
                            label='Use this photo' 
                            onPress={() => setShowAppOptions(true)}
                        />
                    </View>
                )}
            <EmojiPicker
                isVisible={isModalVisible}
                onClose={onModalClose}>

                <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
            </EmojiPicker>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2f4f4f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    optionsContainer: {
        position: 'absolute',
        bottom: 80,
    },
    optionsRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    footerContainer: {
        flex: 1/3,
        alignItems: 'center',
    }
})

export default App