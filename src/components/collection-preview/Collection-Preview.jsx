import React from 'react';
import CollectionItem from '../collection-item/Collection-item';
import './Collection-Preview.scss'

const CollectionPreview = ({title, items}) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter((item, id) => id < 4)
                    .map(({id, ...otherItemProps})=>(
                        <CollectionItem key={id} {...otherItemProps}></CollectionItem>
                    ))}
            </div>
        </div>
    );
}
export default CollectionPreview;