import React from 'react';
import './Directory.scss';
import MenuItem from '../menu-item/Menu-item';

class Directory extends React.Component{
    // En ES7 ya podemos suprimir constructor(){} y como tal podemos quitar super()
    // En ES7 además ya podemos declarar properties de la class sin el this.
    // En ES7 si que aun es necesario el this para llamar a propiedades desde methods.
    constructor(){
        super();
        this.state = {
            sections:[
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'sneakers'
                },
                {
                    title: 'girly',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'girly'
                },
                {
                    title: 'manly',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'manly'
                },
            ]
        }
    }
    render(){
        return(
            <div className='directory-menu'>
{/* En ES7 si que aun es necesario el this para llamar a propiedades desde methods. */}
              {this.state.sections.map(({ id, ...otherSectionProps }) => (
                  <MenuItem key={id} {...otherSectionProps}/>
            ))}
            </div>
        )
    }
}

export default Directory;