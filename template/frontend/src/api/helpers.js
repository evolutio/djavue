const dataToForm = (params) => {
  params = params || {}
  const formData = new FormData()
  for (const k of Object.keys(params)) {
    formData.append(k, params[k])
  }
  return formData
}

export default {
  dataToForm,
}
