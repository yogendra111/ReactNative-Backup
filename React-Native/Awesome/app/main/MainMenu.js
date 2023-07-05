import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import GlobalStyles from '../GlobalStyles';
import {Icon} from '@rneui/base';
import StyleConfig, {colors, globalFont, width} from '../StyleConfig';
import Menu from '../components/Menu';
import {ScrollView} from 'react-native';
import {t} from 'i18next';

const MainMenu = ({navigation}) => {
  const orderMenu = [
    {
      id: 1,
      icon: 'shopping-bag',
      iconType: 'feather',
      title: t('your_orders'),
      navKey: '',
    },
    {
      id: 2,
      icon: 'heart',
      iconType: 'octicon',
      title: t('favorite_orders'),
      navKey: '',
    },
    {
      id: 3,
      icon: 'address-book-o',
      iconType: 'font-awesome',
      title: t('address_book'),
      navKey: '',
    },
    {
      id: 4,
      icon: 'hipchat',
      iconType: 'fontisto',
      title: t('online_ordering_help'),
      navKey: '',
    },
  ];
  const moreMenu = [
    {
      id: 1,
      icon: 'info',
      iconType: 'octicon',
      title: t('about'),
      navKey: '',
    },
    {
      id: 2,
      icon: 'note',
      iconType: 'simple-line-icon',
      title: t('send_feedback'),
      navKey: '',
    },
    {
      id: 3,
      icon: 'alert-circle',
      iconType: 'feather',
      title: t('report_a_safety_emergency'),
      navKey: '',
    },
  ];

  return (
    <ScrollView>
      <View style={{padding: 10}}>
        <Pressable
          style={{margin: 8, alignItems: 'flex-start'}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-back" size={StyleConfig.convertFontScale(20)} />
        </Pressable>
        <View
          style={{
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 15,
            elevation: 20,
          }}>
          <Text
            style={{
              fontSize: globalFont.H1,
              fontWeight: '700',
              color: 'black',
            }}>
            {t('your_profile')}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: StyleConfig.convertFontScale(14),
            }}>
            {t('log_in_or_sign_up_to_view_your_complete_profile')}
          </Text>
          <Pressable
            style={{
              alignItems: 'center',
              borderWidth: 1,
              borderColor: colors.primaryColor,
              borderRadius: 10,
              paddingVertical: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: colors.primaryColor,
                fontSize: StyleConfig.convertFontScale(15),
              }}>
              {t('continue')}
            </Text>
          </Pressable>
        </View>
        <View
          style={[
            GlobalStyles.inlineBox,
            {justifyContent: 'space-evenly', marginVertical: 15},
          ]}>
          <View style={styles.options}>
            <Icon
              name="heart"
              type="octicon"
              size={StyleConfig.convertFontScale(22)}
            />
            <Text style={styles.optionText}>{t('likes')}</Text>
          </View>
          <View style={styles.options}>
            <Icon
              name="credit-card"
              type="entypo"
              size={StyleConfig.convertFontScale(22)}
            />
            <Text style={styles.optionText}>{t('payments')}</Text>
          </View>
          <View style={styles.options}>
            <Icon
              name="settings-outline"
              type="ionicon"
              size={StyleConfig.convertFontScale(22)}
            />
            <Text style={styles.optionText}>{t('settings')}</Text>
          </View>
        </View>
        <Menu
          data={orderMenu}
          heading={t('food_orders')}
          style={{marginVertical: 15}}
        />
        <Menu data={moreMenu} heading={t('more')} />
      </View>
    </ScrollView>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  options: {
    width: width * 0.28,
    paddingVertical: width * 0.05,
    alignItems: 'center',
    elevation: 1,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  optionText: {
    color: 'black',
    fontSize: StyleConfig.convertFontScale(12),
    marginTop: 8,
  },
});
