import { sendIcon } from "../utils/exports";
import { Icons } from "./Icons";
import { MainFeed } from "./MainFeed";
import { IcoContent, Main, SectionTextArea, SendIcon, TextArea } from "./style";

export const Feed = () => {
  return (
    <Main>
      <SectionTextArea>
        <Icons />
        <TextArea placeholder="O que você está pensando?"></TextArea>
        <IcoContent>
        <button><SendIcon src={ sendIcon } alt="Enviar" /></button>
        </IcoContent>
      </SectionTextArea>
      <MainFeed />
    </Main>
  )
};