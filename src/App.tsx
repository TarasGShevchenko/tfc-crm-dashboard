import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

import { UsersPage } from './pages/UsersPage'
import { UserDetailPage } from './pages/UserDetailsPage'
import { Layout } from './components/Layout'

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />

          <Route path="/users" element={<UsersPage />} />

          <Route path="/users/:email" element={<UserDetailPage />} />

          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
