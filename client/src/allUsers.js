import React from 'react';

class AllUsers extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    return(
      <ul>
        {this.props.profiles.map(function(pf){
          return <li>{pf.username+": "+pf.last_name+", "+pf.first_name}</li>;
        })}
      </ul>
    )
  }

}

export default AllUsers