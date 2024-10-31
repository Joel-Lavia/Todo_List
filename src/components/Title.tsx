import {Text, View} from 'react-native';
import styles from '../styles/style';

function Title(): JSX.Element {
  const title: string = 'TODO LIST';
  return (
    <View>
      <Text style={styles.title} >{title}</Text>
    </View>
  );
}
export default Title;
