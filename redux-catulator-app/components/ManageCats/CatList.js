import React, { Component } from 'react';
import { Flatlist } from 'react-native';
import styled from 'styled-components';

const Header = styled.Text`
    color: white;
    font-size: 24;
`;

const CatItem = styled.Text`
    color: white;
    font-size: 16;
    border-width: 1;
    border-color: #82b1ff;
    height: 30;
    width: 200;
`;

class CatList extends Component {
    render() {
        const { allCats } = this.props;
        return (
            /*<Flatlist
                data={allCats}
                ListHeaderComponent={<Header>List Cats</Header>}
                ListEmptyComponent={<Header>You havent added any cats</Header>}
                renderItem={({ item }) => <CatItem>{item.catName} {item.catBreed} {item.catAge} {item.catGender} {item.catColor}</CatItem>}
                keyExtractor={(item, index) => `${item.catName}_${index}`}
            />*/
            <Header>Test</Header>
        );
    }
}

export default CatList;