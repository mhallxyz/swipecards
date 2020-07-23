import React from 'react';
import CardStack from 'react-native-card-stack-swiper';
import styles from './styles';
import SwipeCard from './components/SwipeCard';
import useActors from '../../hooks/useActors';
import {like, dislike} from '../../utilities/likeAlerts';

const SwipingCards = () => {
  const [actors] = useActors();

  const mapCards = () => {
    return actors.map((actor) => <SwipeCard key={actor.name} actor={actor} />);
  };
  return (
    <CardStack
      onSwipedRight={(item) => like(actors[item])}
      onSwipedLeft={(item) => dislike(actors[item])}
      style={styles.content}>
      {mapCards()}
    </CardStack>
  );
};

export default SwipingCards;
