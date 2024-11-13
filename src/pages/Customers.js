import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Customerinfo from '../components/Customers/customerinfo';
import data from '../data/customers';

const Customers = () => (
  <Main
    title="Customers"
    description="Meet our valued customers"
  >
    <article className="post" id="customers">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/customers">Customers</Link></h2>
        </div>
      </header>
      {data.map((customer) => (
        <Customerinfo
          data={customer}
          key={customer.title}
        />
      ))}
    </article>
  </Main>
);

export default Customers;
