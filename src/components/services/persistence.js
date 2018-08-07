

export const persistMyInfo = (payload) => {
    window.localStorage.setItem('id', payload.user._id)
    window.localStorage.setItem('id_token', payload.token)
}

export const unpersistMyInfo = () => {
    window.localStorage.removeItem('id')
    window.localStorage.removeItem('id_token')
}