import React from "react";
import {
  Form,
  Input,
  DatePicker,
  Col,
  TimePicker,
  Select,
  Cascader,
  InputNumber
} from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};

export default class Forms extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Form - Example</h1>
        <Form>
          <Form.Item
            {...formItemLayout}
            label="Fail"
            validateStatus="error"
            help="Should be combination of numbers & alphabets"
          >
            <Input placeholder="unavailable choice" id="error" />
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label="Warning"
            validateStatus="warning"
          >
            <Input placeholder="Warning" id="warning" />
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label="Validating"
            hasFeedback
            validateStatus="validating"
            help="The information is being validated..."
          >
            <Input
              placeholder="I'm the content is being validated"
              id="validating"
            />
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label="Success"
            hasFeedback
            validateStatus="success"
          >
            <Input placeholder="I'm the content" id="success" />
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label="Warning"
            hasFeedback
            validateStatus="warning"
          >
            <Input placeholder="Warning" id="warning" />
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label="Fail"
            hasFeedback
            validateStatus="error"
            help="Should be combination of numbers & alphabets"
          >
            <Input placeholder="unavailable choice" id="error" />
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label="Success"
            hasFeedback
            validateStatus="success"
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label="Warning"
            hasFeedback
            validateStatus="warning"
          >
            <TimePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label="Error"
            hasFeedback
            validateStatus="error"
          >
            <Select defaultValue="1">
              <Select.Option value="1">Option 1</Select.Option>
              <Select.Option value="2">Option 2</Select.Option>
              <Select.Option value="3">Option 3</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label="Validating"
            hasFeedback
            validateStatus="validating"
            help="The information is being validated..."
          >
            <Cascader defaultValue={["1"]} options={[]} />
          </Form.Item>

          <Form.Item label="inline" {...formItemLayout}>
            <Col span={11}>
              <Form.Item
                validateStatus="error"
                help="Please select the correct date"
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={2}>
              <span
                style={{
                  display: "inline-block",
                  width: "100%",
                  textAlign: "center"
                }}
              >
                -
              </span>
            </Col>
            <Col span={11}>
              <Form.Item>
                <DatePicker />
              </Form.Item>
            </Col>
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label="Success"
            hasFeedback
            validateStatus="success"
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}
