import { render, screen } from '@testing-library/react'
import Breadcrumb from './Breadcrumb'
import { BrowserRouter } from 'react-router-dom'

describe('Breadcrumb Component', () => {
  it('renders the breadcrumb with the correct text and link', () => {
    render(
      <BrowserRouter>
        <Breadcrumb name="Productos" />
      </BrowserRouter>
    )

    const homeLink = screen.getByRole('link', { name: /inicio/i })
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')

    const breadcrumbText = screen.getByText(/productos/i)
    expect(breadcrumbText).toBeInTheDocument()

    const chevronIcon = screen.getByRole('img', { hidden: true })
    expect(chevronIcon).toBeInTheDocument()
    expect(chevronIcon).toHaveClass('chevron-right')
  })
})