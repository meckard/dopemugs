import Header from 'src/components/Header/Header'

const DopemugLayout = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default DopemugLayout
