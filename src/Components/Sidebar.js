import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Profile
      </a>

      <a className="menu-item" href="/depense">
        Mes Depenses / Revenus
      </a>

      <a className="menu-item" href="/historique">
        Historique
      </a>
    </Menu>
  );
};