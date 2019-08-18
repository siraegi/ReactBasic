import React,{Component} from "react";
import api from '../utils/api';
let powers = '';
class View extends Component {
  state = {
    hero: []
  }
  /*componentDidMount() {
    this.getHero(this.props.match.params['id']);
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps', newProps);
    this.getHero(newProps.match.params['id']);
  }*/
  componentDidMount() {
    //console.log(this.props);
    this.getHero(this.props.id);
  }

  componentWillReceiveProps(newProps) {
    //console.log('componentWillReceiveProps', newProps);
    this.getHero(newProps['id']);
  }

  getHero = async (id) => {
    let response = await api.get(`/api/user/hero/${id}`);
    console.log("VIEW RESPONSE");
    console.log(response);

    let powerName = response.data.powers.map(power => power.name);
    powers = powerName.toLocaleString();
    this.setState({hero: response.data});
  }
  constructor(props){
    super(props);
    //console.log(this.props);
  }
  render() {
    return (
      this.state.hero ?
        <div>

          <div className="form-group mt-1">
            <label htmlFor="name">Name:</label>
            <p className="form-control form-control-sm" id="name">{this.state.hero.name}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="email">Email Address:</label>
            <p className="form-control form-control-sm" id="email">{this.state.hero.email}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="sex">Sex:</label>
            <p className="form-control form-control-sm" id="sex">{this.state.hero.sex}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="country">Country:</label>
            <p className="form-control form-control-sm" id="country">{this.state.hero.country}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="power">Power:</label>
            <p className="form-control form-control-sm" id="power">{powers}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="power">Photo:</label>
            {
              this.state.hero.photo ? <img src={this.state.hero.photo} alt={this.state.hero.name}></img> : ''
            }
          </div>
          <hr className="my-5" />
        </div>
        :
        ''
    )
  }
}
export default View;