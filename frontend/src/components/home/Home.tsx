import { useEffect } from "react"
import { AsideLeft } from "../asides/AsideLeftHome"
import { AsideRight } from "../asides/AsideRightHome"
import { Main, MainContent } from "./style"
import { HasToken } from "../utils/storage"
import { Feed } from "../feed/Feed"

export const Home = () => {
	useEffect(() => {
		HasToken();
}, [])
return (
	<Main>
		<AsideLeft />
		<MainContent >
				<Feed />
		</MainContent>
		<AsideRight />
	</Main>
)
}