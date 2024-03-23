import React from 'react';
import { View, TextInput, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

type CustomTextInputProps = {
  title?: string;
  placeholder?: string;
  error?: string;
  description?: string;
  errorImageSource: ImageSourcePropType;
};

const CustomTextInput: React.FC<CustomTextInputProps> = ({ title, placeholder, error, description, errorImageSource }) => {
return (
    <View style={styles.container}>
        {title && <Text style={styles.title}>{title}</Text>}
        <View style={[styles.inputContainer, error ? styles.inputError : undefined]}>
            <TextInput 
                placeholder={placeholder}
                style={styles.input}
            />
            {error && <Image source={errorImageSource} style={styles.errorImage} />}
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
        {description && <Text style={styles.description}>{description}</Text>}
    </View>
);
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    color: '#D32F2F',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D32F2F',
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  inputError: {
    borderWidth: 1.5,
  },
  errorImage: {
    width: 20,
    height: 20,
    tintColor: '#D32F2F',
  },
  errorText: {
    color: '#D32F2F',
    fontSize: 12,
    marginTop: 5,
  },
  description: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default CustomTextInput;