import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <td>Tarefa</td>
                            <td>Duração</td>
                            <td>Início</td>
                            <td>
                                <Status statusColor="green">Concluído</Status>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="red">Pendente</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="yellow">Em andamento</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="yellow">Em andamento</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="red">Pendente</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}
