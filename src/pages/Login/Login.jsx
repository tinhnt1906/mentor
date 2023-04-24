import { Form, Input, Button, Checkbox } from 'antd'
function Login() {
  return (
    <>
      <Form>
        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name='remember' valuePropName='checked'>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Login
