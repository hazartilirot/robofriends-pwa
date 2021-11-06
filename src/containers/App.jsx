import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/cards/CardList';
import SearchBox from '../components/SearchBox';
import Spinner from '../components/Spinner';
import { Suspense } from 'react';
import './App.css';
import { fetchRobots, setSearchRobot } from '../action';
import Header from '../components/Header'

const App = ({ robots, fetchRobotsList, isPending, search, onSearchChange }) => {
  useEffect(() => {
    fetchRobotsList()
  }, []);
  
  const filteredRobots = robots.filter(({ name }) =>
      name.toLowerCase().includes(search))
  
  return (
    <Suspense fallback={Spinner}>
      <div className="tc">
        <Header />
        <SearchBox search={onSearchChange} />
        { isPending ? <Spinner /> : <CardList robots={filteredRobots} /> }
      </div>
    </Suspense>
  );
};

  const mapStateToProps = state => ({
      search: state.searchCombined.search,
      robots: state.robotsCombined.robots,
      isPending: state.robotsCombined.isPending,
      error: state.robotsCombined.error
    
  })

  const mapDispatchToProps = dispatch => ({
    onSearchChange: event => 
      dispatch(setSearchRobot(event.target.value.toLowerCase())),
    fetchRobotsList: () => dispatch(fetchRobots)
  })


export default connect(mapStateToProps, mapDispatchToProps)(App);