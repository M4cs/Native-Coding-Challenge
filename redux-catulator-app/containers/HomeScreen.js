import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NavButton from '../components/HomeScreen/NavButton';

const HomeContainer = styled.View`
    background-color: #212121;
    flex: 1;
`;

const WelcomeText = styled.Text`
    font-size: 22;
    height: 100;
    text-align: center;
    color: white;
`;

class HomeScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }

    render() {
        const { navigation } = this.props;

        return (
            <HomeContainer>
                <WelcomeText>Catulator</WelcomeText>
                <NavButton
                    text={'Manage Cats'}
                    navigateTo={() => navigation.navigate('ManageCats')} />
            </HomeContainer>
        );
    }
}

export default HomeScreen;