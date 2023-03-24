export default { 
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      }, 
    },
    {
      name: 'firstname',
      title: 'Fist Name',
      type: 'string',
    },
    {
      name: 'lastname',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'shipping address',
      title: 'Shipping Address',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ]
}