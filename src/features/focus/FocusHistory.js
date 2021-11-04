import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { fontSizes, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear([]);
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={{ fontSize: fontSizes.lg, color: 'white' }}>
              Things we've focused on
            </Text>
            <FlatList
              style={{ width: '100%', height: '100%', paddingTop: 16 }}
              contentContainerStyle={{ alignItems: 'center' }}
              data={focusHistory}
              renderItem={({ item, index }) => (
                <Text style={styles.historyItem(item.status)}>
                  {item.subject}
                </Text>
              )}
            />
          </>
        )}
      </SafeAreaView>
      <View style={styles.clearContainer}>
        <RoundedButton size={75} title="Clear" onPress={() => onClear()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSizes.md,
  }),
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});
