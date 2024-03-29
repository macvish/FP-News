export const trimText = (text?: string, length?: number) => {
  if (text) {
    if (length && typeof length === 'number' && text?.length > length) {
      return text.slice(0, length) + '...'
    }
    if(text.length > 30) {
      return text ? text.slice(0, 30) + '...' : ''
    }
  }
  
  return text
}

export const colors = {
  primary: '#2a9df4',
  textSecondary: '#5F5E5F',
  white: '#FFFFFF',
  border: '#EDEEEE'
}
