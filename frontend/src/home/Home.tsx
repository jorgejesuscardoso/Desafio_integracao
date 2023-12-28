import { useEffect } from "react"
import { AsideLeft } from "../asides/AsideLeft"
import { AsideRight } from "../asides/AsideRight"
import { Main } from "./style"
import { HasToken } from "../utils/storage"
import { Feed } from "../feed/Feed"
import { MainContentProfile } from "../profile/Style"

export const Home = () => {
	useEffect(() => {
		HasToken();
}, [])
return (
	<Main>
		<AsideLeft />
		<MainContentProfile >
			<Feed />
		</MainContentProfile>
		<AsideRight />
	</Main>
)
}