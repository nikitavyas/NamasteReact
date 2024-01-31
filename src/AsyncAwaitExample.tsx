import React, {  useState } from 'react'
import { Alert, Button, Card, Col, Divider, Row, Space } from 'antd';
import { CheckCircleFilled, ClockCircleFilled } from '@ant-design/icons';

const AsyncAwaitExample = () => {
  const [list, setList] = useState([{
      task : 'Wake up at 7',
      done : false
    },{
      task : 'Brush your teeth',
      done : false
    },{
      task : 'Take bath',
      done : false
    },{
      task : "Get Ready",
      done : false
    },{
      task : 'Do Prayer',
      done : false
    },{
      task : 'Eat your breakfast',
      done : false
    }
  ])
  const [showSucess,setShowSuccess] = useState(false);

  const startYourDay =  (taskIndex: number) => {
   if(taskIndex < list.length){
    setTimeout(async () => {
      let tempList = [...list];
      tempList[taskIndex].done = true;
      setList([...tempList])
      await startYourDay(taskIndex+1)
    },1000);
   }else{
    setShowSuccess(true);
   }
  }

  return ( 
    <div>
      <Row style={{marginBottom:'10px'}}>
      {showSucess &&
      <Alert message={`Wohoo!! You ready to go!!!`} type="success" closable />}
      </Row>
      <Row>
        <Button type="primary" onClick={() => startYourDay(0)} disabled={showSucess}>Start your Day</Button>
      </Row>
      <Divider orientation="left">Task List</Divider>
      <Space direction="horizontal" size={4}>
        <Row gutter={[16, 16]}>
          {list.map((data,index) => {
            return <Col span={8}>
            <Card title={`Task ${index + 1}`} bordered={true}
             extra={<p>{data.done ? <CheckCircleFilled style={{ color: 'green' }}/> :
              <ClockCircleFilled style={{ color: 'red' }}/>}</p>} style={{ width: 300 }}>
            <p>{data.task} </p>
          </Card>
          </Col>
          })}
        </Row>
      </Space> 
      
    </div>
  )
}

export default AsyncAwaitExample