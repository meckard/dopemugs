import Header from 'src/components/Header/Header'

const DopemugLayout = ({ children }) => {
  return (
    <>
      <Header/>
      <div className='color-block1'></div>
      <div className='color-block2'></div>
      <div className='color-block3'></div>
      {children}
    </>
  )
}

export default DopemugLayout
