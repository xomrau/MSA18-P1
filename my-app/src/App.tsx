import * as React from 'react';
import './App.css';
// import 'api.json';

interface IState {
  cuisines: any[],
  foods: any[],
  
};

// const apiKey = '';
const cuisine = 'https://developers.zomato.com/api/v2.1/cuisines?city_id=70';
const token = 'a1f83fbe9a478384319cb5f424ff097f';

export default class App extends React.Component<{}, IState> {
  constructor(props: any){
    super(props)
    this.state = {
      cuisines: [],
      foods: [],
      
    }
  };

  public getCuisine(){
    fetch(cuisine,{
      headers: {
        'Accept': 'application/json',
        'user-key': token,
      },
      method: 'GET',
      
    })
    .then((response: any) => {
      if (response.ok) {
        return response.json();
      } else{
        throw new Error('Error!');
      }
    })
    .then(data => this.setState({cuisines: data.cuisines_name}))
  };
  
  public search(){
    fetch('')
  };
  
  public render() {
    return (
      <div className="container-fluid">
      <div className="centreText">
        {/* React components must have a wrapper node/element */}
        <div/>
      </div>
    </div>
    );
  };
};
