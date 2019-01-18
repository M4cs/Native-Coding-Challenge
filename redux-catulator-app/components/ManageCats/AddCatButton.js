import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.TouchableHighlight`
    height: 75;
    border-width: 3;
    border-radius: 8;
    width: 80%;
    border-color: #82b1ff;
    background-color: #82b1ff;
    justify-content: center;
    margin-top: 250;
`;

const ButtonText = styled.Text`
    font-size: 25;
    color: white;
    text-align: center;
`;

const AddCatButton = ({ renderCatForm }) => (
    <Button onPress={renderCatForm}>
        <ButtonText>Add Cat</ButtonText>
    </Button>
);

AddCatButton.propTypes = {
    renderCatForm: PropTypes.func
};

export default AddCatButton;