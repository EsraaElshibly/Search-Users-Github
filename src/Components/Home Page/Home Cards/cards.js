import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Card from './card';

export default class Cards extends Component {

    render() {
        return (
            <div className="cards">
               <div className='container'>
                    <div className='row'>
                        <Card name="jone cooper" title="Admin" job="Web Design " img="../Pic/person-1.jpg"  className="col-md-4 col-12"  />
                        <Card name="cody fisher" title="Admin" job="Mobile App Design " img="../Pic/person-1.jpg" className="col-md-4 col-12" />
                        <Card name="esther haward" title="Admin" job="Web Design " img="../Pic/person-1.jpg" className="col-md-4 col-12"  />
                    </div>
                    <div className='row'>
                        <Card name="jenny wilson" title="Admin" job="Web Design " img="../Pic/person-1.jpg" className="col-md-4 col-12"  />
                        <Card name="cody fisher" title="Admin" job="Mobile App Design " img="../Pic/person-1.jpg" className="col-md-4 col-12" />
                        <Card name="jone cooper" title="Admin" job="Web Design " img="../Pic/person-1.jpg"  className="col-md-4 col-12"  />
                    </div>
                </div>
            </div>
          
        );
    }
}
