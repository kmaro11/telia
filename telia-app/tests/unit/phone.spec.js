import { shallowMount } from "@vue/test-utils";
import Phone from '@/components/Phone.vue'

let wrapper = null

beforeEach(() => {
  wrapper = shallowMount(Phone, {
    propsData: {
      type: 'brands'
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Phone', () => {
  it('renders', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('renders image', () => {
    expect(wrapper.find('img'))
  })
  it('get props type', () => {
    expect(wrapper.props().type).toBe('brands')
    expect(wrapper.props('type')).toBe('brands')
  })
  test('emit', async () => {
    wrapper.vm.$emit('selected-phone')
    wrapper.vm.$emit('selected-phone', true)
    await wrapper.vm.$nextTick()
  })
  it('renders phone name', () => {
    expect(wrapper.find('.phone__name'))
  })

})
