import React,{ useState }  from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
function Cardlist({task,Tasks,setTasks}) {
  const [show, setShow] = useState(false);
const [descriptionUpdate,setDesccr]=useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteTask=(id)=>{
    setTasks(Tasks.filter((elt) => elt.id!=task.id));
  };
  const handleUpdate=(e)=>{
    setDesccr(e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setTasks(Tasks.map((el)=>{
      if(el.id==task.id){
        return {...task,desc:descriptionUpdate}
      }
      else{
        return el
      }
    }))
    handleClose();
  }
  return(
   <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>{task&&task.desc}</Card.Title>
        <Button variant="primary" onClick={handleShow}>Update</Button>
        <Button variant="danger" onClick={deleteTask}>Delete</Button>
      </Card.Body>
    </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{" "}
      <Form style={{width:"500px",margin:"auto"}} onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Task</Form.Label>
      <Form.Control type="text" placeholder="Update your tasks" 
      onChange={handleUpdate}/>
    </Form.Group>
    <Button variant="primary" type="submit">
   Update your tasks
    </Button>
  </Form>
  </Modal.Body>
  </Modal>
   </>
  );}
export default Cardlist
