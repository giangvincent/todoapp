import { Text, View } from 'react-native';
import { styles } from './Style';

export default function () {

    return (
        <View style={styles.header}>
          {/* form */}
          <Text>This is header</Text>
        </View>
    );
  }