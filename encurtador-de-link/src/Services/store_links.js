//Busca os links salvos
export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key)

  let linksSaves = JSON.parse(myLinks) || []

  return linksSaves
}

//Salva link novo
export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key)

  //Impede de criar links duplicados
  const hasLink = linksStored.some(link => link.id === newLink.id)

  if (hasLink) {
    return
  }

  //Salva o novo link
  linksStored.push(newLink)
  //Transforma o array em string para enviar ao localStorage
  await localStorage.setItem(key, JSON.stringify(linksStored))
}

//Deleta algum link salvo
export function deleteLink(links, id) {
  let myLinks = links.filter(item => {
    return item.id !== id
  })

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
  return myLinks
}
