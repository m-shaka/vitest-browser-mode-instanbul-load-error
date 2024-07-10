import App from './App'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/vitest'

describe('App', () => {
    test('should render App', () => {
        const res = render(<App />)
        expect(res.baseElement).toBeInTheDocument()
    })
})
