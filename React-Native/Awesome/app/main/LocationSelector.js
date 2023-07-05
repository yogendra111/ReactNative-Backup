import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/base';
import {t} from 'i18next';
import StyleConfig, {colors, globalFont, height, width} from '../StyleConfig';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch, useSelector} from 'react-redux';
import {setLocation} from '../redux/action';
import GlobalStyles from '../GlobalStyles';

const LocationSelector = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={{padding: 10, height: height}}>
      <Pressable
        style={GlobalStyles.inlineBox}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="chevron-down" type="feather" size={30} />
        <Text
          style={{
            fontSize: globalFont.H2,
            fontWeight: '500',
            color: 'black',
            marginLeft: 8,
            // marginBottom: 5,
          }}>
          {t('select_a_location')}
        </Text>
      </Pressable>
      <GooglePlacesAutocomplete
        placeholder={t('search_for_area')}
        query={{
          key: 'AIzaSyC239GiyATShc5UjAAkcqqbv98iAO3CSAM',
          language: 'en',
          rankby: 'distance',
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log('data', data, '\ndetails', details);
          dispatch(
            setLocation({
              main_Addr: data.structured_formatting?.main_text || data.name,
              secondary_Addr: data.structured_formatting?.secondary_text,
              description: data.description || data.vicinity,
            }),
          );
          navigation.goBack();
        }}
        // fetchDetails
        // enablePoweredByContainer={false}
        disableScroll={false}
        keepResultsAfterBlur
        // predefinedPlacesAlwaysVisible
        suppressDefaultStyles
        renderLeftButton={() => (
          <Icon name="search" color={colors.primaryColor} />
        )}
        currentLocation
        currentLocationLabel="Current location"
        renderRow={(data, index) => {
          // console.log('first', data);
          return (
            <View
              style={[
                GlobalStyles.inlineBox,
                {
                  paddingVertical: 10,
                },
                {
                  borderBottomWidth: 1,
                  borderBottomColor: colors['light-grey'],
                },
              ]}>
              <Icon
                name="map-pin"
                type="feather"
                style={{marginHorizontal: 12}}
              />
              {/* {data.structured_formatting ? ( */}
              <View>
                {(data.structured_formatting?.main_text || data.name) && (
                  <Text
                    style={{
                      fontSize: StyleConfig.convertFontScale(15),
                      color: 'black',
                    }}>
                    {data.structured_formatting?.main_text || data.name}
                  </Text>
                )}
                <Text>
                  {data.structured_formatting?.secondary_text ||
                    data.vicinity ||
                    data.description}
                </Text>
              </View>
              {/* ) : (
                 <Text>{data.description || data.vicinity}</Text>
               )} */}
            </View>
          );
        }}
        styles={{
          textInputContainer: [styles.searchBox, GlobalStyles.inlineBox],
          textInput: styles.searchBar,
          poweredContainer: {paddingTop: 10, borderTopWidth: 0},
          powered: {height: width / 30},
        }}
      />
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  searchBox: {
    elevation: 5,
    marginVertical: 10,
    // marginHorizontal: 15,
    borderRadius: 8,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  searchBar: {
    flex: 1,
    padding: 0,
    marginHorizontal: 5,
    // borderRightWidth: 2,
    borderColor: colors['light-grey'],
  },
});
