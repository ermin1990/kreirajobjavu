import React from 'react'

function MyClub() {

  state = {
    clubName: '',
    clubLocation: '',
    clubColor: ''
  };

  componentDidMount(){
    const myClub = localStorage.getItem('myClub');
    if (myClub) {
      const { clubName, clubLocation, clubColor } = JSON.parse(myClub);
      this.setState({ clubName, clubLocation, clubColor });
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { clubName, clubLocation, clubColor } = this.state;
    localStorage.setItem('myClub', JSON.stringify({ clubName, clubLocation, clubColor }));
  };


  return (
    <div className='addMyClub'>
      

      {clubName ? (
          <div>
            <h2>{clubName}</h2>
            <p>Location: {clubLocation}</p>
            <p>Color: {clubColor}</p>
            <button onClick={() => this.setState({ clubName: '', clubLocation: '', clubColor: '' })}>
              Delete
            </button>
            <button onClick={() => this.setState({ editing: true })}>Edit</button>
          </div>
        ) : (
          <form onSubmit={this.handleFormSubmit}>
          <div>
          <label htmlFor="clubName">Club Name:</label>
          <input type="text" id="clubName" name="clubName" value={clubName} onChange={this.handleInputChange} />
          </div>
          <div>
          <label htmlFor="clubLocation">Club Location:</label>
          <input type="text" id="clubLocation" name="clubLocation" value={clubLocation} onChange={this.handleInputChange} />
          </div>
          <div>
          <label htmlFor="clubColor">Club Color:</label>
          <input type="text" id="clubColor" name="clubColor" value={clubColor} onChange={this.handleInputChange} />
          </div>
          <button type="submit">Save</button>
          </form>
          )}
          {this.state.editing && (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label htmlFor="clubName">Club Name:</label>
          <input type="text" id="clubName" name="clubName" value={clubName} onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="clubLocation">Club Location:</label>
          <input type="text" id="clubLocation" name="clubLocation" value={clubLocation} onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="clubColor">Club Color:</label>
          <input type="text" id="clubColor" name="clubColor" value={clubColor} onChange={this.handleInputChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    )}
  </div>
  )
}

export default MyClub