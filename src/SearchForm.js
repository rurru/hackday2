import React from 'react';

const SearchForm = (props) => {

    console.log(props.handler);
    return (
  <div className="search">
      <form className="form" id="SearchForm">
        <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Username"
        />
        <button className="button" onClick={(e) => props.handler}>
          Add Item
        </button>
      </form>
  </div>
    );
}

export default SearchForm;