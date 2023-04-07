import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StyledTouchable from '../../../components/base/StyledTouchable'
import Images from '../../../assests'
import StyledText from '../../../components/base/StyledText'

const SpagettiItem = () => {
  return (
    <View>
        <StyledTouchable style={styles.item}>
            <Image
                style={styles.burgericon}
                source={Images.icons.avatar} />
            <StyledText customStyle={styles.itemtittle} value='Spagetti cá'/>
            <StyledText customStyle={styles.itemtext} value='Chỉ có Spagetti và cá thôi'/>
            <StyledText customStyle={styles.itemprice} value='20.000VNĐ'/>
        </StyledTouchable>
    </View>
  )
}

export default React.memo(SpagettiItem)

const styles = StyleSheet.create({
    burgericon : {
        width : 100,
        height : 100
    },
    item : {
        width : 150,
        height : 200,
        borderWidth : 1,
        borderRadius : 15,
        padding : 10,
        alignItems : 'center',
        marginHorizontal : 5
    },
    itemtittle : {
        fontWeight :'bold',
        marginVertical : 3
    },
    itemtext  : {
       textAlign : 'center'
    },
    itemprice : {
        fontWeight :'bold',
        marginTop :5
    }
})