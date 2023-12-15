import { useEffect } from "react"
import { AsideLeft } from "../asides/AsideLeft"
import { AsideRight } from "../asides/AsideRight"
import { Main } from "./style"
import { HasToken } from "../utils/storage"

export const Home = () => {
	useEffect(() => {
		HasToken();
}, [])
return (
	<Main>
		<AsideLeft />		
		<AsideRight />
	</Main>
)
}