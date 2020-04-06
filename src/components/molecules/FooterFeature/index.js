import React from 'react';
import {View, Text, Image} from 'react-native';

const FooterFeature = props => {
  return (
    // <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image style={{width: 26, height: 26}} source={props.img} />

      <Text
        style={{
          fontSize: 10,
          color: props.active ? '#43AB4A' : '#545454',
          marginTop: 4,
        }}>
        {props.title}
      </Text>
    </View>
    // </View>
  );
};

export default FooterFeature;
