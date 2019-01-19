import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-native';
import styled from 'styled-components';
import { addCat } from '../actions/catActions';
import CatList from '../components/ManageCats/CatList';
import AddCatButton from '../components/ManageCats/AddCatButton';
import AddCatForm from '../components/ManageCats/AddCatForm';

const HomeContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #212121;
    padding-top: 60;
`;

const ListContainer = styled.View`
`;

const ModalView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ButtonWrapper = styled.View`
    flex-direction: row;
`;

const CloseButtonWrapper = styled.TouchableOpacity`
    width: 100;
    height: 75;
    border-radius: 8;
    border-width: 1;
    border-color: #82b1ff;
`;

const CloseButtonText = styled.Text`
    color: white;
`;

const mapStateToProps = ({ cats }) => ({
    allCats: cats.allCats   
});

const mapDispatchToProps = {
    addCat
};

class ManageCats extends Component {
    
    state = {
        modalVisible: false
    }
    renderCatForm = () => {
        this.setState({
            modalVisible: true
        });
    };

    closeModal = () => {
        this.setState({
            modalVisible: false
        });
    }

    addCat = (cat) => {
        const { addCat } = this.props;
        addCat(cat);
        this.closeModal();
    }
    render() {
        const { allCats } = this.props;
        const { modalVisible } = this.state;

        return (
            <HomeContainer>
                {
                    modalVisible ?
                        <Modal
                            animationType="slide"
                            visible={modalVisible}
                            transparent={true}
                            onRequestClose={() => 'closed'}
                        >
                            <ModalView>
                                <AddCatForm addCat={this.addCat} closeModal={this.closeModal} />
                            </ModalView>
                        </Modal>
                        :
                        null
                }
                <ListContainer>
                    <CatList allCats={allCats} />
                </ListContainer>
                <AddCatButton renderCatForm={this.renderCatForm} />
            </HomeContainer>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCats);