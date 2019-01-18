import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HomeContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 100;
    width: 95%;
    border-width: 1;
    border-color: #82b1ff;
    background-color: #82b1ff;
    border-radius: 8;
    margin-top: 125;
    margin-left: 10;
`;

const NavScreenText = styled.Text`
    color: white;
    font-size: 22;
`;

const NavButton = ({ text, navigateTo }) => (
    <HomeContainer onPress={navigateTo}>
        <NavScreenText>{text}</NavScreenText>
    </HomeContainer>
);

NavButton.propTypes = {
    text: PropTypes.string.isRequired,
    navigateTo: PropTypes.func.isRequired
};

export default NavButton;
