import { Transaction } from "../../models/transaction";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const {transactions} = useTransactions();
  console.log(transactions);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item: Transaction) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td className={item.type}>
                  {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.amount)}
                </td>
                <td>{item.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(new Date(item.createdAt))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
