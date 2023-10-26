export const latinAmericanCountries = [
  { nameOfCountry: "Argentina", codeOfCountry: "+54" },
  { nameOfCountry: "Bolivia", codeOfCountry: "+591" },
  { nameOfCountry: "Brazil", codeOfCountry: "+55" },
  { nameOfCountry: "Chile", codeOfCountry: "+56" },
  { nameOfCountry: "Colombia", codeOfCountry: "+57" },
  { nameOfCountry: "Costa Rica", codeOfCountry: "+506" },
  { nameOfCountry: "Cuba", codeOfCountry: "+53" },
  { nameOfCountry: "Dominican Republic", codeOfCountry: "+1" },
  { nameOfCountry: "Ecuador", codeOfCountry: "+593" },
  { nameOfCountry: "El Salvador", codeOfCountry: "+503" },
  { nameOfCountry: "Guatemala", codeOfCountry: "+502" },
  { nameOfCountry: "Honduras", codeOfCountry: "+504" },
  { nameOfCountry: "Mexico", codeOfCountry: "+52" },
  { nameOfCountry: "Nicaragua", codeOfCountry: "+505" },
  { nameOfCountry: "Panama", codeOfCountry: "+507" },
  { nameOfCountry: "Paraguay", codeOfCountry: "+595" },
  { nameOfCountry: "Peru", codeOfCountry: "+51" },
  { nameOfCountry: "Puerto Rico", codeOfCountry: "+1" },
  { nameOfCountry: "Uruguay", codeOfCountry: "+598" },
  { nameOfCountry: "Venezuela", codeOfCountry: "+58" },
  { nameOfCountry: "Belize", codeOfCountry: "+501" },
  { nameOfCountry: "Guyana", codeOfCountry: "+592" },
  { nameOfCountry: "Suriname", codeOfCountry: "+597" },
  { nameOfCountry: "Trinidad and Tobago", codeOfCountry: "+1" },
  { nameOfCountry: "Haiti", codeOfCountry: "+509" },
  { nameOfCountry: "Jamaica", codeOfCountry: "+1" },
  { nameOfCountry: "Barbados", codeOfCountry: "+1" },
  { nameOfCountry: "Antigua and Barbuda", codeOfCountry: "+1" },
  { nameOfCountry: "Grenada", codeOfCountry: "+1" },
  { nameOfCountry: "Saint Lucia", codeOfCountry: "+1" },
  { nameOfCountry: "Saint Vincent and the Grenadines", codeOfCountry: "+1" }
];

export const clientObject = {
  name: '',
  lastName: '',
  celPhone: '',
  email: '',
  dateOfBirth: ''
}

export const validationForm = (templateClient) => {
  const errors = {}
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const dominiosPermitidos = [
    'gmail.com',
    'hotmail.com',
    'yahoo.com',
    'yahoo.es',
    'outlook.com',
    'outlook.es',
  ]
  const dominiosPermitidosRegex = new RegExp(
    `^[a-zA-Z0-9._%+-]+@(${dominiosPermitidos.join('|')})$`,
    'i',
  )

  if (!templateClient.name.length) {
    errors.name = 'Por favor ingresa tu nombre.'
  }

  if (!templateClient.lastName.length) {
    errors.lastName = 'Por favor ingresa tu apellido.'
  }

  if (!templateClient.celPhone.length) {
    errors.celPhone = 'Por favor ingresa tu numero de telefono.'
  }

  if (!templateClient.dateOfBirth.length) {
    errors.dateOfBirth = 'Por favor ingresa tu fecha de nacimiento.'
  }

  if (!templateClient.email.length) {
    errors.email = 'Por favor ingresa tu email.'
  }

  if (!regexEmail.test(templateClient.email)) {
    errors.email = 'Por favor ingresa un email válido.'
  }

  if (!dominiosPermitidosRegex.test(templateClient.email)) {
    errors.email = 'Por favor ingresa un dominio de email válido.'
  }

  return errors;
}
