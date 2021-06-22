import { SearchBar } from './Components/Search'

import { Modal } from './Components/Modal'

import SearchProvider from './Context/Search/Provider'

const AlunosPage: React.FC = () => {

  return (
    <>
      <SearchProvider >

        <SearchBar />

        <Modal />
      
      </SearchProvider>
    </>
  )
}

export default AlunosPage