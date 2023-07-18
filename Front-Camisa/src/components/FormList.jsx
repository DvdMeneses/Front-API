import { useState, useEffect } from 'react';
import '../styles/form.css';

const Form = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/produtos')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProdutos(data.content);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }, []);

  return (
    <div className="Box">
      <div className="header">
        <h2>Listagem de Produtos</h2>
      </div>
      <div>
        {produtos.map(produto => (
          <div key={produto.id}>
            <h3>{produto.nomeProduto}</h3>
            <p>Preço: R$ {produto.precoProduto}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
