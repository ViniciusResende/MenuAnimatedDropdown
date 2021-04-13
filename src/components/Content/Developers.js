import React from 'react';

import { 
  DevelopersWrapper,
  BookOpenIcon,
  PulseIcon,
  CodeIcon 
} from './styles';

export const Developers = () => (
  <DevelopersWrapper>
    <div className="primary">
      <BookOpenIcon />

      <div>
        <h3>Documentação</h3>
        <p>Comece a integrar os produtos e as ferramentas da Sua Empresa</p>

        <div>
          <ul>
            <li>
              <h4>Comece já</h4>
            </li>
            <li>Checkout pré-integrado</li>
            <li>Bibliotecas e SDKs</li>
            <li>Plugins</li>
            <li>Exemplos de código</li>
          </ul>

          <ul>
            <li>
              <h4>Guias</h4>
            </li>
            <li>Aceite pagamentos online</li>
            <li>Gerencie assinaturas</li>
            <li>Envie repasses</li>
            <li>Implemente pagamentos presenciais</li>
          </ul>
        </div>
      </div>
    </div>

    <ul className="secondary">
      <li>
        <span className="api-reference" />
        Referência completa da API
      </li>
      <li>
        <PulseIcon />
        Status da API
      </li>
      <li>
        <CodeIcon />
        Código aberto
      </li>
    </ul>
  </DevelopersWrapper>
);