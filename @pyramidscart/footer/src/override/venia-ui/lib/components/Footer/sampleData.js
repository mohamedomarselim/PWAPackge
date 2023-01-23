import { ContactLink } from '@magento/venia-ui/lib/components/ContactPage';

const accountLinks = new Map()
    .set('Account', '/account-information')
    .set('Sign In', '/sign-in')
    .set('Register', '/create-account')

const aboutLinks = new Map()
    .set('About Us', '/about-us')
    .set('Our Story', null)

const helpLinks = new Map()
    .set('Help', null)
    .set('Contact Us', {
        path: '/contact-us',
        Component: ContactLink
    })
    .set('Customer Service', '/customer-service')


export const DEFAULT_LINKS = new Map()
    .set('account', accountLinks)
    .set('about', aboutLinks)
    .set('help', helpLinks);

export const LOREM_IPSUM =
    'Welcome to blogs.';
