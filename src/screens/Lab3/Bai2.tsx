import React, { memo } from "react";
import { StyleSheet, View, FlatList, ViewToken } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type ListItemProps = {
    item: any,
    viewableItems: Animated.SharedValue<ViewToken[]>
}

const ListItem: React.FC<ListItemProps> = memo(({ item, viewableItems }) => {
    const rStyles = useAnimatedStyle(() => {
        const isVisible = Boolean(
            viewableItems.value
                .filter((item) => item.isViewable)
                .find((viewableItems) => viewableItems.item.id === item.id)
        );

        return {
            opacity: withTiming(isVisible ? 1 : 0),
            transform: [
                {
                    scale: withTiming(isVisible ? 1 : 0.6),
                },
            ],
        };
    });

    return (
        <Animated.View style={[styles.body, rStyles]} />
    );
});

const Lab3Bai2: React.FC = () => {
    const viewableItems = useSharedValue<ViewToken[]>([]);

    const data = Array.from({ length: 30 }).map((_, index) => ({
        id: String(index),
    }));

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => <ListItem item={item} viewableItems={viewableItems} />}
                onViewableItemsChanged={({ viewableItems: vItems }) => {
                    viewableItems.value = vItems;
                }}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    body: {
        width: 350,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        marginVertical: 10,
    },
});

export default Lab3Bai2;
