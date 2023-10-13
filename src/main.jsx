import React from 'react'
import ReactDOM from 'react-dom'
import UseMemo_page from './useMemo/useMemo_page'
import UseContextAPP from './useContext/useContext_page'
// import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < UseContextAPP />

    {/* <UseMemo_page />         */}
    {/* <App /> */}
  </React.StrictMode>,
)