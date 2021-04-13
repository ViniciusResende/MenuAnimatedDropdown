import React from 'react';

import { 
  ProductsWrapper,
  PaymentIcon,
  MoneyBillAltIcon,
  ConnectionIcon,
  RadarIcon,
  SpreadsheetIcon,
  LightbulbFillIcon,
  ClockFillIcon,
  Building2Icon 
} from './styles';

export const Products = () => (
  <ProductsWrapper>
    <ul className="primary">
      <li>
        <span className="payments">
          <PaymentIcon />
        </span>  

        <div>
          <h3>Payments</h3>
          <p>Plataforma completa para pagamentos online</p>
        </div>
      </li>
      <li>
        <span className="billing">
          <MoneyBillAltIcon />
        </span>  
        <div>
          <h3>Billing</h3>
          <p>Plataforma completa para pagamentos online</p>
        </div>
      </li>
      <li>
        <span className="connect">
          <ConnectionIcon />
        </span> 
        <div>
          <h3>Connect</h3>
          <p>Plataforma completa para pagamentos online</p>
        </div>
      </li>
    </ul>

    <ul className="secondary">
      <li>
        <span className="sigma">
          <Building2Icon />
        </span>

        <h3>Empresa</h3>
        <p>Análises e relatórios comerciais avançados</p>
      </li>
      <li>
        <span className="atlas">
          <SpreadsheetIcon />  
        </span>

        <h3>Registros</h3>
        <p>Registro de empresas para startups</p>
      </li>
      <li>
        <span className="radar">
          <RadarIcon />
        </span>
        <h3>Radar</h3>
        <p>Prevenção de fraudes com machine learning</p>
      </li>
      <li>
        <span className="issuing">
          <LightbulbFillIcon />
        </span>
        <h3>Issuing</h3>
        <p>Criação de cartões virtuais e físicos</p>
      </li>
      <li>
        <span className="terminal">
          <ClockFillIcon />
        </span>

        <h3>Terminal</h3>
        <p>Pagamentos pessoais programáveis</p>
      </li>
    </ul>
  </ProductsWrapper>
);