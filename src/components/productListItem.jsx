import React, { Component } from 'react';

class ProductListItem extends Component {
    render() {
        return (
            <div>
                {this.props.names.map(name => <p>{name}</p>)}
            </div>
        )
    }
}
export default ProductListItem;