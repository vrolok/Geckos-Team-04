export const questionaire = [
  {
    professionalsToFind: 'House Cleaners',
    type: 'intro',
    nextButtons: 'next',
  },
  {
    question: 'How many bedrooms are in your home?',
    type: 'single',
    options: ['1 bedroom', '2 bedrooms', '3 bedrooms', '4 bedrooms'],
    required: true,
    nextButtons: 'backAndNext',
    validation: 'required',
    validationMessage: 'Please give an answer',
  },
  {
    question: 'Which additional services do you need, if any?',
    type: 'multi',
    options: ['Fridge cleaning', 'Oven cleaning', 'Interior window cleaning', 'Laundry'],
    required: false,
    nextButtons: 'backAndNext',
    validation: '',
    validationMessage: '',
  },
  {
    question: 'Anything else the house cleaner should know?',
    type: 'textarea',
    required: false,
    nextButtons: 'backAndSkip',
    validation: '',
    validationMessage: '',
  },
  {
    question: 'Please confirm where you need the house cleaner.',
    type: 'zipCode',
    required: true,
    nextButtons: 'backAndNext',
    validation: 'zipcode',
    validationMessage: 'Please give a valid 5-digit zipcode.',
  },
  {
    question: 'Where should we send your matches?',
    type: 'email',
    required: true,
    nextButtons: 'backAndNext',
    validation: 'email',
    validationMessage: 'Please give a valid email address.',
  },
  {
    question: 'Please enter your full name.',
    type: 'name',
    required: true,
    nextButtons: 'submit',
    validation: 'name',
    validationMessage: 'Please give your full name.',
  },
];