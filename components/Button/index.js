import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

function Button({iconName, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>
  )
}

Button.PropTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Button;
