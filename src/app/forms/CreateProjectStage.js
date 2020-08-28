import React from 'react'
import { Form, Input, Button, Space, Switch, InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


export default function CreateProjectStages() {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  const { TextArea } = Input;

  return (
    <div className="create-project-form">
      <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
        <Form.List name="users">
          {(fields, { add, remove }) => {
            return (
              <div className="d-flex flex-wrap justify-content-center">

                {fields.map(field => (
                  <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                    <div className="card project-stage-card">
                      <div className="p-3">
                        <Form.Item

                          {...field}
                          name={[field.name, 'Name']}
                          fieldKey={[field.fieldKey, 'Name']}
                          rules={[{ required: true, message: 'Missing stage name' }]}
                        >
                          <Input placeholder="Stage Name" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, 'description']}
                          fieldKey={[field.fieldKey, 'description']}
                          rules={[{ required: true, message: 'Missing stage description' }]}
                        >
                          <TextArea placeholder="Stage Description" />
                        </Form.Item>

                        <Form.Item
                          {...field}
                          name={[field.name, 'hours']}
                          fieldKey={[field.fieldKey, 'hours']}
                          rules={[{ required: true, message: 'Missing estimated hours' }]}>
                          <InputNumber placeholder="Estimated Hours" />
                        </Form.Item>

                        <Form.Item
                          {...field}
                          name={[field.name, 'rate']}
                          fieldKey={[field.fieldKey, 'rate']}
                          rules={[{ required: true, message: 'Missing hourly rate' }]}>
                          <InputNumber placeholder="Hourly Rate" />
                        </Form.Item>


                      </div>
                    </div>


                    <MinusCircleOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Space>
                ))}


                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    block
                  >
                    <PlusOutlined /> Add Project stage
                </Button>
                </Form.Item>

              </div>
            );
          }}
        </Form.List>

        <Form.Item label="Share with client">
          <Switch />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form >
    </div>
  );
}