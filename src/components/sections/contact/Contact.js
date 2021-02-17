import React, { useState } from "react"
import MapWrapper from "../../UX-UI/googleMaps/MapWrapper"
import { Form, Input, Button, Popconfirm, message } from "antd"
import "antd/dist/antd.css"

import "./style/style.css"

const Contact = ({ section, isChanging, filterFx, appContext }) => {
  const [form] = Form.useForm()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [messageArea, setMessageArea] = useState("")
  const [visible, setVisible] = useState(false)

  const layout = {
    labelCol: {
      sm: { span: 24 },
    },
    wrapperCol: {
      sm: { span: 24 },
    },
  }

  const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${label} nécéssaire.",
    types: {
      email: "Ce n'est pas un email valide.",
    },
  }

  const showPopUp = (title) => {
    message.success(title)
    showPopUp(true)
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: name,
        email: email,
        message: messageArea,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return showPopUp("C'est envoyé. Merci !")
        } else {
          return showPopUp("Echec de l'envoi")
        }
      })
      .catch((error) => console.log(error))
    form.resetFields()
    e.preventDefault()
  }

  const confirm = () => {
    setVisible(true)
    message.success("Sucess YEEEEAH")
  }

  const handleVisibleChange = (visible) => {
    if (!visible) {
      setVisible(visible)
      return
    }
    confirm()
  }

  if (section) {
    const settings = appContext.globalSettings[0]
    return (
      <div
        className={`section section${section.tech.order} ${isChanging} contact`}
      >
        {/* <Modal
          title={modalTitle}
          visible={modalVisible}
          footer={null}
          style={{ backgroundColor: "red", height: "100px" }}
        ></Modal> */}
        <div className={`section-container ${filterFx}`}>
          {/* Google Maps */}
          <div className='left-side'>
            <MapWrapper />
          </div>
          <div className='right-side'>
            <div className='adress'>
              <h3>Contact</h3>
              <span>{settings && settings.adress}</span>
              <span>
                {settings && settings.zipcode} - {settings && settings.city}
              </span>
              <span>{settings && settings.phone}</span>
            </div>

            {/* Voir index.html où se situe le <form hidden /> */}
            <Form
              {...layout}
              form={form}
              validateMessages={validateMessages}
              className='form-contact'
              labelAlign='left'
            >
              <Form.Item
                name={["user", "name"]}
                label='Nom + Prénom'
                className='input-field'
                onChange={(e) => setName(e.target.value)}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label='Email'
                onChange={(e) => setEmail(e.target.value)}
                className='input-field'
                rules={[
                  {
                    type: "email",
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "message"]}
                onChange={(e) => setMessageArea(e.target.value)}
                label='Message'
                className='input-field'
              >
                <Input.TextArea autoSize={{ minRows: 8 }} />
              </Form.Item>
              <Popconfirm onVisibleChange={handleVisibleChange}>
                <Button
                  htmlType='submit'
                  className='send-email-btn'
                  onClick={handleSubmit}
                >
                  Envoyer un email
                </Button>
              </Popconfirm>
            </Form>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default React.memo(Contact)
