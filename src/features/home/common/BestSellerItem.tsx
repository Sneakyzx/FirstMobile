import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StyledTouchable from '../../../components/base/StyledTouchable'
import Images from '../../../assests'
import StyledText from '../../../components/base/StyledText'

const BestSellerItem = () => {
  return (
    <View style={{flexDirection : 'row'}}>
        <StyledTouchable style={styles.item}>
            <Image
                style={styles.burgericon}
                source={Images.icons.productItem.chickenburger} />
            <StyledText customStyle={styles.itemtittle} value='Burger gà'/>
            <StyledText customStyle={styles.itemtext} value='Burger và gà rán giòn'/>
            <StyledText customStyle={styles.itemprice} value='20.000VNĐ'/>
        </StyledTouchable>
        <StyledTouchable style={styles.item}>
            <Image
                style={styles.burgericon}
                source={Images.icons.productItem.pizzahaisan} />
            <StyledText customStyle={styles.itemtittle} value='Pizza hải sản'/>
            <StyledText customStyle={styles.itemtext} value='Pizza cùng các loại hải sản'/>
            <StyledText customStyle={styles.itemprice} value='150.000VNĐ'/>
        </StyledTouchable>
        <StyledTouchable style={styles.item}>
            <Image
                style={styles.burgericon}
                source={Images.icons.productItem.burgercombo} />
            <StyledText customStyle={styles.itemtittle} value='Combo burger và nước'/>
            <StyledText customStyle={styles.itemtext} value=''/>
            <StyledText customStyle={styles.itemprice} value='89.000VNĐ'/>
        </StyledTouchable>
        <StyledTouchable style={styles.item}>
            <Image
                style={styles.burgericon}
                source={Images.icons.productItem.spagettibo} />
            <StyledText customStyle={styles.itemtittle} value='Spagetti sốt kem nấm'/>
            <StyledText customStyle={styles.itemtext} value=''/>
            <StyledText customStyle={styles.itemprice} value='60.000VNĐ'/>
        </StyledTouchable>
    </View>
  )
}

export default React.memo(BestSellerItem)

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