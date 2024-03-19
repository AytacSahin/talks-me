
import AppNavigation from "./src/navigation/AppNavigation";
import React from 'react';
import { MyProvider } from './Context';

export default function App() {
  return (
    <MyProvider>
      <AppNavigation />
    </MyProvider>
  );
}

