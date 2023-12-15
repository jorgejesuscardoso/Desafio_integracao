import { Card } from "./Card"
import { Feed, SectionPost } from "./style"

export const MainFeed = () => {
  return (
    <Feed>
      <SectionPost>
        <Card />
        <Card />
        <Card />
        <Card />
      </SectionPost>
    </Feed>
  )
}