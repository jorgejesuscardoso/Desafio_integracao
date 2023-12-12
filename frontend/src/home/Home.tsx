import { AsideLeft } from "../asides/AsideLeft"
import { AsideRight } from "../asides/AsideRight"
import Header from "../header/Hader"
import { Main } from "./style"

export const Home = () => {
    return (
        <Main>
            <Header>Feed</Header>
            <AsideLeft />
            <AsideRight />
        </Main>
    )
}