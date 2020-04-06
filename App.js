/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import GopayFeature from './src/components/molecules/GopayFeature/index';
import MainFeature from './src/components/molecules/MainFeature/index';
import SearchFeature from './src/components/molecules/SearchFeature/index';
import FooterFeature from './src/components/molecules/FooterFeature/index';
import GoNews from './src/components/molecules/GoNews/index';
import GoInfo from './src/components/molecules/GoInfo/index';
import GoBanner from './src/components/molecules/GoBanner/index';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts/index';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* Seacrh Bar */}
          <SearchFeature />
          {/* Gopay */}
          <View style={{marginHorizontal: 17, marginTop: 8}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#2C5FBB',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                padding: 14,
              }}>
              <Image source={require('./src/assets/icon/gopay.png')} />
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                Rp. 50.000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                paddingBottom: 14,
                backgroundColor: '#2F65BD',
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}>
              <GopayFeature
                title="Pay"
                img={require('./src/assets/icon/pay.png')}
              />
              <GopayFeature
                title="Nearby"
                img={require('./src/assets/icon/nearby.png')}
              />
              <GopayFeature
                title="Top Up"
                img={require('./src/assets/icon/topup.png')}
              />
              <GopayFeature
                title="More"
                img={require('./src/assets/icon/more.png')}
              />
            </View>
          </View>
          {/* Main Feature */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginHorizontal: 0,
              marginTop: 18,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',

                flexWrap: 'wrap',
              }}>
              <MainFeature
                title="Go-RIDE"
                img={require('./src/assets/icon/go-ride.png')}
              />
              <MainFeature
                title="Go-CAR"
                img={require('./src/assets/icon/go-car.png')}
              />
              <MainFeature
                title="Go-BLUEBIRD"
                img={require('./src/assets/icon/go-bluebird.png')}
              />
              <MainFeature
                title="Go-SEND"
                img={require('./src/assets/icon/go-send.png')}
              />
              <MainFeature
                title="Go-DEALS"
                img={require('./src/assets/icon/go-deals.png')}
              />
              <MainFeature
                title="Go-PULSA"
                img={require('./src/assets/icon/go-pulsa.png')}
              />
              <MainFeature
                title="Go-FOOD"
                img={require('./src/assets/icon/go-food.png')}
              />
              <MainFeature
                title="MORE"
                img={require('./src/assets/icon/go-more.png')}
              />
            </View>
          </View>
          <View
            style={{
              height: 17,
              backgroundColor: '#F2F2F4',
              marginTop: 20,
            }}></View>
          {/* News Section */}
          <GoNews />
          {/* Internal Information Section */}
          <GoInfo />
          {/* Gofood Banner Section */}
          <GoBanner />
          {/* Nearby Go-Food */}
          <ScrollableProducts />
        </ScrollView>

        {/* Footer */}
        <View
          style={{
            height: 54,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderTopWidth: 1,
          }}>
          <FooterFeature
            title="Home"
            img={require('./src/assets/icon/home-active.png')}
            active
          />
          <FooterFeature
            title="Orders"
            img={require('./src/assets/icon/order.png')}
          />
          <FooterFeature
            title="Help"
            img={require('./src/assets/icon/help.png')}
          />
          <FooterFeature
            title="Inbox"
            img={require('./src/assets/icon/inbox.png')}
          />
          <FooterFeature
            title="Account"
            img={require('./src/assets/icon/account.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
