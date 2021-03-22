import React from 'react';
import confLogo from '../images/badge-header.svg';
// Styles
import './styles/Badge.css'

class Badge extends React.Component {

  render(){


    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={this.props.avatar} alt="Avatar" />
          <h1 className="">
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <p>{this.props.profession}</p>
          <p>@{this.props.email}</p>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    )
  }

}

export default Badge;