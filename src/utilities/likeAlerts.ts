import {iActor} from './../components/SwipingCards/components/SwipeCard';
import {Alert} from 'react-native';

export const like = (actor: iActor) =>
  Alert.alert(
    'Liked!',
    `You Liked: ${actor.name}`,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );

export const dislike = (actor: iActor) =>
  Alert.alert(
    'Disliked',
    `You Disliked: ${actor.name}`,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );
