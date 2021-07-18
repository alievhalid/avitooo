import React from 'react'
import { useSelector } from 'react-redux'

function ModalPhoto() {

    const modalImage = useSelector(state => state.modal.modalImage)
    const loading = useSelector(state => state.modal.loading)
    return (
        <div className="modal-img">
            {loading ? 'идет загрузка' : <div>
            <img src={modalImage.url} alt="" />
        </div>}
        </div>
    )
}

export default ModalPhoto
