import { useState } from 'react'
import '../styles/form.css'


const Form = () => {
  const [dataForm, setDataForm] = useState({
    nomeProduto: '',
    precoProduto: '',
  })

  const handleChangeValue = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setDataForm((dataForm) => ({
      ...dataForm,
      [event.target.name]: value,
    }))
  }

  const handleSubmit = (event) => {
    
  
    fetch('http://localhost:8080/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'autorization ' 
        },
        body: JSON.stringify(dataForm),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Erro:', error);
    })
  }

  return (
    <div className="Box">
      <div className="header">
       
        <label className="form-label" htmlFor="nome">
          Cadastrando Produto
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="nomeProduto">
            Nome do Produto
          </label>
          <input className="form-input" type="text" name="nomeProduto" onChange={handleChangeValue} />
        </div>
        <div>
          <label className="form-label" htmlFor="precoProduto">
            Preço do Produto
          </label>
          <input className="form-input" type="text" name="precoProduto" onChange={handleChangeValue} />
        </div>
        <div className="submit-button">
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  )
}

export default Form
