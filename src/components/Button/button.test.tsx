import React from 'react'
import {render} from '@testing-library/react'
import Button from './button'

test('our first react test case', () => {
  const wrapper = render(<Button>nice</Button>)
  const ele = wrapper.queryByText('nice')
  expect(ele).toBeTruthy()
  expect(ele).toBeInTheDocument()
})

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    
  })
})