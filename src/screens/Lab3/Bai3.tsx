import React, { memo } from "react";
import { StyleSheet, View, FlatList, ViewToken, Text, Image } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, interpolate, Extrapolate } from "react-native-reanimated";

type ListItemProps = {
    item: any,
    viewableItems: Animated.SharedValue<ViewToken[]>
}

const ListItem: React.FC<ListItemProps> = memo(({ item, viewableItems }) => {
    return (
        <View style={[styles.body]} />
    );
});

const Lab3Bai3: React.FC = () => {
    const viewableItems = useSharedValue<ViewToken[]>([]);
    const scrollY = useSharedValue(0);

    const data = Array.from({ length: 30 }).map((_, index) => ({
        id: String(index),
    }));

    const headerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: interpolate(scrollY.value, [0, 100], [1, 0.5], Extrapolate.CLAMP),
                },
            ],
            opacity: interpolate(scrollY.value, [0, 100], [1, 0], Extrapolate.CLAMP),
            height: interpolate(scrollY.value, [0, 100], [200, 50], Extrapolate.CLAMP), // Điều chỉnh giá trị cao
        };
    });

    return (
        <View style={styles.container}>
            <View style={[styles.header]}>
                <Text style={styles.name}>Nguyễn Hùng Vĩ</Text>
                <Animated.View style={[styles.headerContent, headerStyle]}>
                    <Image
                        resizeMode='center'
                        style={[{ width: 100, height: 100}]}
                        source={{ uri: 'https://webstockreview.net/images/clipart-woman-cellphone-19.png' }} />
                    <Text style={styles.title}>Chào mừng bạn đến với ứng dụng của chúng tôi</Text>
                </Animated.View>
            </View>
            <View style={styles.flatlist}>
                <Text style={styles.name}>Popular Quizes</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => <ListItem item={item} viewableItems={viewableItems} />}
                    onViewableItemsChanged={({ viewableItems: vItems }) => {
                        viewableItems.value = vItems;
                    }}
                    onScroll={e => {
                        scrollY.value = e.nativeEvent.contentOffset.y;
                    }}
                    scrollEventThrottle={16}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'green',
        padding: 10,
    },
    headerContent: {
        alignItems: 'center',
    },
    flatlist: {
        flex: 1,
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 10,
    },
    body: {
        width: 350,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        marginVertical: 10,
    },
});

export default Lab3Bai3;
