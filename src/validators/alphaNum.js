import withParams from './withParams'
export default withParams({type: 'alphaNum'}, value => /^[a-zA-Z0-9]*$/.test(value))
