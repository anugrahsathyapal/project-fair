import React,{ useState } from 'react'
import { Card, Modal } from 'react-bootstrap'


const ProjectCard = () => {
    const [show,setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
   <>
   <Card onClick={handleShow} className='btn shadow'>
      <Card.Img height={'200px'} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFwQEJ-hVm8uHlcKNH5lqeNLpi6GRySBe605zytzYGmBToxr6IqyiISCcepdKXStmHr5s&usqp=CAU" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>

    
    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid rounded-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFwQEJ-hVm8uHlcKNH5lqeNLpi6GRySBe605zytzYGmBToxr6IqyiISCcepdKXStmHr5s&usqp=CAU" alt="" />
            </div>
            <div className="col-lg-6">
              <h1>Title</h1>
              <h6>Languages Used: <span className='text-danger'>language</span></h6>
              <p style={{textAlign:'justify'}}> <span className='fw-bolder'>Project Overview : </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, ipsam fuga quos consequuntur enim nostrum magni alias natus quas aliquid, nam ad, maxime a eius modi accusamus voluptatem distinctio corrupti?
              </p>
            </div>
          </div>
          <div className='mt-2 float-start'>
            <a className='btn btn-secondary me-2' href="https://github.com/anugrahsathyapal" target='_blank'><i className='fa-brands fa-github'></i></a>
            <a className='btn btn-secondary me-2' href="https://github.com/anugrahsathyapal" target='_blank'><i className='fa-solid fa-link'></i></a>

          </div>
        </Modal.Body>
      </Modal>


   </>
  )
}

export default ProjectCard