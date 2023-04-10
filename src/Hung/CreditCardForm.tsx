import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function CreditCardForm() {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');

  const handleCardNumberChange = (value: string) => {
    setCardNumber(value);
  };

  const handleCardNameChange = (value: string) => {
    setCardName(value);
  };

  const handleExpiryDateChange = (value: string) => {
    setExpiryDate(value);
  };

  const handleCvvChange = (value: string) => {
    setCvv(value);
  };

  const handleSubmit = () => {
    // handle form submission logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Card Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter card number"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={handleCardNumberChange}
      />

      <Text style={styles.label}>Card Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter card name"
        value={cardName}
        onChangeText={handleCardNameChange}
      />

      <Text style={styles.label}>Expiry Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="MM/YY"
        keyboardType="numeric"
        value={expiryDate}
        onChangeText={handleExpiryDateChange}
      />

      <Text style={styles.label}>CVV:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter CVV"
        keyboardType="numeric"
        value={cvv}
        onChangeText={handleCvvChange}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
