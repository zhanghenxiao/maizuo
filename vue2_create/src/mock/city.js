import Mock from 'mockjs'
 
Mock.mock('/api/index','get',{
  'status' :'200',
  'data': {
    'methods': 'get',
    'name': 'liu man'
  }
})
