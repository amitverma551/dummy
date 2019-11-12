import React, {Component} from 'react';
import  { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {getSearchQuery} from '../actions/DataFatchingAction';

class Search extends Component{

    constructor(){
        super();
        this.search = window.location.search;
        this.params = new URLSearchParams(this.search);
        this.urlString = this.params.get('q');
        this.state = {
            inputText : '',
            redirect: false
        }
    }

    closeSearch = () => {
        document.querySelector('.search-overlay').classList.remove("active");
        document.getElementById('site-search').blur();
        this.setState({
            redirect : this.state.redirect = false
        })
     }

     handleSearchInput = e => {
        this.setState({inputText: e.target.value});
     }

     handleSubmit = e =>{
         e.preventDefault();
         if(this.state.inputText !== ''){
            this.setState({redirect : this.state.redirect = true});
            this.props.getSearchTxt(`http://localhost:9001/api/search?q=${this.state.inputText}`);
            document.getElementById('site-search').value= '';
            setTimeout(()=>{
                document.querySelector(".searchtxt").innerHTML= this.state.inputText;
            },100)
         }
         
     }

     componentDidMount(){
        if(this.urlString !== ''){
            this.props.getSearchTxt(`http://localhost:9001/api/search?q=${this.urlString}`);
        }  
      }

     renderRedirect = () => {
        if(this.state.redirect === true) {
          this.closeSearch();
          return <Redirect to={`/search?q=${this.state.inputText}`} />
        }
      }

    render(){
        return(
            <div className="search-overlay">
                {this.renderRedirect()}
                <div className="search-overlay-inner">
                    <span className="search-overlay-close-button" onClick={this.closeSearch}>
                        <span className="icon icon-close01 closesarch">
                        <svg height="14px" version="1.1" viewBox="0 0 14 14" width="14px"><g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g fill="#fff" id="Core" transform="translate(-341.000000, -89.000000)"><g transform="translate(341.000000, 89.000000)"><path d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"></path></g></g></g></svg>
                        </span>
                    </span>
                <form className="search-form search-overlay-form" noValidate="" onSubmit={this.handleSubmit}>
                    <input className="search-input" onChange={this.handleSearchInput} id="site-search" name="searchkey" type="search" />
                    <label className="search-label">Type keyword(s) to search</label>
                </form>
                <div className="search-overlay-autosuggest">
                    <ul className="search-overlay-autosuggest-list">
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getSearchTxt: url => dispatch(getSearchQuery(url)),
  });

export default connect(null,mapDispatchToProps)(Search);