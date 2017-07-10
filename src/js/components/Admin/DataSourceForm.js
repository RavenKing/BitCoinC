import React from 'react';
import ReactDOM from 'react-dom';

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;



class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.onSubmit(values);
      }

    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="id"
          hasFeedback
        >
          {getFieldDecorator('id', {
            rules: [{
                 }, {
              required: true, message: 'id!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="数据源"
          hasFeedback
        >
          {getFieldDecorator('datasource', {
            rules: [{
              required: true, message: '数据源',
            }],
          })(
            <Input  />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="币种"
          hasFeedback
        >
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: '币种哦咯!',
            }],
          })(
            <Input  />
          )}
        </FormItem>
                <FormItem
          {...formItemLayout}
          label="数据源URL"
          hasFeedback
        >
          {getFieldDecorator('url', {
            rules: [{
              required: true, message: 'url!',
            }],
          })(
                     <AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder="website"
            >
            <Input  />
            </AutoComplete>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              identify标示
                <Tooltip title="拿到的 第一个字段?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('identify', {
            rules: [{ required: true, message: 'ID 字段!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="最新价格"
        >
          {getFieldDecorator('price', {
            rules: [{ required: true, message: '最新价格的字段' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="浮动"
        >
          {getFieldDecorator('change', {
            rules: [{ required: true, message: '浮动' }],
          })(
 
              <Input />

          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="交易量"
          extra="交易量."
        >
            {getFieldDecorator('amount', {
                rules: [{ required: true, message: '交易量字段' }],
              })(
                <Input size="large" />
              )}
          </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">提交</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);


export default WrappedRegistrationForm

