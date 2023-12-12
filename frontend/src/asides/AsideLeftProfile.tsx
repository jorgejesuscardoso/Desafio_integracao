import { LeftProfile } from "./style"

export const AsideLeftProfile = () => {

    const handleSendPhoto = (e) => {
        e.preventDefault();        
    }
    return (
        <LeftProfile>
            <form action="POST" onSubmit={ (e) => handleSendPhoto(e) }>
                <label htmlFor="file">Enviar Foto</label>
                <input type="file" id="file" />
                <button type="submit">Enviar</button>
            </form>
        </LeftProfile>
    )
}