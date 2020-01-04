import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/profile">
        Profile
      </a>

      <a className="menu-item" href="/revdep">
        Revenu/Dépense
      </a>

      <a className="menu-item" href="/historique">
        Historique
      </a>

      <a className="menu-item" href="/graphe">
        Graphe
      </a>

      <a className="menu-item" href="/option">
        Option
      </a>
    </Menu>
  );
};