import Head from 'next/head'
import { useState } from 'react';
import getScrip from '../../getScrip';

const Home = () => {
  const [scrip, setScrip] = useState('');

  return (
    <>
      <Head>
        <title>rando scrip</title>
      </Head>
      <div style={{margin: '50px'}}>
        <small>written by j.d. shaeffer</small>
        <h1>want an unbiased random scripture?</h1>
        <p>(btw it's a true weighted random scripture based on rejection sampling)</p>
        <p>(most statiscally accurate random scripture possible)</p>
        <button style={{padding: '10px', width: '80px'}} onClick={() => setScrip(getScrip())}>yes</button>
        <h1>{scrip}</h1>
      </div>
    </>
  );
};

export default Home;
