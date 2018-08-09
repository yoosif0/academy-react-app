export const persistMyInfo = payload => {
    localStorage.setItem('id', payload.user._id)
    localStorage.setItem('id_token', payload.token)
}

export const unpersistMyInfo = () => {
    localStorage.removeItem('id')
    localStorage.removeItem('id_token')
}
