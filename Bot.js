import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Dialogflow_V2 } from "react-native-dialogflow"
import Voice from 'react-native-voice';
//Importando configurações
import {
  private_key,
  client_email
} from './app.json';

export default class Chat extends React.Component {

  state = {
    messages: []
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Olá! Como posso ajudar?",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          }
        }
      ]
    });
    Dialogflow_V2.setConfiguration(
      'duda-bgm@caramel-gate-288821.iam.gserviceaccount.com',
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDSCC3lqPQF2B/m\n89AnjGplF4XecKrqHGc1Yv6ZJar2gY1a47vUBMh4Ci66cBogRN/AJu0AjjbSYcpm\niBZ3dkJgGZSSzhI9ff3YJ7xd+vfVuj0wr9QoOXJ4DmK6Kizikh+yo5B7l3NNBj+0\nuivp9mvUrbDmIxxixCFe2ZmGxJogeebPy6UuZrw7kuELx9Grd1TNKJW0NcyqIfjE\nTwq5HnvFZwDsvUF7GfELGV0sCHmdIpXRHCuqwyUvnY385ida0bEO8DW/dQoxm1jg\nO9OcwqsBDxRq7d/Ck+2bDr71kb2Cd7ql5UnmRw//wupxqJuLZXiE5bCY1ShTAtGe\nNqAimSVVAgMBAAECggEARowCxppKZNAkXxHUAAS1FAGjsISNlBc4P4Fh3RT+6M+5\nKCdIRr3YjCF3cp4G2IHp2gP5JW+fUGkScAAT88pgHyFYezsGe2sfYYRvS+3pYvus\nY/cbPuuU3GiQltFlxDCqvvkbpbfIPb30lgLWjz57F7PDsHlopnAUeWSDofXVg0Ry\n3J07fSn3DZ+jseLQiiX5fWMwgWQilr1Bg5NpbEzRC6k0OMFnIOVDjrE+sQuJoHAI\nBsb01kfga93LgFo39sjvgKw7XEwoeQ+uBju4yNNfsX4FlyvnOLh4grI7plBEng6C\nsIZc3QP8UAqUNM8NL4Z/6w+IspCUJeOxk0f2jjxU/QKBgQD0KsXhCvVdRqPvwWQJ\nOupsC47+6mzY3nOSqgPgSkDB4JCa2og9c5Q4Hw+sndN5pYEATNKMhpeLS2Wf/Y8B\nIjD08HfrS4Kd1bjw8wQLbFdZUmegnCdWc/jV1u5ZTti4raag5iLZnanxY/SSMF0E\n7M5ing/CRrklTUrQQxkh0zP3PwKBgQDcNenLyTpEkwFHTs2VSC2w7jPp4sTwvRCV\nbNE9/0o8pn0nxbxlYFsAgIaHHcJBaCCSnJH2KXoIrVApSGlqYbFZnDMMZ0bDVVXQ\n6DVi1+fCnie5hjag4mibRT16eSvEkxjYisZjW9+6vvCjIgJJqRJvNa2pK66vsQvZ\nOQvRh0myawKBgQC+LNaFKsjjhtLHOiTVf5r43qPY7vQqklEISf3M42i+2U8oHdAB\ntRUcBS1rMF53oC3y8uMHawl8CBS2YYLRyjTBgs6UaPLqRn3Oxik/UHpUavelxBpr\nntaQj+CDlQL+DNr89WLthnzINCdY+expmpxBeYUit30bjbEYtzpK+zq9dwKBgQCp\nwIWxqjVYl1ns9jpUUYenVHiAW2cljRkzlubVu+4mQtFHz44jN9vuzyTlE3Ojp/k0\nC64Y7HA+MBwTNtbMQvLL+TUA4rwR5753hAljYLwvsms9ANErxFyPFRkHSFEM/7ev\ndYrpHPGiq34kwxqwXbzwLZjpR9spZHmVwfvyUS/mcQKBgEZY1zo/PW+0vMJI0Dsj\nTClpoPJ8rHDDcMHNtb5H8YVx2rgXUw3BWvv+sQ1cAIP0DWF1LUKTAS1ZZptyewFb\n8sy1Z+o+QHSDxN5dh/MYKMtAr3P6RHZZT6hvGRxuInZXjXW4zGUi3UD6tSb2EwO9\nSlIvN6CYIzhdmvMYufyE+142\n-----END PRIVATE KEY-----\n',
      Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
      'assistenteredacao'
    );
    Dialogflow_V2.startListening(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    messages.forEach(message => {
      console.log(message.text);
      Dialogflow_V2.requestQuery(
        message.text,
        result => {
          console.log(result)
          messages = [
            {
              _id: result.responseId,
              text: result.queryResult.fulfillmentText,
              createdAt: new Date(),
              user: {
                _id: 2,
                name: "Bot",
                avatar: "https://placeimg.com/140/140/any"
              }
            }
          ]
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
          }))
        },
        error => console.log(error)
      );
    });

  }

  render() {
    return <GiftedChat
      messages={this.state.messages}
      onSend={messages => this.onSend(messages)}
      placeholder="Digite aqui..."
      locale="pt-BR"
      user={{
        _id: 1,
      }}
    />;
  }
}