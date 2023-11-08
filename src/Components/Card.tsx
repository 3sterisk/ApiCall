import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Favorite from '../assets/Images/Favorite.svg'
import Liked from '../assets/Images/Favorite_filled.svg'

interface CardProps {
  item?: Object
}
const Card = (props: CardProps) => {

  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked(!liked);
  }
  const item = props.item;
  return (
    <View style={styles.card}>
      <View style={{ width: '100%', flex: 1, }}>
        <Image
          source={{ uri: item.mediaUrl }}
          style={{ width: '100%', height: 200, borderRadius: 10, overflow: 'hidden', }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 10, top: 10 }} onPress={likeHandler}>
          <>
            {liked ? (
              <Liked fill={'red'} />
            ) : (
              <Favorite />
            )}
          </>
        </TouchableOpacity>

        <View style={{ flex: 1, width: '100%', alignItems: 'flex-start', flexWrap: 'wrap', marginTop: 10 }}>
          <Text style={styles.name} >{item.name}</Text>
          {/* <Text style={styles.text}>{item.description}</Text> */}
          <Text style={styles.text}>{`₹${item.variants[0].sellingPrice.toLocaleString()}`} </Text>
        </View>
      </View>
    </View >
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: 200,
    flex: 0.5,
    alignItems: 'center',
    paddingHorizontal: 4

  },
  name: {
    fontSize: 16,
    fontWeight: '800',
    color: 'black',

  },
  text: {
    color: 'black',
    fontSize: 16,
  }
})