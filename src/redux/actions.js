export const loadUsers = () => {
    return (dispatch) => {
        dispatch({
            type: "users/load/start"
        })
        fetch("https://boiling-refuge-66454.herokuapp.com/images")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: "users/load/success",
                    payload: json
                })
            })
    }
}

export const loadModal = (id) => {
    return (dispatch) => {
        dispatch({
            type: "modal/load/start"
        })
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'modal/load/success',
                    payload: {
                        url: json.url,
                        date: new Date().toLocaleString()
                    },
                    comments: json.comments,
                })
            })
    }
}

export const addComments = (id, text, name) => {
    return (dispatch) => {
        dispatch({ type: 'add/comment/start' })

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                text: text,
                date: new Date().toLocaleString()
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(() => {
                dispatch({
                    type: 'add/comment/success',
                    payload: {
                        name: name,
                        text: text,
                        date: new Date().toLocaleString()
                    }
                })
            })
    }
}