import Header from 'src/components/Header/Header'
import { Toaster } from '@redwoodjs/web/dist/toast'

const DopemugLayout = ({ children }) => {
  return (
    <>
      <Toaster style='background-color:#89A25B;' toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Header/>
      <div className='color-block1'></div>
      <div className='color-block2'></div>
      <div className='color-block3'></div>
      {children}
    </>
  )
}

export default DopemugLayout
