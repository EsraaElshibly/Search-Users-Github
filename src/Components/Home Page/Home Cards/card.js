import React, { Component } from 'react';
import './card.css'

export default class Card extends Component {
    render () { 
        return (
            <div className={this.props.className}>
                <div className='card'>
                    <div className='card-design'>
                        <h5> {this.props.name} <small className='text-success title'>{this.props.title} </small> <small className='job'> {this.props.job} </small> </h5>    
                        <img src={this.props.img} />
                    </div>
                    
                    <hr/>
                    <div className='card-design icon'>
                        <div className='mail'>
                            <i className="fas fa-envelope"> <span>Email</span> </i>
                        </div>
                        <div className='vertical-line'></div>
                        <div className='phone'>
                            <i className="fas fa-envelope"> <span>Call</span> </i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
