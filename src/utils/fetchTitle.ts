export async function fetchTitle(url: string) {
  if (!url.startsWith('https://'))
    return null
  const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`)
  const responseText = await response.text()
  const title = (new window.DOMParser()).parseFromString(responseText, 'text/html').title
  return title ?? null
}
