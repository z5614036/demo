import React from "react";
import {Table,Radio,Select,Form,Row,Col,Input,DatePicker,LocaleProvider,Tree,Button,Modal} from "antd";
import {connect} from "react-redux";
import moment from 'moment';
import 'moment/locale/zh-cn';
import styles from "./index.scss";
const Option = Select.Option;
const FormItem = Form.Item;

moment.locale('zh-cn');

class Formtest extends React.Component {
   /* handleAddSbumit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            const values = {
                ...fieldsValue,
                'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
            };
        });
    };*/
    
    constructor(props) {
        super(props);
        this.state = {
            checkedKeys: [],
            selectedKeys: []
        };
    }
    
    onSelect = (selectedKeys, info) => {
        this.setState({ selectedKeys });
    };
    render() {
        

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 9 },
            wrapperCol: { span: 12 },
        };

        return (

            <div>
                <Form
                    style={{ padding: '10px 10px 0 10px' }}>
                    <div className={styles.method1}>
                        <span className={styles.jbtitle}>航班信息</span>
                        <Row gutter={14} style={{width:'100%'}}>
                            <div className="form-row">
                                <Col span={12}>
                                    <FormItem {...formItemLayout} label='机场名称:'>
                                        {getFieldDecorator('cnrt_name',{
                                            rules:[{required:true,message:"必填！"}]
                                        })
                                        (
                                            <Input size="small" style={{width:130}}/>
                                        )
                                        }
                                    </FormItem>
                                </Col>
                            </div>
                            <div className="form-row">
                                <Col span={12}>
                                    <FormItem {...formItemLayout} label='联系人:'>
                                        {getFieldDecorator('contact_name',{
                                            rules:[{required:true,message:"必填！"}]
                                        })
                                        (
                                            <Input size="small" style={{width:130}}/>
                                        )
                                        }
                                    </FormItem>
                                </Col>
                            </div>
                        </Row>
                        <Row gutter={14} style={{width:'100%'}}>
                            <div className="form-row">
                                <Col span={12}>
                                    <FormItem {...formItemLayout} label='联系电话:'>
                                        {getFieldDecorator('contact_phone_nbr',{
                                            rules:[{required:true,pattern:/^[\d]{11}$/ig,message:"11位手机号"}],
                                        })
                                        (
                                            <Input size="small" style={{width:130}}/>
                                        )
                                        }
                                    </FormItem>
                                </Col>
                            </div>
                            <div className="form-row">
                                <Col span={12}>
                                    <FormItem {...formItemLayout} label='联系地址:'>
                                        {getFieldDecorator('contact_addr',{
                                                initialValue:""
                                            }
                                        )(
                                            <Input size="small" style={{width:130}}/>
                                        )
                                        }
                                    </FormItem>
                                </Col>
                            </div>
                        </Row>
                        <Row gutter={14} style={{width:'100%'}}>
                            <div className="form-row">
                                <Col span={12}>
                                    <FormItem {...formItemLayout} label='备注:'>
                                        {getFieldDecorator('remark',{
                                            initialValue:""
                                        })(
                                            <Input.TextArea autosize style={{width:130}}/>
                                        )
                                        }
                                    </FormItem>
                                </Col>
                            </div>
                        </Row>
                    </div>
                </Form>
            </div>
        )
    }
}
export default Form.create({widthRef:true})(Formtest);
