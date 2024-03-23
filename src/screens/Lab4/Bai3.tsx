import Slider from "@react-native-community/slider";
import React, { FC, useEffect, useState } from "react";
import { Text, TextInput, View, Image, StyleSheet } from "react-native";
import TrackPlayer, { Capability } from "react-native-track-player";


const Lab4Bai3: FC = () => {

    // const track = [
    //     {
    //         id: 1,
    //         url: require('../Lab4/tracks/song1.mp3'),
    //         title: 'Dân Chơi Sao Phải Khóc',
    //         image: require(''),
    //         artist: 'Andree Right Hand - RHYDER - WOKEUP',
    //     },
    //     {
    //         id: 2,
    //         url: require('../Lab4/tracks/song3.mp3'),
    //         title: 'CHÚNG TA CỦA TƯƠNG LAI',
    //         image: require(''),
    //         artist: 'SƠN TÙNG M-TP',
    //     },
    //     {
    //         id: 3,
    //         url: require('../Lab4/tracks/song2.mp3'),
    //         title: 'Ngày Ấy (Yesterday)',
    //         image: require(''),
    //         artist: 'Em Ellata',
    //     },
    // ]

    // const setUpplayer = async () => {
    //     await TrackPlayer.setupPlayer();
    //     await TrackPlayer.add(track);
    //     await TrackPlayer.updateOptions({
    //         stopWithApp: true,
    //         capabilities: [
    //             Capability.Play,
    //             Capability.Pause,
    //             Capability.SkipToNext,
    //             Capability.SkipToPrevious,
    //             Capability.Stop,
    //         ],
    //     }); //để cập nhật các option của player
    // }


    // const onTogglePlayTrack = async () => { //dùng để play hoặc pause track
    //     if (playbackState.state === State.Playing) {
    //         await TrackPlayer.pause();
    //     } else {
    //         await TrackPlayer.play();
    //     }
    // };

    // const onSeekTo = async (toTime: number) => { //dùng để tua track
    //     await TrackPlayer.seekTo(toTime);
    //     setCurrentPosition(toTime);
    // };

    // const onSkipToNext = async () => { //dùng để chuyển bài hát tiếp theo
    //     await TrackPlayer.skipToNext();
    // };

    // const onSkipToPrevious = async () => { //dùng để chuyển bài hát trước đó
    //     await TrackPlayer.skipToPrevious();
    // };


    return (
        <View>
            <View>
                <Image />
            </View>
            <View>
                <Text>Song title</Text>
                <Text>Song artist</Text>
            </View>
            <View>
                <Slider
                    style={{ width: 200, height: 40 }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});
export default Lab4Bai3;
