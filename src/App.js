import React from 'react'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Table from './components/table'

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto mt-10">
        <div className="flex">
          <Sidebar></Sidebar>
          <div className="flex-1">
            <Table></Table>
          </div>
        </div>
      </div>
   </>
  );
}

export default App;
