import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../index'
const mockToggleModal = jest.fn();

const currentPhoto ={
    name:'Park Bench',
    category: 'landscape',
    description:'Lorem ipsum',
    index: 1
}
afterEach(cleanup)


describe('Modal is rendering', () => {
  it('renders', () => {
    render(<Modal 
        currentPhoto={currentPhoto} 
        onClose={mockToggleModal} />);
  });

  it('renders', () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />)
    expect(asFragment()).toMatchSnapshot()
  });
});

describe('click event', ()=>{
    it('calls onClose handler', ()=>{
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
          />)
        fireEvent.click(getByText('Close this modal'))
        expect(mockToggleModal).toHaveBeenCalledTimes(1)
    })
})