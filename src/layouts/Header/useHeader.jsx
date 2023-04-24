import { categories } from '../../mock/Category'

function useHeader() {
  return Object.values(categories).map((item) => {
    return { label: item.name, key: item.href }
  })
}

export default useHeader
