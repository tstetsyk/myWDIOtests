import { expect, browser, $ } from '@wdio/globals'

describe('Inventory Page', () => {
    beforeEach( async () => {
        await browser.url(``)
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
    });
    it('Verify elements are displayed on the page', async () => {
        await expect($('.title')).toBeDisplayed()
        await expect($('.shopping_cart_link')).toBeDisplayed()
        await expect($('.inventory_list')).toHaveChildren({ gte: 2 })
    });
    it('Verify no products are available in the Shopping Cart', async () => {
        await $('#add-to-cart-sauce-labs-backpack').click()
        await expect($('.shopping_cart_badge')).toHaveText('1')

        await $('.shopping_cart_link').click()
        await expect($('.inventory_item_name')).toHaveText('Sauce Labs Backpack')

        await $('#remove-sauce-labs-backpack').click()
        await expect($('.removed_cart_item')).toBeExisting()
    })
})

