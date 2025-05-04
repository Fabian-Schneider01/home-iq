import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme'; // ⬅️ Add this

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const sceneBackgroundColor = isDark
    ? '#1c1f21'
    : 'hsla(207, 15%, 94%, 1)';

  return (
    <View style={[styles.background, { backgroundColor: sceneBackgroundColor }]}>
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome</ThemedText>
          <HelloWave />
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            This is your Home screen. Start building your app here!
          </ThemedText>
        </ThemedView>

        <Image
          source={require('@/assets/images/react-logo.png')}
          style={styles.reactLogo}
          contentFit="contain"
          transition={1000}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 24,
  },
  reactLogo: {
    height: 178,
    width: 290,
    alignSelf: 'center',
    marginTop: 24,
  },
});
