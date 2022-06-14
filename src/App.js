import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Aliment from './pages/Aliment';
import Food from './pages/Food';
import Dashboard from './pages/Dashboard';
import FoodAdd from './pages/FoodAdd';
import FoodShow from './pages/FoodShow';

class App extends Component {
  render() {    
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/aliment" element={<Aliment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" exact element={<Navigate replace to="/login" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/food/add" element={<FoodAdd />} />
          <Route path="/food/show/:id" element={<FoodShow />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;