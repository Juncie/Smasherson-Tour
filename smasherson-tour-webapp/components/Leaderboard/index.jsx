import { Table } from "flowbite-react"
import { DarkThemeToggle } from "flowbite-react";
import TabBar from "../TabBar";
export default function Leaderboard({data=[], title="Leaderboard"}) {
    return(
        <div className="container mx-auto flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">{title}</h1>
                <DarkThemeToggle />
            </div>
          
            <Table striped>
                <Table.Head>
                    <Table.HeadCell>
                        Rank
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Score
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Smash Cash Earned
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                   {data.map((item) => (
                        <Table.Row>
                            <Table.Cell>
                                <span className="font-bold">{item.rank}</span>
                            </Table.Cell>
                            <Table.Cell>
                                {item.name}
                            </Table.Cell>
                            <Table.Cell>
                                {item.score}
                            </Table.Cell>
                            <Table.Cell>
                                {item.earnings}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            
        </div>
                                
    )
}