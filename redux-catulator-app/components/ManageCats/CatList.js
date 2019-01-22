import React, { Component } from 'react';
import { FlatList, Button } from 'react-native';
import styled from 'styled-components';

const Header = styled.Text`
    color: white;
    font-size: 24;
    alignSelf: center;
`;

const CatItem = styled.Text`
    color: white;
    font-size: 16;
    border-width: 1;
    border-color: #82b1ff;
    height: 65;
    width: 350;
`;

const DeleteButton = styled.View`
`;

const DeleteButtonText = styled.Text`
    color: red;
    font-size: 10;
    height: 30;
    width: 30;
`;

const ListViewWrapper = styled.View`
    color: #212121;
    height: 350;
    width: 100%;
    alignContent: flex-start;
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
                    renderItem={({ item }) => <CatItem>Name: {item.catName}{'\n'}Breed: {item.catBreed}{'\n'}Age: {item.catAge} | Gender: {item.catGender}</CatItem>}
                    keyExtractor={(item, index) => `${item.catName}_${index}`}
                    />
            </ListViewWrapper>
        );
    }
}

export default CatList;
