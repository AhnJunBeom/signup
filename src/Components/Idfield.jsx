import React from 'react';

class IdField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {confirmedId : ''}
    this.handleChange = this.handleChange.bind(this);
    this.idConfirm = this.idConfirm.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.props.valueChange('id', value);
  }

  idConfirm(value) {
    const url = '/signup/id?id=' + value;
    fetch(url, {method: "POST"})
    .then(response => {
      console.log(response.ok);
      if(response.ok) {
        this.props.validChange('id', true);
      }
      else {
        this.props.validChange('id', false);
        alert("존재하는 ID입니다.");
      }
    })
  }

  render () {
    return (
      <div>
        <div>
          <label>
            ID : <input type="text" value={this.props.id} onChange={this.handleChange} placeholder="ID를 입력하세요." />
          </label>
          <button onClick={() => this.idConfirm(this.props.id)}>중복확인</button>
        </div>
      </div>
    );
  }
}

export default IdField;
