import './App.css';
import Header from './My component/Header';
import { Desk } from './My component/Desk';
import { Footer } from './My component/Footer';
import { AddIteam } from './My component/AddIteam';
import { About } from './My component/About';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  let initDes;
  if (localStorage.getItem('desk') === null) {
    initDes = [];
  } else {
    initDes = JSON.parse(localStorage.getItem('desk'));
  }
  const onDelete = (des) => {
    console.log('I am onDelete of des', des);
    //  let index = desk.indexOf(des);
    //  desk.splice(index, 1);
    setDesk(
      desk.filter((e) => {
        return e !== des;
      })
    );
    localStorage.setItem('desk', JSON.stringify(desk));
  };

  const addIteam = (title, desc) => {
    console.log('Add this iteam on Desk', title, desc);
    let sno;
    if (desk.length === 0) {
      sno = 0;
    } else {
      sno = desk[desk.length - 1].sno + 1;
    }
    const myIteam = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setDesk([...desk, myIteam]);
    console.log(myIteam);
  };

  const [desk, setDesk] = useState(initDes);
  useEffect(() => {
    localStorage.setItem('desk', JSON.stringify(desk));
  }, [desk]);

  return (
    <>
      <Router>
        <b>
          {' '}
          <Header title=" My Desk " searchBar={false} />
        </b>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddIteam addIteam={addIteam} />
                  <Desk desk={desk} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
