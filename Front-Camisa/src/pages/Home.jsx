import '../styles/home.css'
const Home = () => {
  const camisas = [
    { nome: "camisa01", preco: "R$ 49,90" },
    { nome: "camisa02", preco: "R$ 59,90" },
    { nome: "camisa03", preco: "R$ 39,90" },
    { nome: "camisa04", preco: "R$ 54,90" },
    { nome: "camisa05", preco: "R$ 44,90" },
    { nome: "camisa06", preco: "R$ 64,90" },
    { nome: "camisa07", preco: "R$ 34,90" },
    { nome: "camisa08", preco: "R$ 74,90" },
    { nome: "camisa09", preco: "R$ 29,90" },
    { nome: "camisa10", preco: "R$ 69,90" }
  ];

  return (
    <table className="table table-white">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
        </tr>
      </thead>
      <tbody>
        {camisas.map((camisa, index) => (
          <tr key={index}>
            <td>{camisa.nome}</td>
            <td>{camisa.preco}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Home;
