import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import NavButton from '../components/HomeScreen/NavButton';

const HomeContainer = styled.View`
    background-color: #212121;
    flex: 1;
    justifyContent: center;
`;

const CatImage = styled.Image`
    alignSelf: center;
`;

class HomeScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }

    render() {
        const { navigation } = this.props;

        return (
            <HomeContainer>
                <CatImage
                    source={require('../assets/images/catulator.png')} />
                <NavButton
                    text={'Manage Cats'}
                    navigateTo={() => navigation.navigate('ManageCats')} />
            </HomeContainer>
        );
    }
}

export default HomeScreen;