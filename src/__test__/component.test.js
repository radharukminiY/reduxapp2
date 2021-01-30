import React from 'react';
import Footer from '../component/Footer';
import {create} from 'react-test-render';

describe('SnapShot Footer test', () => {
  test('testing Footer', ()=>{
    let tree =create(<Footer/>);
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
