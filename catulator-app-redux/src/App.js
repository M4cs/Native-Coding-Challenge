import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as catAction from './actions/catAction';

class App extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: '',
            breed: '',
            description: '',
            color: '',
            age: '',
            gender: ''
        }
    }

    handleChange(e){
        this.setState({
            name: e.target.value,
            breed: e.target.value,
            description: e.target.value,
            color: e.target.value,
            age: e.target.value,
            gender: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let cat = {
            name: this.state.name,
            breed: this.state.breed,
            description: this.state.description,
            color: this.state.color,
            age: this.state.age,
            gender: this.state.gender
        }
        this.setState({
            name: '',
            breed: '',
            description: '',
            color: '',
            age: '',
            gender: ''
        });
        this.props.createCat(cat);
    }

    listView(data, index){
        return(
            <div className="row">
                <div className="col-md-10">
                    <li key={index} className="list-group-item clearfix">
                        {data.name}
                    </li>
                    <li key={index} className="list-group-item clearfix">
                        {data.breed}
                    </li>
                    <li key={index} className="list-group-item clearfix">
                        {data.description}
                    </li>
                    <li key={index} className="list-group-item clearfix">
                        {data.color}
                    </li>
                    <li key={index} className="list-group-item clearfix">
                        {data.age}
                    </li>
                    <li key={index} className="list-group-item clearfix">
                        {data.gender}
                    </li>
                </div>
                <div className="col-md-2">
                    <button onClick={(e) => this.deleteCat(e, index)} className="btn btn-danger">Remove</button>
                </div>
            </div>
        )
    }

    deleteCat(e, index){
        e.preventDefault();
        this.deleteCat(index);
    }
    

    render(){

        return (
            <div className="container">
                <h1>Catulator - Cat Index</h1>
                <hr />
                <div>
                    <h3>Add Cats</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} className="form-control" placeholder="Name" value={this.state.name}/><br />
                        <input type="text" onChange={this.handleChange} className="form-control" placeholder="Breed" value={this.state.breed} /><br />
                        <input type="text" onChange={this.handleChange} className="form-control" placeholder="Description" value={this.state.description} /><br />
                        <input type="text" onChange={this.handleChange} className="form-control" placeholder="Color" value={this.state.color} /><br />
                        <input type="text" onChange={this.handleChange} className="form-control" placeholder="Age" value={this.state.age} /><br />
                        <input type="text" onChange={this.handleChange} className="form-control" placeholder="Gender" value={this.state.gender} /><br />
                        <input type="submit" className="btn btn-success" value="ADD"/>
                    </form>
                    <hr />
                { <ul className="list-group">
                    {this.props.cats.map((cat, i) => this.listView(cat, i))}
                </ul>}                    
                </div>    
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cats: state.cats
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createCat: cat => dispatch(catAction.createCat(cat))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);