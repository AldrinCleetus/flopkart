export const ProductCategories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ] as const

  export const PaymentOptions = [{
    paymentType: 'mastercard',
    logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnudatasecurity.com%2Fwp-content%2Fuploads%2F2017%2F03%2FMastercard-logo-sq.png&f=1&nofb=1&ipt=3a9abbbf690dad24e9db88db8651cfaffb6b443a7eed387a15575313fc08c464&ipo=images'
  },
  {
    paymentType: 'visa',
    logo: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffreevector.co%2Fwp-content%2Fuploads%2F2014%2F01%2Fvisa.png&f=1&nofb=1&ipt=0507621fca9cf9b9dfbd7f36dc42e5521d5ff3691649450f4c77f15f674514f4&ipo=images'
  },{
    paymentType: 'googlepay',
    logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.srcu4u.com%2Fcreditunion%2Fwp-content%2Fuploads%2F2019%2F07%2FGoogle-Pay-Logo-01.png&f=1&nofb=1&ipt=fee3a9148cc72dec42cc10625059c3937de83af64c8aac3714bc136e00778237&ipo=images'
  },{
    paymentType: 'paytm',
    logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2021%2F01%2FPaytm_Logo.png&f=1&nofb=1&ipt=bfd9ecfa35db3b51fe70b374b1e5e18c72a2f0d1837cc9a9c0a2132e567f2683&ipo=images'
  },] as const

  // export type test = typeof<keyof Paymento>
  export type PaymentType = typeof PaymentOptions[number]['paymentType'] | ''

  export type CategoryType = typeof ProductCategories[number]