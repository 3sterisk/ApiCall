import { FlatList, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card';
import Sort from '../assets/Images/Sort.svg'
import Filter from '../assets/Images/Filter.svg'

const ApiCallScreen = () => {



    const [data, setData] = useState([]);
    const [fetching, setFetching] = useState(true);
    const url = 'https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=27&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100'

    useEffect(() => {
        axios.get(url)
            .then(resp => {
                setData(resp.data.object);
                setFetching(false)
            })
            .catch(e => {
                console.log('Error while fetching', e);
                setFetching(false);
            })
    }, []);

    const header = (item) => {
        return (
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ color: 'grey' }}>{`${data.length} / ${data.length} Products`}</Text>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <TouchableOpacity style={styles.options}>
                        <Sort />
                        <Text style={styles.text}>Sort</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.options}>
                        <Filter />
                        <Text style={styles.text}>Filter</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff', paddingHorizontal: 5 }}>
            {fetching ? (
                <Text style={styles.text}> Loading...</Text>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item: any) => item.id.toString()}
                    renderItem={({ item }) => (
                        // <View style={{ }}>
                        <Card item={item} />
                        // </View>
                    )}
                    style={{ margin: 5, }}
                    numColumns={2}
                    columnWrapperStyle={styles.rows}
                    ListHeaderComponent={header}
                    ListHeaderComponentStyle={{ marginBottom: 15 }}
                />
            )}
        </View>
    )
}

export default ApiCallScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 16,
        alignSelf: 'center'
    },
    rows: {
        gap: 5,
    },
    options: {
        flexDirection: 'row',
    }

})
