// lib
import React from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { Store } from '../../redux/stores/configure-store';
// Component

interface Props { }

const Homepage: NextPage<Props> = () => {
  const isMobile = useSelector((store: Store) => store.appState.isMobile);

  return <div>
    <div>HOME PAGE</div>
    <div>{isMobile ? "Mobile" : "Desktop"}</div>
  </div>;
};

export default Homepage;
