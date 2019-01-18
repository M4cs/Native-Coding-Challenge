import React, { Component } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.View`
    background-color: #82b1ff;
    flex: 1;
    width: 100%;
    justify-content: center;
`;

const HeaderText = styled.Text`
    font-size: 22;
    color: white;
    text-align: center;
    margin-top: 40;
`;

const Input = styled.TextInput`
    height: 40;
    border-color: #212121;
    border-width: 1;
    width: 300;
    color: #999999;
    border-radius: 8;
    text-align: center;
    margin-left: 40;
`;

const DescInput = styled.TextInput`
    height: 120;
    border-color: #212121;
    border-width: 2;
    width: 300;
`;

const Text = styled.Text`
    color: white;
    font-size: 15;
    text-align: center;
`;

const ButtonWrapper = styled.View`
    flex-direction: row;
`;

const CloseButtonWrapper = styled.TouchableOpacity`
    width: 100;
    height: 75;
    border-radius: 8;
    border-width: 1;
    border-color: #212121;
    justify-content: center;
    margin-left: 80;
`;

const SubmitButtonWrapper = styled.TouchableOpacity`
    width: 100;
    height: 75;
    border-radius: 8;
    border-width: 1;
    border-color: #212121;
    justify-content: center;
    margin-left: 10;
`;

const CloseButtonText = styled.Text`
    color: white;
    text-align: center;
`;

class AddCatForm extends Component {
    state = {
        catName: '',
        catBreed: '',
        catAge: '',
        catGender: '',
        catColor: '',
    };

    handleCatAdd = () => {
        const { addCat } = this.props;
        const { catName, catBreed, catAge, catGender, catColor } = this.state;
        addCat({
            catName,
            catBreed,
            catAge,
            catGender,
            catColor
        });
    }

    render() {
        const { closeModal } = this.props;
        return(
            <HomeContainer>
                <HeaderText>Add Cat</HeaderText>
                <HeaderText></HeaderText>
                <Text>Name</Text>
                <Input
                    onChangeText={(text) => this.setState({ catName: text })}
                    autoCorrect={false}
                    placeholder="Jerry" />
                <Text>Breed</Text>
                <Input
                    onChangeText={(text) => this.setState({ catBreed: text })}
                    autoCorrect={false}
                    placeholder="Tabby" />
                <Text>Age</Text>
                <Input
                    onChangeText={(text) => this.setState({ catAge: text })}
                    autoCorrect={false}
                    placeholder="4" />
                <Text>Gender</Text>
                <Input
                    onChangeText={(text) => this.setState({ catGender: text })}
                    autoCorrect={false}
                    placeholder="Male" />
                <Text>Color</Text>
                <Input
                    onChangeText={(text) => this.setState({ catColor: text })}
                    autoCorrect={false}
                    placeholder="Orange" />
                <Text></Text>
                <ButtonWrapper>
                    <CloseButtonWrapper onPress={closeModal}>
                        <CloseButtonText>Back</CloseButtonText>
                    </CloseButtonWrapper>
                    <SubmitButtonWrapper onPress={this.handleCatAdd}>
                        <CloseButtonText>Add Cat</CloseButtonText>
                    </SubmitButtonWrapper>
                </ButtonWrapper>
            </HomeContainer>
        );
    }
}

export default AddCatForm;