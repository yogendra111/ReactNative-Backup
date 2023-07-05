import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import StyleConfig, {colors, globalFont, width} from '../StyleConfig';
import {Icon, Image} from '@rneui/base';
import LineHeading from '../components/globalComponents';
import CategorySlider from '../components/CategorySlider';
import CardSlider from '../components/CardSlider';
import LanguageSelector from './LanguageSelector';
import {t} from 'i18next';
import {useSelector} from 'react-redux';
import GlobalStyles from '../GlobalStyles';
import ItemCard from '../components/ItemCard';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {location} = useSelector(state => state.locationReducer);
  return (
    <ScrollView>
      <LanguageSelector
        isVisible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Pressable
          style={[GlobalStyles.inlineBox, {maxWidth: width * 0.4}]}
          onPress={() => {
            navigation.navigate('LocationSelector');
          }}>
          <Icon
            name="location-pin"
            color={colors.primaryColor}
            size={StyleConfig.convertFontScale(25)}
          />
          <View>
            <Text
              style={{fontSize: globalFont.H4, fontWeight: 'bold'}}
              numberOfLines={1}>
              {location.main_Addr || t('select_a_location')}
            </Text>
            {(location.secondary_Addr || location.description) && (
              <Text numberOfLines={1}>
                {location.secondary_Addr || location.description}
              </Text>
            )}
          </View>
          <Icon name="chevron-down" type="feather" />
        </Pressable>
        <View style={GlobalStyles.inlineBox}>
          <Pressable
            style={styles.icon}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Icon name="translate" />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('MainMenu');
            }}>
            <Icon name="menu" size={StyleConfig.convertFontScale(28)} />
          </Pressable>
        </View>
      </View>
      <View style={[styles.searchBox, GlobalStyles.inlineBox]}>
        <Icon name="search" color={colors.primaryColor} />
        <TextInput placeholder={t('search_thali')} style={styles.searchBar} />
        <Icon name="mic-none" color={colors.primaryColor} />
      </View>
      <View style={[styles.featuredCard, GlobalStyles.inlineBox]}>
        <View style={{width: width / 2}}>
          <Text style={{fontSize: globalFont.H2, fontWeight: '700'}}>
            {t('healthy')}
          </Text>
          <Text style={{fontSize: globalFont.body}}>
            {t('dish_especially_curated_by_nutrients')}
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2013/07/13/01/22/vegetables-155616_960_720.png',
          }}
          resizeMode="contain"
          style={{
            width: width / 3,
            height: width / 4,
          }}
        />
      </View>
      <LineHeading style={{marginTop: 10}}>
        {t('whats_on_your_mind')}
      </LineHeading>
      <CategorySlider />
      <LineHeading style={{marginTop: 30}}>{t('whats_new')}</LineHeading>
      <CardSlider style={{marginVertical: 10}} />
      <LineHeading style={{marginTop: 10}}>{t('all_restaurants')}</LineHeading>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 5, marginVertical: 10}}>
        <Pressable style={[GlobalStyles.inlineBox, styles.whiteShadowBox]}>
          <Icon name="sort" type="materialicon" />
          <Text>{t('sort')}</Text>
          <Icon name="arrow-drop-down" />
        </Pressable>
        <Text style={styles.whiteShadowBox}>{t('rating_4')}</Text>
        <Text style={styles.whiteShadowBox}>{t('pure_veg')}</Text>
        <Pressable style={[GlobalStyles.inlineBox, styles.whiteShadowBox]}>
          <Text>{t('cuisines')}</Text>
          <Icon name="arrow-drop-down" />
        </Pressable>
        <Pressable style={[GlobalStyles.inlineBox, styles.whiteShadowBox]}>
          <Text>{t('more')}</Text>
          <Icon name="arrow-drop-down" />
        </Pressable>
      </ScrollView>
      <Text style={{alignSelf: 'center'}}>
        {t('1407_restaurants_delivering_to_you')}
      </Text>
      <ItemCard />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 5,
    elevation: 5,
    marginRight: 8,
  },
  shadow: {
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  searchBox: {
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 8,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  searchBar: {
    flex: 1,
    padding: 0,
    marginHorizontal: 5,
    borderRightWidth: 2,
    borderColor: colors['light-grey'],
  },
  featuredCard: {
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 20,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  whiteShadowBox: {
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 8,
    marginHorizontal: 5,
  },
});
