import React, { FC, useState } from "react";
import { Button, StyleSheet, Text, View, Image, Alert } from "react-native";
import { launchCamera, OptionsCommon, CameraOptions,ImageLibraryOptions, ImagePickerResponse, launchImageLibrary } from "react-native-image-picker";

const commonOptions: OptionsCommon = {
    mediaType: 'photo',
    maxWidth: 500,
    maxHeight: 500,
};

const cameraOptions: CameraOptions = {
    cameraType: 'front',
    saveToPhotos: true,
    ...commonOptions,
};

const libraryOptions: ImageLibraryOptions = {
    selectionLimit: 10,
    ...commonOptions,
};

const Lab4Bai1_2: FC = () => {
    const [images, setImages] = useState<ImagePickerResponse['assets']>([]);
    
    const onOpenCamera = async () => {
        try {
            const response: ImagePickerResponse = await launchCamera(cameraOptions);
            if (response?.assets) {
                setImages(response.assets);
            } else {
                Alert.alert('Thông báo', 'Bạn chưa chọn ảnh nào');
            }
        } catch (error) {
            console.error('Error launching camera:', error);
        }
    };

    const onOpenLibrary = async () => {
        try {
            const response: ImagePickerResponse = await launchImageLibrary(libraryOptions);
            if (response?.assets) {
                setImages(response.assets);
            } else {
                Alert.alert('Thông báo', 'Bạn chưa chọn ảnh nào');
            }
        } catch (error) {
            console.error('Error launching camera:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: images?.[0]?.uri || 'https://webstockreview.net/images/clipart-woman-cellphone-19.png' }} />
            <Button title="Chụp ảnh" onPress={onOpenCamera} />
            <Button title="Chọn ảnh từ thư viện" onPress={onOpenLibrary} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        margin: 10,
    },
});

export default Lab4Bai1_2;
