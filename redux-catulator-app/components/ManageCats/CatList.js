import React, { Component } from 'react';
import { FlatList } from 'react-native';
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

const ListViewWrapper = styled.View`
    color: #212121;
    justify-content: center;
    height: 300;
    width: 100%;
`;

class CatList extends Component {
    render() {
        const { allCats } = this.props;
        return (
            <ListViewWrapper>
                <FlatList
                    data={allCats}
                    ListHeaderComponent={<Header>List Of Cats</Header>}
                    ListEmptyComponent={<Header>You havent added any cats</Header>}
                    renderItem={({ item }) => <CatItem>{item.catName} {item.catBreed} {item.catAge} {item.catGender} {item.catColor}</CatItem>}
                    keyExtractor={(item, index) => `${item.catName}_${index}`}
                    />
            </ListViewWrapper>
        );
    }
}

export default CatList;
