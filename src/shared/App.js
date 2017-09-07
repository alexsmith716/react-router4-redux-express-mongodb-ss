
import React, { Component } from 'react';
import RenderList from './RenderList';
import RenderListItems from './RenderListItems';
import { Link, Route } from 'react-router-dom';

export default ({ data }) => (

  <div className='flex-stretch'> 

    <RenderList>

      {
        data ? data.map(gist => (

            <RenderListItems key={gist.id}>

                {gist.description || '[no description]'}

            </RenderListItems>

          )) : (<p>Fetching Data</p>)
      }

    </RenderList>

  </div>
  
);