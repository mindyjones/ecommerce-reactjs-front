import React from 'react';
import SHOP_DATA from './Shop-data';
import CollectionPreview from '../../components/collection-preview/Collection-Preview';

class ShopPage extends React.Component{
    // En ES7 ya podemos suprimir constructor(){} y como tal podemos quitar super()
    // En ES7 además ya podemos declarar properties de la class sin el this.
    // En ES7 si que aun es necesario el this para llamar a propiedades desde methods.
        
        state = {
            collections: SHOP_DATA
        }
    
    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>  
                {collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview
                            key={id}
                            {...otherCollectionProps}
                        />
                    )
                )}
            </div>
        );
    }
}
export default ShopPage;