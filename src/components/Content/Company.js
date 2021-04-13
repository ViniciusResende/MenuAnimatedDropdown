import React from 'react';

import { 
  CompanyWrapper, 
  InfoIcon, 
  BuildingIcon, 
  GlobeAmericasIcon, 
  HandshakeIcon,
  BriefcaseFillIcon,
  LeafIcon, 
  NewspaperIcon,
  PenToolIcon,
} from './styles';

export const Company = () => (
  <CompanyWrapper>
    <ul className="primary">
      <li>
        <InfoIcon />
        Sobre
      </li>
      <li>
        <BuildingIcon />
        Clientes
      </li>
      <li>
        <GlobeAmericasIcon />
        Corporativo
      </li>
      <li>
        <HandshakeIcon />
        Parceiros
      </li>
      <li>
        <BriefcaseFillIcon />
        Empregos
      </li>
      <li>
        <LeafIcon />
        Meio ambiente
      </li>
      <li>
        <NewspaperIcon />
        Notícias
      </li>
    </ul>
    <ul className="secondary">
      <li className="title">
        {/* <span className="title-icon" /> */}
        <PenToolIcon /> 
        Do blog
      </li>
      <li>
        Payouts with no code required
        <span className="new-tag">Novo</span>
        <span className="arrow">{'>'}</span>
      </li>
      <li>
        Introducing the Billing customer portal
        <span className="arrow">{'>'}</span>
      </li>
      <li>
        Online bank transfers through FPX are now...
        <span className="arrow">{'>'}</span>
      </li>
    </ul>
  </CompanyWrapper>
);