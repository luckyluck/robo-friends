import React from 'react';

const SearchBox = ({ value, change }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                value={value}
                onChange={change}
            />
        </div>
    );
};

export default SearchBox;