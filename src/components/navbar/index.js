import React from 'react';
import { NavLink } from 'react-router-dom';

import {Navbar, Button} from './styles';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';

class LeftNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      before: '',
      current: '',
      teste: '',
      isFirstLoad: true,
    };
    this.references = Array(3).fill(0).map(() => React.createRef());
  }  

  componentDidMount() {
    console.log(this.references);
    console.log(this.boxRef);
    if ( this.state.current !== this.state.before ) {
      // teve mundança
      this.setState({teste: this.state.before});
      this.setState({before: this.state.current});
    }

    this.references.forEach((e, index)=> {
      if(e.current.classList.contains('active')) {
        this.setState({current: `${index + 1}`})
      }
    })
  }

  componentDidUpdate() {

    if ( this.state.current !== this.state.before ) {
      // teve mundança
      this.setState({teste: this.state.before});
      this.setState({before: this.state.current});
    }
  }

  render() {
    return (
      
      <Navbar teste={this.state.isFirstLoad ? '' : this.state.teste} current={this.state.isFirstLoad ? '' : this.state.current}>

        <NavLink 
          id="a1" 
          to="/" 
          ref={this.references[0]} 
          activeClassName="active"  
          onClick={()=>this.setState({current: '1', isFirstLoad: false})}  
          exact={true}
        >
          <Button>
            <HomeIcon />
          </Button>
        </NavLink>

        <NavLink 
          id="a2" 
          to="/teste" 
          ref={this.references[1]} 
          activeClassName="active" 
          onClick={()=>this.setState({current: '2', isFirstLoad: false})} 
        >
          <Button>
            <CodeIcon />
          </Button>
        </NavLink>

        <NavLink 
          id="a3" 
          to="/projects" 
          ref={this.references[2]}
          activeClassName="active" 
          onClick={()=>this.setState({current: '3', isFirstLoad: false})}
        >
          <Button>
            <WebIcon />
          </Button>
        </NavLink>

      </Navbar>
    );
  }
}

export default LeftNavbar;