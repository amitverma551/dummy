import React, {Component} from 'react';

class Search extends Component{
    closeSearch = () => {
        document.querySelector('.search-overlay').classList="search-overlay";
     }
    render(){
        return(
            <div className="search-overlay">
                <div className="search-overlay-inner">
                    <span className="search-overlay-close-button" onClick={this.closeSearch}>
                        <span className="icon icon-close01 closesarch">
                        <svg height="14px" version="1.1" viewBox="0 0 14 14" width="14px"><g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g fill="#fff" id="Core" transform="translate(-341.000000, -89.000000)"><g transform="translate(341.000000, 89.000000)"><path d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"></path></g></g></g></svg>
                        </span>
                    </span>
                <form className="search-form search-overlay-form ng-untouched ng-pristine ng-valid" noValidate="">
                    <input className="search-input ng-untouched ng-pristine ng-valid" id="site-search" name="searchkey" type="search" />
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

export default Search;