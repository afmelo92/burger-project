const imageSizeGenerator = (size: string) => {
  switch (size) {
    case 'small':
      return '20'
    case 'medium':
      return '36'
    case 'large':
      return '56'
    case 'huge':
      return '72'
    default:
      return '12'
  }
}

export default imageSizeGenerator
