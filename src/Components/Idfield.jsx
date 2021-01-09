import React from 'react';

class IdField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.idConfirm = this.idConfirm.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.props.valueChange('id', value);
  }

  idConfirm(e) {
    e.preventDefault();
    const url = '/signup/id?id=' + this.props.id;
    fetch(url, {method: "POST"})
    .then(response => {
      console.log(response.ok);
      if(response.ok) {
        this.props.validChange('confirmId', this.props.id);
        this.props.validChange('idValid', true);
      }
      else {
        this.props.validChange('confirmId', this.props.id);
        this.props.validChange('idValid', false);
        alert("존재하는 ID입니다.");
      }
    })
  }
  
  renderMessage() {
    if(this.props.id !== '') {
      if(this.props.id !== this.props.confirmId) {return('중복확인을 해주세요');}
      else if(this.props.idValid) {return('사용할 수 있는 ID입니다.');}
      else {return('사용이 불가능한 ID입니다.');}
    }
  }

  render () {
    return (
      <div>
        <div>
          <label>
            ID : <input type="text" value={this.props.id} onChange={this.handleChange} placeholder="ID를 입력하세요." />
          </label>
          <button onClick={this.idConfirm} disabled={this.props.id===''}>중복확인</button>
        </div>
        <div>
          {this.renderMessage()}
        </div>
      </div>
    );
  }
}

export default IdField;
