/* eslint-disable @typescript-eslint/no-explicit-any */

export const handleDate = (post: any) => {
  const date: any = new Date(post.create_at)
  const now: any = new Date()
  const diffDate = now - date;

  const diffSeg = Math.floor(diffDate / 1000);
  if (diffSeg < 30) {
    return('agora mesmo')
  } else if (diffSeg < 60) {
    return(`há ${diffSeg} segundos`)
  } else if (diffSeg < 3600) {
    const diffMin = Math.floor(diffSeg / 60);
    return(`há ${diffMin} minutos`)    } else if (diffSeg < 86400) {
    const diffHor = Math.floor(diffSeg / 3600);
    return(`há ${diffHor} horas`) 
 } else if (diffSeg < 604800) {
    const diffDias = Math.floor(diffSeg / 86400);
    return(`há ${diffDias} dias`)
 } else if (diffSeg < 2592000) {
    const diffSem = Math.floor(diffSeg / 604800);
    return(`há ${diffSem} semanas`)
 } else if (diffSeg < 31536000) {
    const diffMes = Math.floor(diffSeg / 2592000);
    return(`há ${diffMes} meses`)
 } else {
    const diffAno = Math.floor(diffSeg / 31536000);
    return(`há ${diffAno} anos`)
 }
}
