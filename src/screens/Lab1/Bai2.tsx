import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, Button, SafeAreaView } from "react-native";
import { eventInfo } from "../../data/eventInfo";
import SectionView from "../../components/SectionView";

const Lab1Bai2 = () => {

    return (
        <ScrollView>
            <SectionView
                eventInfo={eventInfo}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default Lab1Bai2;
