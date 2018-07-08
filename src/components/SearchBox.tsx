import * as React from 'react';

const SearchBox = ({ change }: any) => {
    return (
        <div className="pa2">
            <input
                aria-label="Search Robots"
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={change}
            />
        </div>
    );
};

export default SearchBox;