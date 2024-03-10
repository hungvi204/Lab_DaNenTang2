import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

interface WrapInputProps {
  title?: string;
  error?: string;
  description?: string;
}

const WrapInput: React.FC<WrapInputProps> = ({ title, error, description, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      {title && <Text style={{ fontWeight: 'bold' }}>{title}</Text>}
      <TextInput
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          {
            borderWidth: 1,
            borderColor: isFocused ? '#000' : '#ccc',
            padding: 10,
            borderRadius: 5,
          },
          
        ]}
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {description && <Text style={{ color: '#ccc' }}>{description}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({

})

export default WrapInput;
