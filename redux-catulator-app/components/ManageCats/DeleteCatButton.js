import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { deleteCat } from '../../actions/catActions';
import AddCatButton from './AddCatButton';

const Button = styled.TouchableHighlight`
    height: 75;
    border-width: 3;
    border-radius: 8;
    width: 80%;
    border-color: #82b1ff;
    background-color: #82b1ff;
    justify-content: center;
    margin-top: 100;
`;

const ButtonText = styled.Text`
    font-size: 25;
    color: white;
    text-align: center;
`;

const DeleteCatButton = ({ renderDeleteForm }) => (
    <Button onPress={renderDeleteForm}>
        <ButtonText>Delete Cat</ButtonText>
    </Button>
);

DeleteCatButton.propTypes = {
    renderDeleteForm: PropTypes.func
};

export default DeleteCatButton