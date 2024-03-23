import React from "react";
import { Text, View, StyleSheet, ScrollView, TextStyle } from "react-native";

interface EventProps {
  title: string;
  content: any;
  titleStyle?: TextStyle;
  contentStyle?: TextStyle;
  contentComponent?: React.ReactNode;
  eventComponent?: React.ReactNode;
}

interface SectionProps {
  title: string;
  events: EventProps[];
  titleStyle?: TextStyle;
}

const SectionView: React.FC<{ eventInfo: SectionProps[] }> = ({ eventInfo }) => {

  const renderChild = (data: EventProps, index: number) => {
    const { title, content, titleStyle, contentStyle, contentComponent, eventComponent } = data;
    return (
      eventComponent || (
        <View key={index.toString()} style={styles.containerChild}>
          <Text style={[styles.titleChild, titleStyle]}>{title}</Text>
          {contentComponent || <Text style={[styles.containerChild, contentStyle]}>{content}</Text>}
        </View>
      )
    );
  };

  const renderSection = (data: SectionProps, index: number) => {
    const { title, events, titleStyle } = data;
    return (
      <View key={index.toString()} style={[styles.section]}>
        <Text style={[styles.titleSection, titleStyle]}>{title}</Text>
        <View style={[styles.sectionBody]}>
          {events?.map(renderChild)}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {eventInfo?.map?.(renderSection)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  section: {
    marginVertical: 10,
  },
  titleSection: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionBody: {
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    elevation: 5,
  },
  containerChild: {
    marginVertical: 5,
    color: '#6699FF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  titleChild: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SectionView;
