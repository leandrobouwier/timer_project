import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'


export function History() {
    const { cycles } = useContext(CyclesContext)
    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>
           <pre>{JSON.stringify(cycles, null, 2)}</pre>

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
