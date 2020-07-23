import React from 'react';
import {Text, Image} from 'react-native';
import {Card} from 'react-native-card-stack-swiper';
import styles from '../styles';

export interface iActor {
  name: string;
  image: any;
}

interface SwipeCardProps {
  actor: iActor;
}

const SwipeCard = ({actor}: SwipeCardProps) => {
  return (
    <Card style={styles.card}>
      <Image
        resizeMode="cover"
        style={styles.cardImage}
        source={{uri: actor.image}}
      />
      <Text style={styles.label}>{actor.name}</Text>
    </Card>
  );
};

export default SwipeCard;
