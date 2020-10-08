import React, { useEffect } from 'react';
// import logo from './logo.svg';
import { connect } from 'react-redux';
import { Container,Table } from 'react-bootstrap';
import KeyName from './components/keyName';
import ValueExchange from './components/valueExchange';
import getExchangeAction from './action/getExchangeAction';
import getBuyAction from './action/getBuyAction';
import getSellAction from './action/getSellAction';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = props => {
  useEffect(() => {
    props.getExchange();
    props.getBuy();
    props.getSell();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Container style={{maxWidth:"950px"}}>
        <h2 style={{textAlign:"center"}}>CURRENCY DATA</h2>
        <br></br>
        <Table style={{
          background:"#56CCF2",
          background:"-webkit-linear-gradient(to bottom, #2F80ED, #56CCF2)",
          background:"linear-gradient(to bottom, #2F80ED, #56CCF2)"          
        }}>
          <thead>
            <tr style={{textAlign:"center",color:"#ffffff"}}>
                <th><h5>CURRENCY</h5></th>
                <th><h5>WE BUY</h5></th>
                <th><h5>EXCHANGE RATE</h5></th>
                <th><h5>WE SELL</h5></th>
            </tr>
          </thead>
          <tbody>
              <tr style={{textAlign:"center"}}>
                  <td><KeyName data={props.buy}/></td>
                  <td><ValueExchange data={props.buy}/></td>
                  <td><ValueExchange data={props.exchange}/></td>
                  <td><ValueExchange data={props.sell}/></td>
              </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    exchange : state.exchange,
    buy : state.buy,
    sell : state.sell,
  }
}

// Menggunakan state method yang ada di Redux ke dalam komponen/pages ini
const mapDispatchToProps = (dispatch) => {
  return {
    getExchange: () => dispatch(getExchangeAction()),
    getBuy: () => dispatch(getBuyAction()),
    getSell: () => dispatch(getSellAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
