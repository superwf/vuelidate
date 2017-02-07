import withParams from '../withParams'
export default withParams({type: 'alpha'}, value => /^[a-zA-Z]*$/.test(value))
