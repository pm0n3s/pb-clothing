import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51JjqexFjbhNV8SbjRdNhiPSvuY5j2yLMcAZdUVZkf8qcQCtXjlWVxMPbLuWNzg4vIPOvykYljyx6AmXeIiIqSV8300EyInoKSV'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Checkout'
            name='pb Clothing'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            ammount={priceForStripe}
            panelLabel='Checkout'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton