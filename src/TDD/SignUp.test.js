import { render, screen,cleanup } from "@testing-library/react";
import Navbar from "../Components/Navbar"

describe("Navbar Component Test",()=>{
    afterEach(cleanup)
    test('Heading ', () => {
      render(<Navbar/>)

      const headElement=screen.getByText('Mailing Box')
      expect(headElement).toBeInTheDocument()
    })
    test('Heading ', () => {
        render(<Navbar/>)
        const PageElement=screen.getByText('Home')
        expect(PageElement).toBeInTheDocument()
      })
      test('Heading ', () => {
        render(<Navbar/>)
        const ProductsElement=screen.getByText('Products')
        expect(ProductsElement).toBeInTheDocument()
      })
      test('Heading ', () => {
        render(<Navbar/>)
        const AboutusElement=screen.getByText('About Us')
        expect(AboutusElement).toBeInTheDocument()
      })
    
    
})