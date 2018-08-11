const clearInput = (inputChangeHandler, name) => {
 return (
   () => inputChangeHandler({ target: { name, value: '' }})
 )
}

export default clearInput
