// @ts-nocheck
import { mount } from '@vue/test-utils'
import App from '../App.vue'
require("babel-core/register");
require("babel-polyfill");

const div = document.createElement('div')
div.id = 'root'
document.body.appendChild(div)

describe('App.spec.js', () => {
  it('renders', () => {
    const wrapper = mount(App, { attachTo: '#root' })
    expect(wrapper.isVisible()).toBe(true)
  })
})