import React, { ReactNode } from "react";
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import { create } from "react-test-renderer";

interface HeaderProps {
  title?: string;
  iconLeft?: ImageSourcePropType;
  iconRight?: ImageSourcePropType;
  onPressRight?: () => void;
  onPressLeft?: () => void;
  leftComponent?: ReactNode;
  centerComponent?: ReactNode;
  rightComponent?: ReactNode;
  bgColor?: string;
  iconLeftColor?: string;
  iconRightColor?: string;
  leftIconSize?: number;
  rightIconSize?: number;
  numberOfLines?: number;
}

const Header: React.FC<HeaderProps> = ({
  title,
  iconLeft,
  iconRight,
  onPressRight,
  onPressLeft,
  leftComponent,
  centerComponent,
  rightComponent,
  bgColor,
  iconLeftColor,
  iconRightColor,
  leftIconSize,
  rightIconSize,
  numberOfLines,
}) => {
  const renderLeft = () => (
    leftComponent || (
      <View style={[styles.containerLeft]}>
        {iconLeft ? (
          <Pressable hitSlop={15} onPress={onPressLeft}>
            <Image source={iconLeft} style={{ tintColor: iconLeftColor }} />
          </Pressable>
        ) : (
          <View style={{ width: leftIconSize, height: leftIconSize }} />
        )}
      </View>
    )
  );

  const renderCenter = () => (
    centerComponent || (
      <View style={styles.containerCenter}>
        <Text style={styles.title} numberOfLines={numberOfLines}>
          {title}
        </Text>
      </View>
    )
  );

  const renderRight = () => (
    rightComponent || (
      <View style={[styles.containerRight]}>
        {iconRight ? (
          <Pressable hitSlop={15} onPress={onPressRight}>
            <Image source={iconRight} style={{ tintColor: iconRightColor }} />
          </Pressable>
        ) : (
          <View style={{ width: rightIconSize, height: rightIconSize }} />
        )}
      </View>
    )
  );

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  containerLeft: {
    marginRight: 10,
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  containerRight: {
    marginLeft: 10,
  },
});

export default Header;
